
import { createSelector } from "reselect";
export const getBooks = state => state.books;


export const getBookByDni = createSelector(
    (state,props) => state.books.find( c => c.dni === props.dni),
    book => book
);