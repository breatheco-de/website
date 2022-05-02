import emoji from 'node-emoji';
import publicIp from 'public-ip';
const HOST = 'https://assets.breatheco.de/apis';

const getState = ({ getStore, setStore, getActions }) => {
	return {
		store: {
			assets:null,
			allIssues:null,
			issueLabels:null,
			authors: [],
			tags: [],
			lessons: null,
			events: null,
			markdown: null,
			session: {
				v6: null,
				v4: null,
				latitude: null,
				longitude: null,
				course_type: null,
				email: null,
				location: null,
				utm_language: null,
				utm_location: "other",
				gclid: null,
				utm_campaign: null,
				utm_source: null,
				utm_medium: null,
				referral_code: null,
				active: false,
			},
			// Projects Page
			technologiesTags:null,
			project: null,
			show: false,
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			getStore: () => getStore(),
			getQueryString: (url) => {
				const vars = {};
				url.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
					vars[key] = value;
				});
				return vars;
			},
			startSession: async ({ location }) => {

				const actions = getActions();
				const store = getStore();
                const v4 = await publicIp.v4();
                const v6 = "v6";
                const response = await fetch(`https://api.ipstack.com/${v4}?access_key=73822e5a584c041268f0e78a3253cf0d`)
				.then(async (response) => {
					const data = response.status === 200 ? await response.json() : null;
					console.log("IP Data", data);
					// const location = data ? closestLoc(locationsArray, data.latitude, data.longitude) : null;
					// const location = "Santiago de Chile"
					let utm_language = "en";
					if (typeof (data.location) === "object" && Array.isArray(data.location.languages) && data.location.languages.length > 0) {
						if (data.location.languages[0].code === "en" || data.location.languages[0].code === "es") {
							utm_language = data.location.languages[0].code;
						}
					}
					const urlParams = actions.getQueryString(location.href);
					const session = { ...store.session, v4, v6, country: data.country_code, region: data.region_name, utm_language, ...urlParams };
					setStore({ session });
				}).catch(err => console.log(err));
                
			},
			loadEvents: () => {
				fetch(HOST+"/event/all?status=published&location=downtown-miami&status=upcoming")
					.then(res => res.json())
					.then(events => {
						setStore({events});
					})
					.catch(err => console.error(err))
			},
			loadIssues: () => {
				const actions = getActions();

				fetch(HOST+"/github/issues/all")
					.then(res => res.json())
					.then(issues => {
						let issueLabels =  [];
						let allIssues = [];
						for(let key in issues){
							allIssues = allIssues.concat(issues[key].map(i => ({
								...i,
								labels: i.labels.map(l => actions.emojify(l.name))
							})));
							issueLabels = issueLabels.concat(issues[key].map(i => 
								i.labels.map(l => actions.emojify(l.name))
							));
							issueLabels = actions.filterRepeated([].concat.apply([], issueLabels));
						}
						setStore({ issueLabels, allIssues })
					})
					.catch(err => console.error(err));
			},
			issuesFeed(urlIssue, issueLink, readmeLink, projectLink) {
				if (projectLink) {
					let splitUrl = projectLink.split("/");
					let companyName = splitUrl[3];
					let projectName = splitUrl[4];
					let finalUrl = "https://github.com/" + companyName + "/" + projectName;

					return finalUrl;
				}

				if (urlIssue) {
					let splitUrl = urlIssue.split("/");
					let companyName = splitUrl[3];
					let projectName = splitUrl[4];
					let finalUrl = "https://api.github.com/repos/" + companyName + "/" + projectName + "/issues";
					return finalUrl;
				}

				if (readmeLink) {
					let splitUrl = readmeLink.split("/");
					let companyName = splitUrl[3];
					let projectName = splitUrl[4];
					let finalUrl = "https://github.com/" + companyName + "/" + projectName + "/blob/master/README.md";
					return finalUrl;
				}

				if (issueLink) {
					let splitUrl = issueLink.split("/");
					let companyName = splitUrl[3];
					let projectName = splitUrl[4];
					let finalUrl = "https://github.com/" + companyName + "/" + projectName + "/issues";
					return finalUrl;
				}
			},
			lessonUrl: lesson => {
                if(lesson.slug){
                    let fullLink = `https://content.breatheco.de/${lesson.lang}/lesson/` + lesson.slug.replace(".es","");
				    return fullLink;
                }

			},
			filterRepeated: array => {
				var uniqueTags = [];
				return array.filter(tag => {
					if(!tag || tag === '') return false;
					if (!uniqueTags.includes(tag)) {
						uniqueTags.push(tag);
						return true;
					}
					return false;
				});
			},
			concatTechnologies: openSourceArray => {
				let technologies = [];
				openSourceArray.forEach(item => {
					item.technologies.forEach(technologie => {
						technologies.push(technologie.tech);
					});
				});
				return technologies;
			},
			filterTechnologies: object => {
				let technologies = [];
				object.technologies.forEach(t => {
					technologies.push(t.tech);
				});
				return technologies;
			},
			emojify: (tag) => emoji.emojify(tag, (name) => {
				if(name==='spiral_notepad') return "🗒";
				return name;
			}),
			signupCourse: async (data) => {
				const { session } = getStore();

				if(!Array.isArray(data.tags)) data.tags = [];
				const resp = await fetch('/api/acp_apply.js', {
					headers: new Headers({'content-type': 'application/json'}),
					method: "POST",
					body: JSON.stringify({ 
						...data, 
						tags: data.tags.concat(['breathecode-soft']),
						utm_language: data.utm_language || session.utm_language || undefined,
						utm_location: session.utm_location || undefined,
						utm_campaign: session.utm_campaign || undefined,
						gclid: session.gclid || undefined,
						utm_source: session.utm_source || undefined,
						utm_medium: session.utm_medium || undefined,
						referral_code: session.referral_code || undefined,
						utm_url: data.utm_url
					}),
				});
				
				if (resp.status >= 200 && resp.status < 400){
					return resp.json();
				}else if(resp.status >= 400 &&  resp.status < 500){
					const error = await resp.json();
					throw Error(error.message);
				}else{
					throw Error('Unexpected error');
				}
			},
			// Projects page
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
