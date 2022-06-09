import React, { Component } from 'react';
import "./About.css";
import alec_photo from "../assets/DSC_0386 - Copy - Copy.jpg";
export default class About extends Component {
  render() {
    return (
      <div>
        <div>
        <div class="split left">
          <div className="centered">
            <img 
              className="profile_image"
              img src = {alec_photo}
              alt="Profile Pic"
              ></img>
          </div>
        </div>
        <div className="split right">
          <div className="centered">
            <div className="name_title">Alec Rothenberg</div>
            <div className="brief_description">
              My name is Alec Rothenberg and I am a junior at the University of Florida. I am majoring in computer 
              science with a minor in engineering innovation and a certificate in arificial intelligence. On campus, I am involved
              with the engineering leadership council and lambda chi alpha. As well, I am a research assistant at the GLaDE
              labarortory. In my free time, I like to go to the gym and cook.
            </div>
          </div>
        </div>
      </div>
      </div>
    )
  }
}