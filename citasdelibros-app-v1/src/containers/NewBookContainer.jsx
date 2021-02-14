import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AppFrame from '../components/AppFrame';
import BookEdit from '../components/BookEdit';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { insertBook } from './../actions/insertBook';
import { SubmissionError } from 'redux-form';

class NewBookContainer extends Component {
    handleSubmit = values => {
        return this.props.insertBook(values).then( r=> {
            if(r.payload&& r.payload.error) {
                throw new SubmissionError(r.payload);
            }
        });

    }

    handleOnSubmitSuccess = () => {

        this.props.history.goBack();

    }

    handleOnBack = () => {
        this.props.history.goBack();
    }

    renderBody = () => {
        return <BookEdit onSubmit={this.handleSubmit}
                    onSubmitSuccess={this.handleOnSubmitSuccess}
                    onBack={this.handleOnBack}
                />
    }

    render() {
        return (
            <div>
                <AppFrame header={`Generar nueva Cita:`}
                          body={this.renderBody()}
                          >

                </AppFrame>
            </div>
        );
    }
}

NewBookContainer.propTypes = {
    insertBook: PropTypes.func.isRequired,
};

export default withRouter(connect(null,{insertBook})(NewBookContainer));

