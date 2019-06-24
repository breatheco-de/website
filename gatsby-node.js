const { createFilePath } = require(`gatsby-source-filesystem`);
const path = require("path");
const fetch = require('node-fetch');
const fs = require('fs');
const log = require('simple-node-logger').createSimpleLogger('project.log');
const HOST = "https://assets.breatheco.de/apis";

const parseObjectInToArray = jsonObject=>{
    let aux=[];
    for( let object in jsonObject){
            aux.push(jsonObject[object]);
    }
    return aux;
};

exports.createPages = ({ actions, graphql }) => {
const { createPage } = actions;

return new Promise((resolve, reject) => {
fetch("https://assets.breatheco.de/apis/resources/all")
    .then((resourcesResp) => resourcesResp.json())
    .then((resources) => {
        return new Promise((resolve, reject) => {
                    fetch('https://assets.breatheco.de/apis/lesson/all/v2')
                    .then(function(lessonsResponce){
                        return lessonsResponce.json();
                    })
                    .then(function(lessons){
                        //console.log("Lessons antes de parsearse hacia un objeto",lessons)
                        resolve({ lessons: parseObjectInToArray(lessons), resources });
                    })
                    .catch(pupusito => reject(pupusito))
            });
        })
  .then((data)=>{
    log.info("data after .then ", typeof data.lessons);
    data.resources.forEach(a => {
        createPage({
        path: `/asset/${a.slug}`,
        component: path.resolve("./src/pages/singleAsset.jsx"),
        context:a
        })
    });

    log.info("Array? "+Array.isArray(data.lessons),data.lessons);
    createPage({
        path: `/lessons`,
        component: path.resolve("./src/pages/lessons.jsx"),
        context:{
            lessons: data.lessons || [],
            assets: data.resources

        },
    });
    createPage({
            path: `/assets`,
            component: path.resolve("./src/pages/assets.jsx"),
            context:{
             assets: data.resources
            },
        });
    resolve(data);

})
.catch((p) => reject(p))

});

};