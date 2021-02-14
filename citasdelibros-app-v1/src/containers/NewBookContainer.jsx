import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AppFrame from '../components/AppFrame';
import BookEdit from '../components/BookEdit';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { insertBook } from './../actions/insertBook';
import { SubmissionError } from 'redux-form';
import firebase from './../util/firebase';

class NewBookContainer extends Component {
    handleSubmit = values => {
        
        return this.props.insertBook(values).then( r=> {
            if(r.payload&& r.payload.error) {
                throw new SubmissionError(r.payload);
            }
        });

    }

    handleSubmit2 = values => {
        let insertlibro = this.props.insertBook(values);
        return firebase.database().ref('Data').push(insertlibro).then( r=> {
            if(r.payload&& r.payload.error) {
                throw new SubmissionError(r.payload);
            }
        });

    }

    handleOnSubmitSuccess = () => {

        this.props.history.goBack();

    }

    handleOnBack = () => {
        this.props.history.goBack();
    }


    envioFirebase = () => {
        const data={
            quote: "“El tiempo corre de la misma manera para todos los seres humanos; pero todo ser humano flota de distinta manera en el tiempo.„\n\n",
            writer: "yasunari kawabata",
            name: "Camilo ",
            dni: "95162081",
            book: "Lo bello y lo triste.",
            id: "y5tB-WW"
        }
        firebase.database().ref('Data').push(data)
        .then(function(){
            alert('mensaje guardado'); // Si la petición es correcta y almaceno los datos mostramos un mensaje al usuario.
          })
          .catch(function(){
            alert('mensaje No guardado'); // En caso de ocurrir un error le mostramos al usuario que ocurrió un error.
          });
        
    }


    renderBody = () => {
        return <BookEdit onSubmit={this.handleSubmit}
                    onSubmitSuccess={this.handleOnSubmitSuccess}
                    onBack={this.handleOnBack}
                />
    }

    render() {
        return (
            <div>
                <AppFrame header={`Generar nueva Cita:`}
                          body={this.renderBody()}
                          >

                </AppFrame>
            </div>
        );
    }
}

NewBookContainer.propTypes = {
    insertBook: PropTypes.func.isRequired,
};

export default withRouter(connect(null,{insertBook})(NewBookContainer));

