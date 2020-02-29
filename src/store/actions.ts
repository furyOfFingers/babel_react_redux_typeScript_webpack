import { ACTION_CHANGE_FIRST_NAME, ACTION_CHANGE_SECOND_NAME } from '../consts';
import { IFieldState } from '../Types/Types'

/** Action поля firstName. */
export const changeFirstName = (newFirstName: IFieldState) => {
  return {
    type: ACTION_CHANGE_FIRST_NAME,
    payload: newFirstName
  }
}

/** Action поля secondName. */
export const changeSecondName = (newSecondName: IFieldState) => {
  return {
    type: ACTION_CHANGE_SECOND_NAME,
    payload: newSecondName
  }
}