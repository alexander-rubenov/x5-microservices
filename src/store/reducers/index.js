import {combineReducers} from 'redux'
import {departmentsReducer} from './departments'

export const reducer = combineReducers({
    departments: departmentsReducer,
})
