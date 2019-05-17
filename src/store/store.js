import emoji from 'node-emoji';

const getState = ({ getStore, setStore }) => {
	return {
		store: {
            assets:null,
            assetTechnologieTags:null,
            assetTopicTags:null,
            assetTypesTags:null,
		    allIssues:null,
		    issueLabels:null,
			issues: null,
			authors: [],
			tags: [],
			lessons: null,
			events: [],
			markdown: null,
			openSource: [
				{
					gitIssueUrl: "https://github.com/breatheco-de/breathecode-cli",
					cardClass: "card bg-light w-100 h-100 ",
					icon: "fas fa-terminal fa-7x d-flex justify-content-center pt-3 learningGreen",
					title: "BreatheCode CLI ",
					description:
						"Command Line interface to connect with lots of useful stuff like access to boilerplates, exercises, builders, etc",
					technologies: [
						{
							tech: "Nodejs",
							color: "col-1.5 px-2 mx-1  rounded tagsCol1"
						},
						{
							tech: "Bash",
							color: "col-1.5 px-2 mx-1  rounded tagsCol2"
						},
						{
							tech: "JSON",
							color: "col-1.5 px-2 mx-1  rounded tagsCol3"
						}
					]
				},
				{
					gitIssueUrl: "https://github.com/breatheco-de/c9-plugin",
					cardClass: "card bg-light w-100 h-100",
					icon: "fas fa-cloud fa-7x d-flex justify-content-center pt-3 blueB",
					title: "C9 Plugin",
					description:
						"Cloud 9 is a great IDE for junior developers because it allows you to work with very few configurations on an isolated machine. We have created a plugin to enhance the Cloud 9 coding IDE as well as the integragtion with all the other BreatheCode projects.",
					technologies: [
						{
							tech: "Nodejs",
							color: "col-1.5 px-2 mx-1  rounded tagsCol1"
						},
						{
							tech: "Bash",
							color: "col-1.5 px-2 mx-1 rounded tagsCol2"
						},
						{
							tech: "JSON",
							color: "col-1.5 px-2 mx-1 rounded tagsCol3"
						}
					]
				},
				{
					gitIssueUrl: "https://github.com/breatheco-de/api",
					cardClass: "card bg-light w-100 h-100",
					icon: "fas fa-user-graduate fa-7x d-flex justify-content-center pt-3 learningGreen",
					title: "Platform API",
					description: "The API for the LMS, it manages students, courses, etc.",
					subtTitle: "Technologies",

					technologies: [
						{
							tech: "EloquentCRM",
							color: "col-1.5 px-2 mx-1 rounded tagsCol1"
						},
						{
							tech: "Bash",
							color: "col-1.5 px-2 mx-1 rounded tagsCol2"
						},
						{
							tech: "PHP",
							color: "col-1.5 px-2 mx-1 rounded tagsCol3"
						},
						{
							tech: "SlimPHP",
							color: "col-1.5 px-2 mx-1 rounded tagsCol4"
						},
						{
							tech: "MySQL",
							color: "col-1.5 px-2 mx-1 rounded tagsCol1"
						},
						{
							tech: "JSON",
							color: "col-1.5 px-2 mx-1 rounded tagsCol2"
						},
						{
							tech: "REST",
							color: "col-1.5 px-2 mx-1 rounded tagsCol3"
						}
					]
				},
				{
					gitIssueUrl: "https://github.com/breatheco-de/assets",
					cardClass: "card bg-light w-100 h-100 ",
					icon: "fas fa-file-alt fa-7x d-flex justify-content-center pt-3 blueB",
					title: "Assets API",
					description:
						"Amazing resources for students (infographics, lessons, cheat-sheets, mock api's, etc).",
					technologies: [
						{
							tech: "Markdown",
							color: "col-1.5 px-2 mx-1 rounded tagsCol1"
						},
						{
							tech: "PHP",
							color: "col-1.5 px-2 mx-1 rounded tagsCol2"
						},
						{
							tech: "MySQL",
							color: "col-1.5 px-2 mx-1 rounded tagsCol3"
						},
						{
							tech: "SQLite",
							color: "col-1.5 px-2 mx-1 rounded tagsCol4"
						},
						{
							tech: "SlimPHP",
							color: "col-1.5 px-2 mx-1 rounded tagsCol1"
						},
						{
							tech: "Static Files",
							color: "col-1.5 px-2 mx-1 rounded tagsCol2"
						},
						{
							tech: "REST",
							color: "col-1.5 px-2 mx-1 rounded tagsCol3"
						}
					]
				},
				{
					gitIssueUrl: "https://github.com/breatheco-de/react-session",
					cardClass: "card bg-light w-100 h-100",
					icon: "fab fa-react fa-7x d-flex justify-content-center pt-3 learningGreen",
					title: "React Session",
					description: "Allows persistent sessions in react, compatible with react router.",
					technologies: [
						{
							tech: "React.js",
							color: "col-1.5 px-2 mx-1 rounded tagsCol1"
						}
					]
				},
				{
					gitIssueUrl: "https://github.com/breatheco-de/react-notifier",
					cardClass: "card bg-light w-100 h-100",
					icon: "fab fa-react fa-7x d-flex justify-content-center pt-3 blueB",
					title: "React Notifier",
					description: "Notification library for React Applications.",
					subtTitle: "Technologies",
					technologies: [
						{
							tech: "React.js",
							color: "col-1.5 px-2 mx-1 rounded tagsCol1"
						}
					]
				},
				{
					gitIssueUrl: "https://github.com/breatheco-de/content",
					cardClass: "card bg-light w-100 h-100",
					icon: "fas fa-sitemap fa-7x d-flex justify-content-center pt-3 learningGreen",
					title: "CMS",
					description:
						"This is were most of the community content is being published: Lessons, Error Explanations and How to's.",
					technologies: [
						{
							tech: "React.js",
							color: "col-1.5 px-2 mx-1 rounded tagsCol1"
						},
						{
							tech: "Gatsby.js",
							color: "col-1.5 px-2 mx-1 rounded tagsCol2"
						},
						{
							tech: "CSS",
							color: "col-1.5 px-2 mx-1 rounded tagsCol3"
						},
						{
							tech: "Markdown",
							color: "col-1.5 px-2 mx-1 rounded tagsCol3"
						}
					]
				},
				{
					gitIssueUrl: "https://github.com/breatheco-de/desktop-client",
					cardClass: "card bg-light w-100 h-100",
					icon: "fas fa-home fa-7x d-flex justify-content-center pt-3 blueB",
					title: "Student Web Client",
					description: "BreatheCode's main website for displaying the courses.",
					technologies: [
						{
							tech: "React.js",
							color: "col-1.5 px-2 mx-1 rounded tagsCol1"
						},
						{
							tech: "Sass",
							color: "col-1.5 px-2 mx-1 rounded tagsCol2"
						},
						{
							tech: "CSS",
							color: "col-1.5 px-2 mx-1 rounded tagsCol3"
						},
						{
							tech: "HTML",
							color: "col-1.5 px-2 mx-1 rounded tagsCol3"
						}
					]
				},
				{
					gitIssueUrl: "https://github.com/breatheco-de/teacher-client",
					cardClass: "card bg-light w-100 h-100",
					icon: "fas fa-chalkboard-teacher fa-7x d-flex justify-content-center pt-3 blueM",
					title: "Teacher Web Client",
					description:
						"Teachers are able to manage the pace of their cohorts, review students deliverables, etc.",
					technologies: [
						{
							tech: "React.js",
							color: "col-1.5 px-2 mx-1 rounded tagsCol1"
						},
						{
							tech: "Sass",
							color: "col-1.5 px-2 mx-1 rounded tagsCol2"
						},
						{
							tech: "CSS",
							color: "col-1.5 px-2 mx-1 rounded tagsCol3"
						},
						{
							tech: "HTML",
							color: "col-1.5 px-2 mx-1 rounded tagsCol3"
						}
					]
				},
				{
					gitIssueUrl: "https://github.com/breatheco-de/admin-client",
					cardClass: "card bg-light w-100 h-100",
					icon: "fas fa-users fa-7x d-flex justify-content-center pt-3 learningGreen2",
					title: "Admin Web Client",
					description: "Manage BreathCode students, teachers, etc.",
					technologies: [
						{
							tech: "React.js",
							color: "col-1.5 px-2 mx-1 rounded tagsCol1"
						},
						{
							tech: "Sass",
							color: "col-1.5 px-2 mx-1 rounded tagsCol2"
						},
						{
							tech: "CSS",
							color: "col-1.5 px-2 mx-1 rounded tagsCol3"
						},
						{
							tech: "HTML",
							color: "col-1.5 px-2 mx-1 mx-1 rounded tagsCol3"
						}
					]
				}
			]
		},
		actions: {
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
				let fullLink = `https://content.breatheco.de/${lesson.lang}/lesson/` + lesson.slug.replace(".es","");
				return fullLink;
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
			getLabels: function(arrayOfIssues){
				var labels = [];
				if(arrayOfIssues){
					arrayOfIssues.forEach((issue)=>{
						labels = labels.concat(issue.labels.map(l => this.emojify(l.name)));
					});
					return labels;
				}else{
					return [];
				}

			}
		}
	};
};

export default getState;
