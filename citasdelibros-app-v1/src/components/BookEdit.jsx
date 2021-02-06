
import React from 'react';
import PropTypes from 'prop-types';
import {reduxForm, Field} from 'redux-form';
//import { connect } from 'react-redux';
import { setPropsAsInitial } from './../helpers/setPropsAsInitial';

const BookEdit = ({book, quote, writer}) => {
    return (
        <div>
            <h2>Edición de la información del libro:</h2>
            <form action="">
                <div>
                    <label htmlFor="">Nombre del libro</label>
                    <Field name="book" component="input" type="text"></Field>
                </div>
                <div>
                    <label htmlFor="">Cita</label>
                    <Field name="quote" component="input" type="text"></Field>
                </div>
                <div>
                    <label htmlFor="">Autor/a</label>
                    <Field name="writer" component="input" type="text"></Field>
                </div>
                <div>
                    <label htmlFor="">Nombre de usuario</label>
                    <Field name="name" component="input" type="text"></Field>
                </div>
                <div>
                    <label htmlFor="">Documento de identidad</label>
                    <Field name="dni" component="input" type="number"></Field>
                </div>
            </form>
        </div>
    );
};

BookEdit.propTypes = {
    book: PropTypes.string,
    quote: PropTypes.number,
    writer: PropTypes.number,
};
const BookEditForm = reduxForm({form: 'BookEdit'}) (BookEdit);
export default setPropsAsInitial(BookEditForm);


