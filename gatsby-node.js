const { createFilePath } = require(`gatsby-source-filesystem`);
const path = require("path");
const fetch = require('node-fetch');
const fs = require('fs');
const log = require('simple-node-logger').createSimpleLogger('project.log');
const HOST = "https://assets.breatheco.de/apis";
// const HOST = "https://8080-f0d8e861-4b22-40c7-8de2-e2406c72dbc6.ws-us02.gitpod.io/apis";

exports.createPages = async (params) =>
    await createLessons(params) &&
    await createAssets(params) &&
    await createExercises(params) &&
    await createQuizzes(params) &&
    true;

const createLessons = async ({ actions, graphql }) => {
  const { createPage } = actions;
  const lessonsResp = await fetch('https://content.breatheco.de/static/api/lessons.json');
  let lessons = await lessonsResp.json();
  lessons = lessons.filter(l => (l.status === "draft" || l.status === "published"));

  const authors = [...new Set([].concat.apply([],lessons.map(l => l.authors)))];
  createPage({
      path: `/lessons`,
      component: path.resolve("./src/components/types/lessons.js"),
      context:{
          lessons: lessons || [],
          authors: authors.filter(a => a !== null)
      },
  });
  return true;
}

const createAssets = async ({ actions, graphql }) => {
  const { createPage } = actions;
  const resourcesResp = await fetch(HOST+"/resources/all")
  const resources = await resourcesResp.json();
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

  return true;
}

const createExercises = async ({ actions, graphql }) => {
  const { createPage } = actions;
    
  const dirPath = path.join(__dirname, '/src/content');
  const content = fs.readFileSync(dirPath+"/assets.json");
  const exercises = JSON.parse(content);
  
  createPage({
      path: `/interactive-exercises`,
      component: path.resolve("./src/components/types/exercises.js"),
      context: { exercises },
    });
    
    Object.keys(exercises).forEach(slug => {
        console.log("exercises", slug, exercises[slug]);
      const _path = `/interactive-exercise/${slug}`;
      createPage({
          path: _path, context: exercises[slug],
          component: path.resolve("./src/components/types/single-exercise.js")
      })
  });

  return true;
}

const createQuizzes = async ({ actions, graphql }) => {
  const { createPage } = actions;
    
  const quizzesResp = await fetch(HOST+'/quiz/all');
  const quizzes = await quizzesResp.json();

  createPage({
      path: `/quizzes`,
      component: path.resolve("./src/components/types/quizzes.js"),
      context: { quizzes },
  });

  // quizzes.forEach(q => {
  //     const _path = `/coding-quiz-assessment/${q.info.slug}`;
  //     createPage({
  //         path: _path, context: q,
  //         component: path.resolve("./src/components/types/single-quiz.js")
  //     })
  // });

  return true;
}

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