import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

import styled from "styled-components";

class LandingPage extends Component {
  getSocialLinks() {
    return [
      {
        href: "https://github.com/",
        title: "My Github",
        icon: "fab fa-github-alt",
        class: "brand-github"
      },
      {
        href: "https://www.linkedin.com/",
        title: "My LinkedIn",
        icon: "fab fa-linkedin-in",
        class: "brand-linkedin"
      }
    ];
  }

  render() {
    const socialLinks = this.getSocialLinks();
    return (
      <LandingGrid>
        <Grid className="landing-grid">
          <Cell col={3} tablet={8} align={"middle"}>
            <img
              src="http://www.dolciariaborrillo.it/wp-content/uploads/2015/08/man.png"
              alt="profile-pic"
              className="profile-pic"
            />
          </Cell>
          <Cell col={5} tablet={6} align={"middle"}>
            <div className="banner-text">
              <h4>Full Stack Developer</h4>
              <hr />
              <div className={`social-links-container`}>
                <div className="social-links">
                  {socialLinks.map((data, index) => {
                    return (
                      <div className="link-container" key={index}>
                        <a
                          href={data.href}
                          className={data.class}
                          title={data.title}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className={data.icon} />
                        </a>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </Cell>
          <Cell col={4} phone={4} align={"middle"}>
            <div className="banner-skill">
              <b>Skills</b>
              <p>
                React | NodeJs | Express | Bootstrap |VueJs | HTML | CSS |
                Mongodb | MySQL | Blockchain | Ethereum
              </p>
            </div>
          </Cell>
        </Grid>
        <hr />
      </LandingGrid>
    );
  }
}

const LandingGrid = styled.div`
  .landing-grid {
    background: #00416a; /* fallback for old browsers */
    background: -webkit-linear-gradient(
      to left,
      #e4e5e6,
      #00416a
    ); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(
      to left,
      #e4e5e6,
      #00416a
    ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

    margin: auto;
    text-align: center;
    height: auto;
  }
  .profile-pic {
    height: 250px;
  }
  .banner-text {
    background-color: black;
    width: 75%;
    opacity: 0.8;
    margin: auto;
    border-radius: 5px;
    text-align: center;
  }
  .banner-text h4 {
    color: white;
    font-size-adjust: inherit;
    font-weight: bold;
  }
  .banner-text hr {
    border-top: 5px dotted whitesmoke;
    margin: auto;
    width: 50%;
  }
  .banner-skill {
    margin: auto;
    box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    background-color: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(5px);
    text-align: center;
    padding: 2rem;
  }
  .banner-skill p {
    font-size-adjust: inherit;
    font-weight: bold;
    padding: 1rem;
  }
  .social-links-container {
    .social-links {
      display: flex;
      justify-content: space-between;
      padding: 10px;
      .link-container {
        display: flex;
        align-items: center;
        flex: 0 0 0;
        font-size: 35px;
        padding: 0 15px;
      }
    }
  }
  .brand-linkedin {
    color: #0077B5;
  }
  .brand-github {
    color: white;
  }

`;

export default LandingPage;
