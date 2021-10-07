import React from 'react'

const Bubbleright = (props) => {
    return (
        <div className="card chatbubble chatbubble-right text-white p-3 my-2">
            {props.message}
        </div>
    )
}

export default Bubbleright
