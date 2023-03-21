import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import "./Footer.css"


const Footer = () => {
    return(
        <div class="newslt">
            <div class="nsl">
                <h1>Newsletter</h1>
            </div>
            <div>
                <p><input type="email" class="eml-box" placeholder="Enter Your Email"></input></p>
            </div>

            <div class="footer">
                <div class="abou">
                    <div class="txt">
                         <h1>ABOUT</h1>
                         <img src="https://html.design/demo/jomily/images/logo1.png" height="60px" width="180px"></img>

                         <div class="icons">
                            <div class="fb">
                                <FaFacebook/>        
                            </div>
    
                            <div class="twt">
                                <FaTwitter/>
                            </div>
    
                            <div class="in">
                                <FaLinkedin/>
                            </div>
    
                            <div class="ig">
                                <FaInstagram/>
                            </div>
                        </div>
                    </div>

                    <div class="quli">
                        <h1>QUICK LINK</h1>
                        <p>
                            <div class="hm">
                                 Home 
                            </div>

                            <div class="sv">
                                 Services 
                            </div>

                            <div class="cn">
                                Contact 
                            </div>

                            <div class="dn">
                                Design
                            </div>

                            <div class="cs">
                                 Clients 
                            </div>
                        </p>
                    </div>

                    <div class="kit">
                    <h1>KEEP IN TOUCH</h1>
                    <p><strong>Corporate Office Address:</strong>
                        <img src="https://html.design/demo/jomily/icon/1.png"></img>
                        There are many variations of 
                        passages
                        <img src="https://html.design/demo/jomily/icon/2.png"></img>
                        ( +1234567890 )
                    </p>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Footer