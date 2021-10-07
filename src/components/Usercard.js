import React from 'react'
const Usercard = (props) => {
    return (
        <div className="row px-3 pt-3 bg-white m-1 my-2 usercard">
            <div className="col-sm-3">
                <img src={props.userimage} alt="User" style={{ height: "60px", width: "60px", borderRadius: "50%" }} className="img-thumbnail" />
            </div>
            <div className="col-sm-9 pt-3">
                <h5>{props.name}</h5>
                {props.isOnline?<p className="text-end col-theme"> Online</p>
                :<p className="text-end col-theme"> {props.LastSeen}</p>
                }
                
            </div>

        </div>
    )
}

export default Usercard
