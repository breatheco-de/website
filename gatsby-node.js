const { createFilePath } = require(`gatsby-source-filesystem`);
const path = require("path");
const fetch = require('node-fetch');
const fs = require('fs');
const log = require('simple-node-logger').createSimpleLogger('project.log');
const HOST = process.env.GATSBY_ASSETS_URL+"/apis";
const NEW_HOST = process.env.GATSBY_API_URL;
// const HOST = "https://8080-f0d8e861-4b22-40c7-8de2-e2406c72dbc6.ws-us02.gitpod.io/apis";
exports.createPages = async (params) =>
    await createLessons(params) &&
    await createAssets(params) &&
    await createExercises(params) &&
    await createQuizzes(params) &&
    await createProjects(params) &&
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
    
  const resourcesResp = await fetch(NEW_HOST+"/registry/asset?type=exercise&big=true", { headers: {"Cache-Control": "no-store"}})
  const exercises = await resourcesResp.json();
  
  createPage({
      path: `/interactive-exercises`,
      component: path.resolve("./src/components/types/exercises.js"),
      context: { exercises },
    });
    
    exercises.forEach(ex => {
        console.log("exercises", ex.slug, ex);
      const _path = `/interactive-exercise/${ex.slug}`;
      createPage({
          path: _path, context: ex,
          component: path.resolve("./src/components/types/single-exercise.js")
      })
  });

  return true;
}

const createQuizzes = async ({ actions, graphql }) => {
  const { createPage } = actions;
    
  const resourcesResp = await fetch(NEW_HOST+"/registry/asset?type=quiz&big=true", { headers: {"Cache-Control": "no-store"}})
  const quizzes = await resourcesResp.json();

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

// Projects page is in test (Migration Process)

const createProjects = async ({ actions, graphql }) => {
  const { createPage } = actions;
  let projects = []; //filtered projects after removing repeated
  let _projects = []; //incoming projects
  const resp = await fetch(`https://breathecode.herokuapp.com/v1/registry/asset?type=project`);
  // const resp = await fetch(`https://assets.breatheco.de/apis/project/registry/all`);
  if (resp.status >= 200 && resp.status < 400) {
    _projects = Object.values(await resp.json());
    //console.log("Original projects: " + _projects)
  }
  else {
    console.error(`Error fetching projects with ${resp.status}`)
  }
  let technologyTags = [];
  let difficulties = [];
  for (let i = 0; i < _projects.length; i++) {

    //skip repeated projects
    if (projects.find(p => _projects[i].slug === p.slug)) continue;
    else projects.push(_projects[i]);

    if (typeof (_projects[i].technology) === 'string') technologyTags.push(_projects[i].technology);
    if (Array.isArray(_projects[i].technologies)) technologyTags = technologyTags.concat(_projects[i].technologies);

    if (typeof (_projects[i].difficulty) === 'string') {
      if (_projects[i].difficulty === "junior") _projects[i].difficulty = "easy";
      else if (_projects[i].difficulty === "semi-senior") _projects[i].difficulty = "intermediate";
      else if (_projects[i].difficulty === "senior") _projects[i].difficulty = "hard";

      difficulties.push(_projects[i].difficulty)
    }
  }

  technologyTags = [...new Set(technologyTags)];
  difficulties = [...new Set(difficulties)];


  createPage({

    path: `/projects`,
    component: path.resolve("./src/templates/projects.js"),
    context: {
      technologyTags,
      difficulties,
      projects: projects.filter(p => !p.visibility || p.visibility === "PUBLIC")
      // changed public to PUBLIC
    },
  })

  projects.forEach(p => {

    if (typeof (p.title) === "string" && p.title !== "")
      p.title = "Coding Tutorial - " + p.title;

    if (typeof (p.description) !== "string" || p.description === "")
      p.description = "BreatheCode Coding Projects tutorials and exercises for people learning to code or improving their coding skills";
    if (typeof (p.preview) !== "string" || p.preview === "")
      p.preview = "https://ucarecdn.com/03b6cba5-457e-474c-b4e3-7ea65f3b3375/";

    if (typeof (p.difficulty) === "string" && p.difficulty !== "" && p.name !== "p") {
      p.canonicalPath = `/interactive-coding-tutorial/${p.difficulty}/${p.slug}`;
    }
    else {
      p.canonicalPath = `/project/${p.slug}`;
    }
    p.url = `${p.url}`;

    if (!Array.isArray(p.translations)) p.translations = ["us"];
    else p.translations = p.translations.filter(t => !["us", "en"].includes(t)).concat(["us"]);


    if(p.canonicalPath.includes("jest")) console.log("Create page for project: " + p.canonicalPath);
    createPage({
      path: p.canonicalPath,
      component: path.resolve("./src/templates/singleProject.js"),
      context: p,
    });
    if (p.canonicalPath !== `/project/${p.slug}`) {
      createPage({
        path: `/project/${p.slug}`,
        component: path.resolve("./src/templates/singleProject.js"),
        context: p,
      });
    }
    createPage({
      path: `/d/${p.slug}`,
      component: path.resolve("./src/templates/singleProject.js"),
      context: p,
    });
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