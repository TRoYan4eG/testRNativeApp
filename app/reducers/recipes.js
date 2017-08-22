import createReducer from '../lib/createReducer'
import * as types from '../actions/types'

export const searchRecipes = createReducer({}, {

})

export const recipeCount = createReducer(0, {
    [types.ADD_RECIPE](state, action){
        return state+1
    }
})