import React from "react";
import "./Section1.css";

export const Section1 = ({img, text}) =>  {
    return(
        <div className="container">
        <div class="KCHNDE">
            <div class="kchndepic">
                <img src="https://html.design/demo/jomily/images/our1.png" width="550px" height="400px"></img>{img}
            </div>

            <div class="kchnde">
                <h2>Kichan Design</h2>
                <p>It is a long established fact that a reader will be distracted by the 
                   readable content of a page when looking at its layout. The point of 
                   using Lorem Ipsum is that it has a more-or-less normal distribution 
                   of letters, as opposed to using 'Content here, content here', making 
                   it look like readable English. Many desktop publishing packages 
                   and web page editors now use Lorem Ipsum as their default model 
                   text, and a search for 'lorem ipsum' will uncover many web sites </p>

                   <button type="button" class="sm-btn">See More</button>
                   {text}
            </div>
        </div>
        </div>

    )
}

export default Section1