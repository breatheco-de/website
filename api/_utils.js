const fetch = require('node-fetch');

const HOST = process.env.ACP_HOST;
const HOST_V1 = process.env.ACP_HOST_V1;
let HEADERS = {
    'Api-Token': process.env.ACP_TOKEN
};
// console.log(HOST);
const acp_constants = {
    soft_leads_list: 8,
    newsletter_list: 3,
    auto_bc_download: 58, //when someone downloads content from breathecode

    utm_url: 15,
    utm_location: 18,
    course: 2,
    current_download: 46,
    utm_language: 16,
    utm_country: 19,

    utm_medium: 36,
    utm_content: 35,
    utm_source: 34,
    utm_campaign: 33,
    
    gclid: 26,
    referral_key: 27
};

// TEST API credentials
const test = async () => {
    const result = await ac.credentials_test();
    if(result.success) return true;
    else return false;
}

/**
 * 
    {
        "contact": {
            "email": "johndoe@example.com",
            "firstName": "John",
            "lastName": "Doe",
            "phone": "7223224241"
        }
    }
 */
const validate = (data, keys) => keys.forEach((key) => {
    if(Array.isArray(key)) validate(data, key);
    else if(typeof(data[key]) !== 'string' && data[key] === '') throw new Error('Invalid '+key);
});
const mandatory = (data, keys) => keys.forEach((key) => {
    if(Array.isArray(key)) validate(data, key);
    else if(typeof(data[key]) === 'undefined' || data[key] === '' || data[key] == 'null') throw new Error('Missing '+key);
});
const setOptional = (original, data, key) => {
    if(typeof(acp_constants[key]) === 'undefined') throw new Error('Invalid '+key);
    
    if(typeof(data[key]) !== 'undefined'){
        original["field["+acp_constants[key]+",0]"] = data[key];
    } 
    return original;
}
const serialize = function(obj) {
    var str = [];
    for (var p in obj)
        if (obj.hasOwnProperty(p)) {
        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
        }
    return str.join("&");
}
export const addorUpdateContact = async (contact) => {

    validate(contact, ['email', 'tags', 'first_name','url','utm_language','country_name','gclid', 'utm_location', 'referral_key']);
    mandatory(contact, ['email', 'first_name', 'tags', 'utm_language', 'utm_url']);

    const query = {
        "api_key": process.env.ACP_TOKEN,
        "api_action": "contact_sync",
        "api_output": "json"
    }
    let payload = {
        "email": contact['email'],
        "first_name": contact['first_name'],
        "tags": contact['tags'].join(","),
    };

    /**
     *  $contact = array(
    		"email"              => "test@example.com",
    		"first_name"         => "Test",
    		"last_name"          => "Test",
    		"p[{$list_id}]"      => $list_id,
    		"status[{$list_id}]" => 1, // "Active" status
    	);
    */
    
    if(typeof(contact["last_name"])!=='undefined') payload["last_name"] = contact["last_name"];
    
    payload = setOptional(payload, contact, "utm_url");
    payload = setOptional(payload, contact, "course");
    payload = setOptional(payload, contact, "utm_source");
    payload = setOptional(payload, contact, "utm_location");
    payload = setOptional(payload, contact, "utm_medium");
    payload = setOptional(payload, contact, "utm_campaign");
    payload = setOptional(payload, contact, "utm_content");
    payload = setOptional(payload, contact, "utm_language");
    payload = setOptional(payload, contact, "utm_country");
    payload = setOptional(payload, contact, "gclid");
    payload = setOptional(payload, contact, "referral_key");

    console.log("Payload: ",payload);
    const result = await fetch(`${HOST_V1}/admin/api.php?${serialize(query)}`, {
        method: "POST",
        headers : {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        },
        body: serialize(payload)
    });
    if(result.status >= 200 && result.status < 400){
        const data = await result.json();
        console.log("Result: ", data);
        if(typeof(data.subscriber_id) === "undefined")
            throw new Error("Unexpected error, try again later.");

        const payload2 = { contactAutomation: { 
            contact: data.subscriber_id, 
            automation: acp_constants.auto_bc_download
        }};
        console.log("Adding to automation: ",payload2);
        const result2 = await fetch(`${HOST}/contactAutomations`, {
            method: "POST",
            headers : HEADERS,
            body: JSON.stringify(payload2)
        });
        if(result2.status >= 200 && result2.status < 400){
            const data = await result2.json();
            return data;
        }
        else{
            const err = await result2.json();
            const msg = err.errors.pop();
            throw new Error(msg ? msg.title : "Uknown error");
        }
    } 
    else{
        const err = await result.json();
        const msg = err.errors.pop();
        throw new Error(msg ? msg.title : "Uknown error");
    }
}