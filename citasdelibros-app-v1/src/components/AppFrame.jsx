import React from 'react';
import PropTypes from 'prop-types';
import AppHeader from "./AppHeader";

const AppFrame = ({header, body, footer}) => {
    return (
        <div>
            <div className="app-frame">
                <AppHeader title={header}></AppHeader>
                <div>{body}</div>
                <h2 className="titulo">¡Las mejores citas, en un mismo lugar!</h2>
            </div>
        </div>
    );
};

AppFrame.propTypes = {
    header: PropTypes.string.isRequired,
    //body: PropTypes.element.isRequired,
    
};

export default AppFrame;

/**/