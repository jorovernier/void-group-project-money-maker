import React from "react";
import "./Landing.scss";
import gina from "../../Images/gina-profile.jpeg";
import isaac from "../../Images/isaac-profile.jpeg";
import thomas from "../../Images/thomas-profile.jpeg";
import joely from "../../Images/joely-profile.jpg"

export default class Landing extends React.Component {
  componentDidMount() {
    this.props.changeTitle("Login");
    this.props.setSidebar(false);
  }

  render() {
    return (
      <div className="home-main">
        <div className="picture-element">
          <div className="headers-container">
            <h2>IT'S TIME TO ENTER</h2>
            <h1>THE VOID</h1>
          </div>
        </div>
        <div className="dark-color-block">
          Changing the Way You Work As A Group
        </div>
        <div className="icon-block">
          <div className="dashboard-icon-container">
            <img
              className="dashboard-icon"
              src="https://image.flaticon.com/icons/svg/348/348186.svg"
              alt="Dashboard"
            />
            <div className="dashboard-icon-text">
              View All of Your Group's Tasks in Your Dashboard
            </div>
          </div>
          <div className="chat-icon-container">
            <img
              className="chat-icon"
              src="https://image.flaticon.com/icons/svg/2025/2025049.svg"
              alt="Live Chat"
            />
            <div className="chat-icon-text">
              Chat Live with Everyone In Your Group
            </div>
          </div>
        </div>
        <div className="about-us">
          <h1 className="about-us-title">Meet The Team</h1>
          <div className="team-members">
            <div className="team-child-1">
              <div className="social-icons">
                <a
                  href="https://github.com/ginaperez"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="github-icon"
                    src="https://image.flaticon.com/icons/png/512/25/25231.png"
                    alt="Github Icon"
                  ></img>
                </a>
                <a
                  href="https://www.linkedin.com/in/gina-perez-81234772/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="linkedin-icon"
                    src="https://icon-library.net/images/linkedin-black-icon/linkedin-black-icon-15.jpg"
                    alt="LinkedIn Icon"
                  ></img>
                </a>
              </div>
              <div className="name-1">Gina Perez</div>
              <img
                className="image-1"
                src={gina}
                alt="Gina Perez"
              ></img>
            </div>
            <div className="team-child-2">
              <div className="social-icons">
                <a
                  href="https://github.com/jorovernier"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="github-icon"
                    src="https://image.flaticon.com/icons/png/512/25/25231.png"
                    alt="Github Icon"
                  ></img>
                </a>
                <a
                  href="https://www.linkedin.com/in/joely-vernier/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="linkedin-icon"
                    src="https://icon-library.net/images/linkedin-black-icon/linkedin-black-icon-15.jpg"
                    alt="LinkedIn Icon"
                  ></img>
                </a>
              </div>
              <div className="name-2">Joely Vernier</div>
              <img
                className="image-2"
                src={joely}
                alt="Joely Vernier"
              ></img>
            </div>
            <div className="team-child-3">
              <div className="social-icons">
                <a
                  href="https://github.com/thoover1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="github-icon"
                    src="https://image.flaticon.com/icons/png/512/25/25231.png"
                    alt="Github Icon"
                  ></img>
                </a>
                <a
                  href="https://www.linkedin.com/in/thomas-hoover-781540195/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="linkedin-icon"
                    src="https://icon-library.net/images/linkedin-black-icon/linkedin-black-icon-15.jpg"
                    alt="LinkedIn Icon"
                  ></img>
                </a>
              </div>
              <div className="name-3">Thomas Hoover</div>
              <img
                className="image-3"
                src={thomas}
                alt="Thomas Hoover"
              ></img>
            </div>
            <div className="team-child-4">
              <div className="social-icons">
                <a
                  href="https://github.com/isaachansen"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="github-icon"
                    src="https://image.flaticon.com/icons/png/512/25/25231.png"
                    alt="Github Icon"
                  ></img>
                </a>
                <a
                  href="https://www.linkedin.com/in/isaac-hansen-dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="linkedin-icon"
                    src="https://icon-library.net/images/linkedin-black-icon/linkedin-black-icon-15.jpg"
                    alt="LinkedIn Icon"
                  ></img>
                </a>
              </div>
              <div className="name-4">Isaac Hansen</div>
              <img
                className="image-4"
                src={isaac}
                alt="Isaac Hansen"
              ></img>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
