




const { createFilePath } = require(`gatsby-source-filesystem`);
const path = require("path");
const fetch = require('node-fetch');
const fs = require('fs');
const HOST = "https://assets.breatheco.de/apis";


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
                    resolve({ lessons, resources });
                    })
                    .catch(pupusito =>reject(pupusito))
            });
        })
  .then(function(data){
    data.resources.forEach(a => {
        createPage({
        path: `/asset/${a.slug}`,
        component: path.resolve("./src/pages/singleAsset.jsx"),
        context:a
        })
    });

    createPage({
        path: `/lessons`,
        component: path.resolve("./src/pages/lessons.jsx"),
        context:{
        lessons:data.lessons,
        assets:data.resources

    },
});



console.log("Lessons: ", data.lessons);
console.log("Resources: ",data.resources);
})
.catch(pupusito2 => console.log("pupusito 2"), console.log(pupusito2));

});

};