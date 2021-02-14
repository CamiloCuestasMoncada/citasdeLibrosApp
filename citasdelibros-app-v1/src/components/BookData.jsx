import React from 'react';
import PropTypes from 'prop-types';
import BooksAccions from './BooksAccions';

const BookData = ({
    id, book, quote, writer, name, dni, onBack, isDeleteAllow,onDelete
}) => {
let del = () => {
    if(isDeleteAllow){
        return <button onClick={() => onDelete(id)}>Eliminar</button>
    }
}
    return (
        <div>
            <div className="book-data">
                
                <div><strong>Libro: </strong><p className="book">{book}</p></div>
                <div><strong>Cita</strong><p className="citaText">{quote}</p></div>
                <div><strong>Autor</strong>{writer}</div>
                
                <div><strong>Compartido por: </strong>{name}</div>
                
            </div>
            <BooksAccions>
                <button onClick={onBack}>ir atras</button>
                {del()}
            </BooksAccions>
        </div>
    );
};

BookData.propTypes = {
    book: PropTypes.string.isRequired,
    quote: PropTypes.string.isRequired,
    writer: PropTypes.string.isRequired,
    isDeleteAllow: PropTypes.bool,
    onDelete: PropTypes.func,
    id: PropTypes.string.isRequired,
};

export default BookData;
