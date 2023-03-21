import React from "react";
import "./Clients.css"

const Clients = () => {
    return (
        <div className="cl">
            <div class="clients">
            <h1><span>What Is Say</span> Clients</h1>
            </div>

        <div class="paras">
            <div class="para1">
                <p>It is a long established fact that a reader will bQe distracted 
                    by the readable content of a page when looking at its of
                    Lorem Ipsum as their default mo
                </p>
            </div>

            <div class="para2">
                <p>It is a long established fact that a reader will bQe distracted 
                    by the readable content of a page when looking at its of 
                    Lorem Ipsum as their default mo
                </p>
            </div>
        </div>

        <div class="cntus">
            <div class="overlay2">
                <div class="cnttxt">
                    <h1>Contact Us</h1>
                </div>
                
                <div class="inp">
                    <input type="name" class="input-box" placeholder="Name"></input>
                    <input type="email" class="input-box" placeholder="Email"></input>
                    <input type="phone number" class="input-box" placeholder="Phone Number"></input>
                    <input type="message" class="msg-box" placeholder="Message"></input>
    
                    <button type="button" class="snd-btn">SEND</button>
                </div>
    
                <div class="map">
                    <img src="Images/mpss.jpg" width="300px" height="580px"></img>
                </div>
            </div>
        </div>  

        </div>
    )
}

export default Clients
