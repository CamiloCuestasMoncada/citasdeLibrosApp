import React from 'react';
import PropTypes from 'prop-types';
import BooksAccions from './BooksAccions';

const BookData = ({book, quote, writer, name, dni, onBack}) => {
    return (
        <div>
            <div className="book-data">
                
                
                <div><strong>Cita</strong>{quote}</div>
                <div><strong>Autor</strong>{writer}</div>
                <h2>Compartido por:</h2>
                <div><strong>Nombre: </strong>{name}</div>
                
            </div>
            <BooksAccions>
                <button onClick={onBack}>ir atras</button>
            </BooksAccions>
        </div>
    );
};

BookData.propTypes = {
    book: PropTypes.string.isRequired,
    quote: PropTypes.string.isRequired,
    writer: PropTypes.string.isRequired,
};

export default BookData;
