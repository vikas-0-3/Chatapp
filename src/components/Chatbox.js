import React from 'react'




const Chatbox = (props) => {

    const append = (msg) => {

        const messageElement = document.createElement('div');
        messageElement.innerText = msg;
        messageElement.classList.add('card');
        messageElement.classList.add('chatbubble');
        messageElement.classList.add('chatbubble-right');
        messageElement.classList.add('text-white');
        messageElement.classList.add('p-3');
        messageElement.classList.add('my-2');

        document.getElementById('chatcontainer').append(messageElement);

    }


    const submitchat = (e) => {
        const messageInp = document.getElementById("messageInp");
        e.preventDefault();
        const message = messageInp.value;
        if(message !== "") {
            append(message);
        }
        messageInp.value = '';
    }


    return (
        <div className="col-sm-9 bg-light">
            <div className="bg-white row" style={{ borderBottom: "1px solid grey" }}>
                <h3 className="text-center py-3">{props.name} &ensp;
                    <small className="col-theme"> {props.isOnline ? "Online" : props.LastSeen} </small>
                    &emsp;<small className="col-theme"> <i class="fas fa-phone-square-alt"></i> </small>
                    &emsp;<small className="col-theme"> <i class="fas fa-video"></i> </small>
                </h3>
            </div>

            <div className="container-fluid py-3 bg-white" id="chatcontainer">

                <p className="text-center text-success">No messages yet</p>

                



            </div>
            <div className="row my-2 p-0">
                <div className="col-sm-11">
                    <input type="text" placeholder="Enter your mesage" id="messageInp" className="form form-control " />
                </div>

                    <div className="col-sm-1">
                        <button type="submit" onClick={submitchat} className="btn btn-success" >Send</button>
                    </div>
            
            </div>

        </div>
    )
}

export default Chatbox
