import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    skills: [
      ["html", "css", "js", "jquery", "sass", "pugjs", "bootstrap"],
      ["react", "redux", "next", "vue", "node", "express", "mongodb", "mysql"],
      ["npm", "webpack", "gulp", "git", "github"]
    ]
  },
  mutations: {},
  actions: {},
  modules: {}
});
