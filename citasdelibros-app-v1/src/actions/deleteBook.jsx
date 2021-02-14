
import { createAction } from 'redux-actions';
import { apiDelete } from '../api';
import { DELETE_BOOK } from '../constants';
import { urlBooks } from './../api/urls';
export const deleteBook = createAction(DELETE_BOOK,
    id => apiDelete(urlBooks, id,)())

