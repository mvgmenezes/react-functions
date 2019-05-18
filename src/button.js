import React from 'react'
import PropTypes from 'prop-types';

const Button = ({ children, funcaoParamentro} ) => (
    <button onClick={funcaoParamentro}>{children}</button>
)

Button.propTypes = {
    handleClick: PropTypes.func.isRequired
}

export default Button;