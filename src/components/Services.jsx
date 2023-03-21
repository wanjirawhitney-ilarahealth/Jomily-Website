import React from "react";
import "./Services.css"

const Services = () => {
    return(
        <div className="secln">
            <div class="overlay">
            <div class="hd3">
                <h1><span>Our</span>  Services</h1>
            </div>
    
            <div class="btns">
                <button type="button" class="btn1">RESIDENTIAL</button>
                <button type="button" class="btn2">RETAIL DESIGN</button>
                <button type="button" class="btn3">SPACE ADAPTATION</button>
            </div>

            <div class="dsgpic">
                <img src="https://html.design/demo/jomily/images/ser1.jpg" width="1000px" height="500px"></img>
            </div>

            <div class="DSG">
                <div class="dsg">
                    <h2>Design</h2>
                    <p>It is a long established fact that a reader will be 
                        distracted by the readable content of a page when 
                        looking at its layout. The point of using Lorem Ipsum is 
                        that it has a more-or-less normal distribution of letters, 
                        as opposed to using 'Content here, content here', 
                        making it look</p>

                        <button type="button" class="sm-btn2">See More</button>
                </div>

                <div class="dsgpic2">
                    <img src="https://html.design/demo/jomily/images/ser2.jpg" width="650px"></img>
                </div>
            </div>
           </div>

        </div>
    )
}

export default Services