
import { createAction } from 'redux-actions';
import { apiPut } from '../api';
import { UPDATE_BOOK } from '../constants';
import { urlBooks } from './../api/urls';
export const updateBook = createAction(UPDATE_BOOK,
    (id,book) => apiPut(urlBooks, id, book)())