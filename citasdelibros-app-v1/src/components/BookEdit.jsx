
import React from 'react';
import PropTypes from 'prop-types';
import {reduxForm, Field } from 'redux-form';
import { Prompt } from 'react-router-dom';
//import { connect } from 'react-redux';
import { setPropsAsInitial } from './../helpers/setPropsAsInitial';
import BooksAccions from './BooksAccions';
/*const isRequired = value => {
    if (!value)  {
        return "Este campo es requeeeerido"
    }

}*/

let errorMessage = meta => {
    if(meta.touched && meta.error){
        return <span>{meta.error}</span>
    }
}

const MyField = ({input, meta, type, label, name}) => (
    <div>
        <label htmlFor={name}>{label}</label>
       
        <input {...input} type ={!type ? "text" : type} />
        
        
        
       {errorMessage(meta)}
        
    </div>
);

const MyFieldQuote = ({input, meta, type, label, name}) => (
    <div>
        <label htmlFor={name}>{label}</label>
       
        <textarea {...input} type ={!type ? "text" : type}  className="editQuote"/>
        
        
        
       {errorMessage(meta)}
        
    </div>
);

const validate = values => {
    const error = {};

    if(!values.name){
        error.name = "El campo nombre es requerido"
    }

    if(!values.book){
        error.book = "El campo libro es requerido"
    }

    if(!values.quote){
        error.quote = "El campo Cita es requerido"
    }

    if(!values.writer){
        error.writer = "El campo Autor/a es requerido"
    }

    if(!values.dni){
        error.dni = "El campo Dni es requerido"
    }


    return error;
}

const isNumber = value => (
    isNaN(Number(value)) && "Debe ser un número"
        
    
);

const BookEdit = ({name,book, quote, writer, handleSubmit, submitting, onBack, pristine, submitSucceeded}) => {
    return (
        <div>
            <h2>Edición de la información del libro:</h2>
            <form onSubmit={handleSubmit}>
               
                    
                    <Field 
                        name="book" 
                        component={MyField} 
                        type="text"
                        //validate={isRequired}
                        label = "Libro"
                    >
                    </Field>
                
                
                    
                    <Field 
                       
                        name="quote" 
                        component={MyFieldQuote}  
                        label = "Cita"
                        //validate={isRequired}
                    >
                    </Field>
                
                
                    
                    <Field 
                        name="writer" 
                        component={MyField}
                        //validate={isRequired}
                        label = "Autor/a"
                    >

                    </Field>
               
                
                    
                    <Field 
                        name="name" 
                        component={MyField}
                        //validate={isRequired}
                        label = "nombre"
                    >

                    </Field>
                
               
                    
                    <Field 
                        name="dni" 
                        component={MyField}
                        type="number"
                        validate={isNumber}
                        label = "dni"
                    >

                    </Field>
                    

                    <BooksAccions>
                        <button type="submit" disabled={pristine || submitting}>Aceptar</button>
                        <button type="button" disabled={submitting} onClick={onBack}>Cancelar</button>
                    </BooksAccions>
                    <Prompt
                        when={!pristine && !submitSucceeded}
                        message="Se perderan los datos si continúa"

                    ></Prompt>
                
            </form>
        </div>
    );
};

BookEdit.propTypes = {
    book: PropTypes.string,
    quote: PropTypes.string,
    writer: PropTypes.string,
    //onBack: PropTypes.func.isRequired,
};
const BookEditForm = reduxForm(
    {
        form: 'BookEdit',
        validate: validate
    }) (BookEdit);
export default setPropsAsInitial(BookEditForm);


