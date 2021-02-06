
import React from 'react';
import PropTypes from 'prop-types';

const BookEdit = ({book, quote, writer}) => {
    return (
        <div>
            <h2>Edición de la información del libro:</h2>
            <h3>Libro: {book} / Cita: {quote} / Autor: {writer}</h3>
        </div>
    );
};

BookEdit.propTypes = {
    book: PropTypes.string,
    quote: PropTypes.number,
    writer: PropTypes.number,
};

export default BookEdit;
