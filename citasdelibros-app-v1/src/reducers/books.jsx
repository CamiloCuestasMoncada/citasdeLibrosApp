
import { handleActions } from "redux-actions";
import { DELETE_BOOK, FETCH_BOOKS, UPDATE_BOOK } from '../constants/index';
import { INSERT_BOOK } from './../constants/index';

export const books = handleActions({
    [FETCH_BOOKS]: (state, action) => [...action.payload],
    [INSERT_BOOK]: (state, action) => [ ...state, action.payload],
    [UPDATE_BOOK]: (state, action) => {
        const bookPayload = action.payload;
        const {id} = bookPayload;
        const books = state;
        const initialValue = [];
        const newBooks = books.reduce((acc, book) => {
            if(book.id === id){
                return [...acc, bookPayload];
            } else {
                return [...acc, book]
            }
        },initialValue);
        return newBooks;
        
    },
    [DELETE_BOOK]: (state, action) => state.filter(c => c.id !== action.payload)
},[]);
