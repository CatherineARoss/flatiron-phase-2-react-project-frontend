import React from "react";
import MeetTheMaker from '../images/MeetTheMaker.jpg';  

const About = () => {
    return (
        <div className="about">
            <h1>Meet the Maker</h1>
            <img className="about-photo" src={MeetTheMaker} />
            <h2>Handmade Home Goods & Clothing for Those Wanting a Slower Lifestyle.</h2>
            <hr></hr>
            <p>My name is Catherine, and I'm a true nature lover originally from the scenic landscapes of Oregon. 
                Recently, I embarked on a new adventure and made a move to the beautiful state of Georgia. 
                On those blissful, sunny days, you'll often find me immersed in the great outdoors, either backpacking 
                through lush trails or gliding along serene waters in my kayak, always in the delightful company 
                of my Collie dog.</p>
            <br></br>
            <p>From a young age, the art of crocheting was taught to me by my beloved aunts. 
                Those early lessons sparked a lifelong passion for crafting, 
                and I've since dedicated countless hours to creating snuggly, 
                comforting pieces to wear and decorate my home with.</p>
            <br></br>
            <p>Colors that echo the beauty of nature resonate deeply with me; 
                they have an incredible grounding effect and never fail to transport me back to 
                cherished memories spent amidst the natural world. Drawing inspiration from 
                my love for a slow and simple lifestyle, my creations exude warmth and authenticity. 
                It's my genuine delight to share this joy and tranquility with you through my handmade items.</p>
        </div>
    )
}

export default About;