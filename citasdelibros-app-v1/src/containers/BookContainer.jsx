import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import AppFrame from './../components/AppFrame';
import { getBookByDni } from '../selectors/books';
import { Route, withRouter } from 'react-router-dom';
import BookEdit from './../components/BookEdit';
import BookData from '../components/BookData';
//import {withRouter} from './HomeContainer';
import { fetchBooks } from './../actions/fetchBooks';
import { updateBook } from './../actions/updateBooks';
import { SubmissionError } from 'redux-form';
import { deleteBook } from './../actions/deleteBook';





class BookContainer extends Component {

    componentDidMount(){
        if(!this.props.book){
            this.props.fetchBooks();
        }
    }

    handleSubmit = values => {
        console.log(JSON.stringify(values));
        const {id} = values;
        return this.props.updateBook(id, values).then( r=> {
            if(r.error) {
                throw new SubmissionError(r.payload);
            }
        });
    }

    handleOnBack = ()=> {
        
        this.props.history.goBack();
    }
    

    handleOnSubmitSuccess = () => {
        this.props.history.goBack();
    }

    handleOnDelete = id => {
        console.log("handleDeleted");
        this.props.deleteBook(id).then(v => {
            this.props.history.goBack();
        });
    }
    renderBookControl =(isEdit, isDelete) => {
        if(this.props.book)
                {const BookControl = isEdit ? BookEdit : BookData;
                return<BookControl {...this.props.book} 
                            onSubmit={this.handleSubmit}
                            onSubmitSuccess={this.handleOnSubmitSuccess}
                            onBack={this.handleOnBack}
                            isDeleteAllow={!!isDelete}
                            onDelete={this.handleOnDelete}
                      />} return null;
    }
    renderBody = () => (
        <Route 
        path="/books/:dni/edit"
        children={
            ({match: isEdit}) => (
                <Route 
                path="/books/:dni/del"
                children={
                    ({match:isDelete}) => (
                        this.renderBookControl(isEdit, isDelete)
                    )
                }/>
            )
        }/>

        
    )

    /*renderBody = () => (
        <Route 
        path="/books/:dni/edit"
        children={
            ({match}) => {
                
                const BookControl = match ? BookEdit : BookData;
                return<BookControl {...this.props.book} 
                            onSubmit={this.handleSubmit}
                            onBack={this.handleOnBack}
                      /> 
                
            }
        }
        
        />

        
    )*/

    render() {
        return (
            <div>
                <AppFrame 
                header={`Usuario: ${this.props.dni}`}
                body={this.renderBody()}
                >

                </AppFrame>
            </div>
        );
    }
}

BookContainer.propTypes = {
    dni: PropTypes.string.isRequired,
    book: PropTypes.object,
    fetchBooks: PropTypes.func.isRequired,
    updateBook: PropTypes.func.isRequired,
};

const mapSateToProps = (state,props) => ({
    book: getBookByDni(state,props)
})

export default withRouter(connect(mapSateToProps,{
    fetchBooks,
    updateBook ,
    deleteBook
})(BookContainer));
