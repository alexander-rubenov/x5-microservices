import { departments } from '../../fixtures'

export const currentDepartmentReducer = (currentDepartmentState = departments[0].id, action) => {
  return currentDepartmentState
}
