
import React from 'react';
import PropTypes from 'prop-types';

const BooksAccions = ({children}) => {
    return (
        <div>
            <div className="books-actions">
                <div>{children}</div>
            </div>
        </div>
    );
};

BooksAccions.propTypes = {
    children: PropTypes.node.isRequired,
};

export default BooksAccions;

