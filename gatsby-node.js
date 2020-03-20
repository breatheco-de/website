const { createFilePath } = require(`gatsby-source-filesystem`);
const path = require("path");
const fetch = require('node-fetch');
const fs = require('fs');
const log = require('simple-node-logger').createSimpleLogger('project.log');
const HOST = "https://assets.breatheco.de/apis";
// const HOST = "https://8080-f0d8e861-4b22-40c7-8de2-e2406c72dbc6.ws-us02.gitpod.io/apis";

const parseObjectInToArray = jsonObject=>{
    let aux=[];
    for( let object in jsonObject){
            aux.push(jsonObject[object]);
    }
    return aux;
};

exports.createPages = async ({ actions, graphql }) => {
    const { createPage } = actions;
    
    const resourcesResp = await fetch(HOST+"/resources/all")
    const resources = await resourcesResp.json();
    const lessonsResp = await fetch('https://content.breatheco.de/static/api/lessons.json');
    let lessons = await lessonsResp.json();
    lessons = lessons.filter(l => (l.status === "draft" || l.status === "published"));
    const exercisesResp = await fetch(HOST+'/registry/all');
    const exercises = await exercisesResp.json();
    
    createPage({
        path: `/lessons`,
        component: path.resolve("./src/components/types/lessons.js"),
        context:{
            lessons: lessons || [],
            assets: resources
        },
    });
    
    createPage({
        path: `/assets`,
        component: path.resolve("./src/components/types/assets.js"),
        context:{
            assets: resources
        },
    });
    
    resources.forEach(a => {
        createPage({
            path: `/asset/${a.slug}`,
            component: path.resolve("./src/components/types/single-asset.js"),
            context:a
        })
    });

    createPage({
        path: `/interactive-exercises`,
        component: path.resolve("./src/components/types/exercises.js"),
        context: { exercises },
    });

    Object.keys(exercises).forEach(slug => {
        const _path = `/interactive-exercise/${slug}`;
        createPage({
            path: _path, context: exercises[slug],
            component: path.resolve("./src/components/types/single-exercise.js")
        })
    });
    
    return true;
};

exports.onCreateWebpackConfig = ({
    stage,
    rules,
    loaders,
    plugins,
    actions,
  }) => {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /\.md$/,
            use: [
              `raw-loader`,
            ],
          },
        ],
      }
    })
  }