import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import AppFrame from './../components/AppFrame';
//import { getBookByDni } from '../selectors/books';

class BookContainer extends Component {
    render() {
        return (
            <div>
                <AppFrame 
                header={`Libro${this.props.dni}`}
                body={<p>Información del libro</p>}
                >

                </AppFrame>
            </div>
        );
    }
}

BookContainer.propTypes = {
    dni: PropTypes.string.isRequired,
    book: PropTypes.object.isRequired,
};



export default connect(null,null)(BookContainer);