import React from 'react'

const Button = ({ children, funcaoParamentro} ) => (
    <button onClick={funcaoParamentro}>{children}</button>
)

export default Button;