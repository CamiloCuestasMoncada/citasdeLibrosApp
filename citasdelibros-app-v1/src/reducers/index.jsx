
import {combineReducers} from 'redux';
import { reducer as reduxForm } from 'redux-form';
import { books } from "./books";

export default combineReducers({
    books,
    form: reduxForm
});
