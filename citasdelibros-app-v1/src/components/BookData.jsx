import React from 'react';
import PropTypes from 'prop-types';

const BookData = ({book, quote, writer, name, dni}) => {
    return (
        <div>
            <div className="book-data">
                
                
                <div><strong>Cita</strong>{quote}</div>
                <div><strong>Autor</strong>{writer}</div>
                <h2>Compartido por:</h2>
                <div><strong>Nombre: </strong>{name}</div>
                
            </div>
        </div>
    );
};

BookData.propTypes = {
    book: PropTypes.string.isRequired,
    quote: PropTypes.number.isRequired,
    writer: PropTypes.number.isRequired,
};

export default BookData;
