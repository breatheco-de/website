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

exports.createPages = ({ actions, graphql }) => {
    const { createPage } = actions;

    return new Promise((resolve, reject) => {
        fetch("https://assets.breatheco.de/apis/resources/all")
            .then(resp => resp.json())
            .then(assets => {


                    createPage({
                        path: `/lessons`,
                        component: path.resolve("./src/pages/lessons.jsx"),
                        context: assets,
                    })


                resolve();
            })
            .catch(error => {
                console.log(error);
                reject();
            });
    });

};