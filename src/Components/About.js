import React, { Component } from "react";
import Fade from "react-reveal";

class About extends Component {
  render() {
    if (!this.props.data) return null;

    const name = this.props.data.name;
    const profilepic = this.props.data.image;
    const bio = this.props.data.bio;
    const state = this.props.data.address.state;
    const zip = this.props.data.address.zip;
    const phone = this.props.data.phone;
    const email = this.props.data.email;
    const resumeDownload = this.props.data.resumedownload;

    return (
      <section id="about">
        <Fade duration={1000}>
          <div className="row">
            <div className="three columns">
              <img
                className="profile-pic"
                src={profilepic}
                alt="Abhishek Shah Profile Pic"
              />
            </div>
            <div className="nine columns main-col">
              <h2>About Me</h2>

              <p>{bio}</p>
              <div className="row">
                <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
                    <span>{name}</span>
                    <br />
                    <span>
                     
                      {state},  INDIA <br /> {zip}
                    </span>
                    <br />
                    <span ><a href="tel:+918076367467">{phone} </a>   </span>
                    <br />
                    
                    <span><a href={`mailto:${email}`}>{email}</a></span>
                  </p>
                </div>
                <div className="columns download">
                  <p>
                  <a href={`${resumeDownload}`} rel="noreferrer" target="_blank" className="button"  download>
                  <i className="fa fa-download"></i>Download Resume
                  </a>
                    
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default About;
