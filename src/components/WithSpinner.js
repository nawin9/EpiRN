import React from 'react';
import PropTypes from 'prop-types';
import Loader from './Loader';

const WithSpinner = Comp => ({ isLoading, children, ...props }) => {
    if (isLoading) {
        return <Loader isLoading={isLoading} />;
    }
    return <Comp {...props}>{children}</Comp>;
};

WithSpinner.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    children: PropTypes.element,
};

export default WithSpinner;
