
//import React from 'react';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AppFrame from '../components/AppFrame';
import BookList from '../components/BookList';
import BooksAccions from '../components/BooksAccions';
import { withRouter } from 'react-router-dom';
import { connect } from "react-redux";
import { fetchBooks } from '../actions/fetchBooks';
//import booksContainer from './booksContainer';
//import { books } from './../reducers/books';
import { getBooks } from '../selectors/books';




class BooksContainer extends Component {



    componentDidMount() {
        if(this.props.books.length === 0){
            this.props.fetchBooks();
        }
        
    }
    


    
    handleAddNew = () => {
        
        this.props.history.push('books/new');
    }

    renderBody = books => {
        return(
            <div>
            <BookList
                books={books}
                urlPath={'books/'}
            >

            </BookList>
            <BooksAccions>
                <button onClick={this.handleAddNew}>Nueva Cita</button>
            </BooksAccions>
        </div>
        )
        
        
    }



    render() {
        return (
            <div>
                <AppFrame 
                    header={'Listado de libros'}
                    body={this.renderBody(this.props.books)}
                ></AppFrame>
            </div>
        );
    }
}

BooksContainer.propTypes = {
    fetchBooks: PropTypes.func.isRequired,
    books: PropTypes.array.isRequired,
};

BooksContainer.defaultProps = {
    books: []
    
}

const mapStateToProps = state => ({
    books: getBooks(state)
});

export default withRouter(connect(mapStateToProps,{fetchBooks})(BooksContainer));




