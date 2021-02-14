
import { createAction } from 'redux-actions';
import { apiPost } from '../api';
import { INSERT_BOOK } from '../constants';
import { urlBooks } from './../api/urls';
export const insertBook = createAction(INSERT_BOOK,
    book => apiPost(urlBooks, book)())