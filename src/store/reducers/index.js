import {combineReducers} from 'redux'
import {departmentsReducer} from './departments'
import {currentDepartmentReducer} from './current-department'

export const reducer = combineReducers({
    departments: departmentsReducer,
    currentDepartment: currentDepartmentReducer,
})
