
import React from 'react';
import PropTypes from 'prop-types';
import BookListItem from './BookListItem';

const BookList = ({books, urlPath}) => {
    return (
        
            <div className="books-list">
                {
                    books.map(c => 

                        <BookListItem 
                            key={c.dni}
                            dni={c.dni}
                            book={c.book}
                            editAction={'Editar'}
                            delAction={'Eliminar'}
                            urlPath={urlPath}
                        >

                        </BookListItem>

                    
                        
                    )
                }
                
            </div>
        
    );
};

BookList.propTypes = {
    books: PropTypes.array.isRequired,
    urlPath: PropTypes.string.isRequired,
};

export default BookList;
