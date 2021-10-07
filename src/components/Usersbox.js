import React from 'react'
import Usercard from './Usercard'

const Usersbox = (props) => {

    const myusers = () => {
        let myArray = []
        for (let i = 0; i < props.NoOfUsers; i++) {
            myArray.push(<Usercard key={i} name={props.name} userimage={props.userimage} isOnline={props.isOnline} LastSeen={props.LastSeen} />)
        }
        return myArray
    }


    return (
        <div className="bg-light col-sm-3">
            <div className="bg-white row" style={{borderBottom:"1px solid grey"}}>
                <div className="col-12">
                    <h3 className="text-center col-theme py-3">Chat App</h3>
                </div>

            </div>

            <div id="leftscrolldiv">
                {myusers()}
            </div>


        </div>
    )
}

export default Usersbox

