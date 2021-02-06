import { FETCH_BOOKS } from './../constants/index';
import {createAction} from 'redux-actions';
import {apiGet} from "../api";
import {urlBooks} from "../api/urls";

//import { customers } from './../reducers/customers';

export const fetchBooks = createAction(FETCH_BOOKS , apiGet(urlBooks));

