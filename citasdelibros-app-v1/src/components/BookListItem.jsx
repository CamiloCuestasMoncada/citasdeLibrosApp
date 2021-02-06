
import React from 'react';
import { Link} from "react-router-dom";
import PropTypes from 'prop-types';

const BookListItem = ({dni, book, editAction, delAction, urlPath}) => {
    
    return (
        <div>
            <div className="book-list-item">
                <div className="field">
                    <Link to= {`${urlPath}${dni}`}>{book}</Link>
                </div>
                    
                <div className="field">
                    <Link to= {`${urlPath}${dni}/edit`}>{editAction}</Link>
                </div>
                
                <div className="field">
                    <Link to= {`${urlPath}${dni}/del`}>{delAction}</Link>
                </div>
            </div>
        </div>
    );
};

BookListItem.propTypes = {
    book: PropTypes.string.isRequired,
    editAction: PropTypes.string.isRequired,
    delAction: PropTypes.string.isRequired,
    dni: PropTypes.number.isRequired,
};

export default BookListItem;

