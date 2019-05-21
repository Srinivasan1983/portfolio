import React, { Component } from "react";
import {
  Grid,
  Cell,
  List,
  ListItem,
  ListItemContent
} from "react-mdl";

import styled from "styled-components";

class Contact extends Component {
  render() {
    return (
      <ContactWrapper>
        <div className="contact-body">
          <Grid className="contact-grid">
            <Cell col={6}>
              <h3>Srinivasan Swaminathan</h3>
              <img
                src="http://www.dolciariaborrillo.it/wp-content/uploads/2015/08/man.png"
                alt="avatar-pic"
                className="contact-pic"
              />
              <p className="contact-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam,
              </p>
            </Cell>
            <Cell col={6}>
              <h3>Contact Me</h3>
              <hr />
              <div className="contact-list">
                <List>
                  <ListItem>
                    <ListItemContent>
                      <i class="fas fa-envelope" />
                      <b>doloremagna@example.com</b>
                    </ListItemContent>
                  </ListItem>
                  <ListItem>
                    <ListItemContent>
                    <i class="fas fa-phone-square"></i>
                      <b>(678)432-3344</b>
                    </ListItemContent>
                  </ListItem>
                  <ListItem>
                    <ListItemContent>
                    <i class="fab fa-skype"></i>
                      <b>MySkypeId</b>
                    </ListItemContent>
                  </ListItem>
                </List>
              </div>
            </Cell>
          </Grid>
        </div>
      </ContactWrapper>
    );
  }
}
export default Contact;

const ContactWrapper = styled.div`
  .contact-body {
    margin: auto;
    width: 100%;
    height: auto;
    justify-content: center;
    padding: 2rem;
  }
  .contact-grid {
    justify-content: center;
    text-align: center;
    width: 80%;
    height: auto;
    background: white;
    color: black;
    margin-bottom: 20px;
  }
  .contact-pic {
    height: 250px;
  }
  .contact-text {
    width: 75%;
    margin: auto;
    padding-top: 1rem;
  }
  .contact-grid h3 {
    font-family: "Oswald";
  }

  .contact-grid p {
    font-family: "cursive";
    font-weight: bold initial;
  }
  .contact-grid hr {
    border-top: 5px dotted orangered;
    width: 50%;
    margin: auto;
  }
  .contact-list .fa-envelope {
    font-size: 35px;
    padding-right: 5rem;
    color: #1ab7ea;
    text-shadow: 1px 1px 1px #ccc;
  }
  .contact-list .fa-phone-square {
    font-size: 35px;
    padding-right: 5rem;
    color: #E71D34;
    text-shadow: 1px 1px 1px #ccc;
  }
  .contact-list .fa-skype {
    font-size: 35px;
    padding-right: 5rem;
    color: #003A8F;
    text-shadow: 1px 1px 1px #ccc;
  }
`;
