const { createFilePath } = require(`gatsby-source-filesystem`);
const path = require("path");
const fetch = require('node-fetch');
const fs = require('fs');

exports.createPages = ({ actions, graphql }) => {
    const { createPage } = actions;

    return new Promise((resolve, reject) => {
        fetch("https://assets.breatheco.de/apis/resources/all")
            .then(resp => resp.json())
            .then(assets => {
	            {/*let technologyTags = [];
                for(let i = 0;i<projects.length;i++){
                    if(technologyTags.indexOf(projects[i].technology) == -1)
                        technologyTags.push(projects[i].technology);
                }*/}
                assets.forEach(a => {
                    createPage({
                        path: `/lesson/${a.slug}`,
                        component: path.resolve("./src/pages/singleAsset.jsx"),
                        context: a,
                    })

                });
                resolve();
            })
            .catch(error => {
                console.log(error);
                reject();
            });
    });

};