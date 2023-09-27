import React from "react";
import MeetTheMaker from '../images/MeetTheMaker.jpg';  

const About = () => {
    return (
        <div className="about">
            <h1>Meet the Maker</h1>
            <img className="about-photo" src={MeetTheMaker} />
            <h3>Handmade Home Goods & Clothing for Those Wanting a Slower Lifestyle.</h3>
            <hr></hr>
            <p>My name is Catherine and I am a true nature lover from Oregon who just moved to Georgia. 
                On sunny days you can find me back-packing and kayaking with my Collie dog. 
                I have been crocheting since a young age when I was taught by my aunts, 
                and have spent many hours passionately creating cozy items to wear and use in my home.</p>
            <p>Colors influenced by nature are my favorite to use since they have a grounding effect and remind me of memories spent outside. 
                My inspiration comes from my love of living a slow and simple lifestyle, 
                and it brings me great joy to share this with you.</p>
        </div>
    )
}

export default About