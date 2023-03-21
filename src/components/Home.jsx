import React from "react";
import { FaMapPin, FaPhone, FaEnvelope, FaUser, FaSearch } from "react-icons/fa";
import "./Home.css"

const Home = () => {
    return(
        <div className="container">
            <div className="Icons">
            <div class="location">
                <div class="ln">
                    <FaMapPin/>
                </div>
                <h3>Location</h3>
            </div>
    
            <div class="cnt">
                <div class="cnt2">
                    <FaPhone/>
                </div>
                <h3>(+71)258964785</h3>
            </div>
    
            <div class="mail">
                <div class="mail2">
                    <FaEnvelope/>
                </div>
                <h3>demo@gmail.com</h3>
            </div>
    
            <div class="login">
                <h3>Login</h3>
                <div class="login2">
                    <FaUser/>
                </div>
            </div>
    
            <div class="search">
                <FaSearch/>
            </div>
            </div>

              <div class="INDES">
              <div class="indes">
                <h3>INTERIOR <span>DESIGN</span></h3> 
                <p>There are many variations of passages of Lorem Ipsum available, but
                   the majority have suffered alteration in some form, by injected humour,
                </p>

                <div class="deab">
                    <div>
                        <button type="button" class="de-btn">Our Designs</button>
                    </div>

                    <div class="ab">
                        <button type="button" class="ab-btn">About</button>
                    </div>
                </div>
              </div>

            <div class="indespic">
                <img src="https://html.design/demo/jomily/images/img.jpg" width="700px" height="270px" ></img>

                <div class="besindes">
                    <p>
                    <strong>BEST INTERIOR DESIGN</strong>
                        There are many variations of passages 
                        of Lorem Ipsum available, but the 
                        majority have suffered alteration in 
                        some form, by injected humour, 
                    </p>

                        <img src="https://html.design/demo/jomily/images/img2.jpg" width="240px" height="120px"></img>
                </div>
            </div>
        </div>


        <div class="hd2">
            <h1><span>Our</span> Designs</h1>
        </div>

        <div class="fstln">
            <p>It is a long established fact that a reader will be distracted by the readable content</p>
        </div>

        </div>
    )
}

export default Home;
