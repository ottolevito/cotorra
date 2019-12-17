import React from 'react'

const person = props => {
    return <div>
<p><span>{props.name} {props.age} {props.deporte}</span></p>
            <p>{props.children}</p>


    </div>
}

export default person