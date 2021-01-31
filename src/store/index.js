import Vue from "vue"
import Vuex from "vuex"
import defaultBoard from "./../database.js"
import defaultQuote from "./../quotes.js"

Vue.use(Vuex)

const board = JSON.parse(localStorage.getItem("board")) || defaultBoard
const quotes = defaultQuote

export default new Vuex.Store({
    state: {
        board,
        quotes
    },
    getters: {
        getProject(state) {
            return id => {
                for (const column of state.board.columns) {
                    for (const project of column.projects) {
                        if (project.id === id) {
                            return project
                        }
                    }
                }
            }
        }
    },
    mutations: {
        MOVE_PROJECT(state, { fromProjects, toProjects, projectIndex }) {
            // find project to move
            const projectToMove = fromProjects.splice(projectIndex, 1)[0]
            toProjects.push(projectToMove)
        }
    },
    actions: {},
    modules: {}
})
