
import { handleActions } from "redux-actions";
import { FETCH_BOOKS } from '../constants/index';

export const books = handleActions({
    [FETCH_BOOKS]: (state, action) => [...action.payload],
},[]);
