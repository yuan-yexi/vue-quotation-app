/* eslint-disable prettier/prettier */
import Vue from "vue"
import Vuex from "vuex"
import createPersistedState from "vuex-persistedstate"
import defaultBoard from "./../projects.js"
import defaultQuotesCollection from "./../quotes.js"
import defaultCostCollection from "./../cost.js"

Vue.use(Vuex)

const board = defaultBoard
const quotesCollection = defaultQuotesCollection
const costCollection = defaultCostCollection
const currentQuote = {}

export default new Vuex.Store({
    state: {
        board,
        quotesCollection,
        costCollection,
        currentQuote
    },
    plugins: [createPersistedState()],
    mutations: {
        MOVE_PROJECT(state, { fromProjects, toProjects, projectIndex }) {
            // find project to move
            const projectToMove = fromProjects.splice(projectIndex, 1)[0]
            toProjects.push(projectToMove)
        },
        SET_CURRENT_QUOTE(state, payload) {
            state.currentQuote = payload
        },
        SET_TOTAL_LINE_ITEM_STATES(state, payload) {
            /* Update Total Price */
            state.quotesCollection.quotesCollection
                .find(q => q.uid === payload.quoteId).costGroups
                .find(cg => cg.uid === payload.costGroupId).lineItems
                .find(item => item.uid === payload.lineItemId).total 
                = payload.totalLineItemPrice
            /* Update Total Cost */
            state.quotesCollection.quotesCollection
                .find(q => q.uid === payload.quoteId).costGroups
                .find(cg => cg.uid === payload.costGroupId).lineItems
                .find(item => item.uid === payload.lineItemId).totalCost 
                = 
                payload.totalLineItemCost
            /* Update Profits */
            state.quotesCollection.quotesCollection
                .find(q => q.uid === payload.quoteId).costGroups
                .find(cg => cg.uid === payload.costGroupId).lineItems
                .find(item => item.uid === payload.lineItemId).profit 
                = payload.totalProfits
            /* Update Unit Price */
            state.quotesCollection.quotesCollection
                .find(q => q.uid === payload.quoteId).costGroups
                .find(cg => cg.uid === payload.costGroupId).lineItems
                .find(item => item.uid === payload.lineItemId).price 
                = 
                payload.lineItemPrice
            /* Update Quantity */
            state.quotesCollection.quotesCollection
                .find(q => q.uid === payload.quoteId).costGroups
                .find(cg => cg.uid === payload.costGroupId).lineItems
                .find(item => item.uid === payload.lineItemId).quantity 
                = 
                payload.lineItemQuantity
        }
    },
    actions: {
        async setCurrentEditQuote({ commit }, quote) {
            commit("SET_CURRENT_QUOTE", quote)
        },
        async setTotalLineItemStates({ commit }, quote) {
            commit("SET_TOTAL_LINE_ITEM_STATES", quote)
        }
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
        },
        getQuote(state) {
            return id => {
                for (const quote of state.quotesCollection.quotesCollection) {
                    if (quote.uid === id) {
                        return quote
                    }
                }
            }
        }
    },
    modules: {}
})
