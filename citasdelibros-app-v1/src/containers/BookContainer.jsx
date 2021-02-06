import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import AppFrame from './../components/AppFrame';
import { getBookByDni } from '../selectors/books';
import { Route } from 'react-router-dom';
import BookEdit from './../components/BookEdit';
import BookData from '../components/BookData';


/*
<div>
                    <p>Subido por:  "{this.props.book.name}"</p>
                    <p>Cita:  "{this.props.book.quote}"</p>
                    <p>Autor/a:  "{this.props.book.writer}"</p>
                    
                </div>
*/

class BookContainer extends Component {
    renderBody = () => (
        <Route 
        path="/books/:dni/edit"
        children={
            ({match}) => {
                const BookControl = match ? BookEdit : BookData;
                return<BookControl {...this.props.book}/>      //sin spread operator quote={this.props.book.quote
                
            }
        }
        
        />

        
    )
    render() {
        return (
            <div>
                <AppFrame 
                header={`Libro: ${this.props.book.book}`}
                body={this.renderBody()}
                >

                </AppFrame>
            </div>
        );
    }
}

BookContainer.propTypes = {
    dni: PropTypes.string.isRequired,
    //book: PropTypes.object.isRequired,
};

const mapSateToProps = (state,props) => ({
    book: getBookByDni(state,props)
})

export default connect(mapSateToProps,null)(BookContainer);
