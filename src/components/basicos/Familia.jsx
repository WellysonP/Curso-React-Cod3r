import React, { cloneElement } from "react";

export default props => {
    // const {Children} = props
    return (
        <div>
            {React.Children.map(props.children, child => {
                return cloneElement(child, props)
            })}
        </div>
    )
}