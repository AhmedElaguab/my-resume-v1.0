import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    skills: [
      ["html", "css", "js", "jquery", "sass", "pugjs", "bootstrap"],
      ["react", "redux", "next", "vue", "node", "express", "mongodb", "mysql"],
      ["npm", "webpack", "gulp", "git", "github"]
    ],
    projects: [
      {
        name: "Portfolio Website",
        github: "https://github.com/AhmedElaguab/portfolio-site",
        preview: "https://ahmedelaguab.github.io/portfolio-site/",
        desc: "A full responsive portfolio website built with Bootstrap.",
        language: "HTML"
      },
      {
        name: "Arcade Game",
        github: "https://github.com/AhmedElaguab/arcade-game",
        preview: "https://ahmedelaguab.github.io/arcade-game/",
        desc: "A Classic Arcade Game.",
        language: "JavaScript"
      },
      {
        name: "Memory Game",
        github: "https://github.com/AhmedElaguab/memory-game",
        preview: "https://ahmedelaguab.github.io/memory-game/",
        desc: "A Classic Memory Game",
        language: "JavaScript"
      },
      {
        name: "Turtle Facts Quiz App",
        github: "https://github.com/AhmedElaguab/turtle-facts-quiz-react-app",
        preview: "https://ahmedelaguab.github.io//turtle-facts-quiz-react-app/",
        desc: "A quiz application about turtles built with React.",
        language: "JavaScript"
      },
      {
        github: "https://github.com/AhmedElaguab/",
        desc: "Visit my github page to see more projects."
      }
    ]
  },
  mutations: {},
  actions: {},
  modules: {}
});
