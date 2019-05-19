import React, { Component } from "react";
import {
  Layout,
  Drawer,
  Content,
  Header,
  Navigation,
  Textfield
} from "react-mdl";
import { Link } from "react-router-dom";

import styled from "styled-components";
import Routes from "../routes/Routes";
import FooterPage from './FooterPage';

class NavigationBar extends Component {
  render() {
    return (
      <div>
        <HeaderWrapper className="demo-big-content">
          <Layout>
            <Header className="header-color" title="Title" scroll>
                <Textfield
                  value=""
                  onChange={() => {}}
                  label="Search3"
                  expandable
                  expandableIcon="search"
                />
                <Navigation>
                  <Link to="/resume">Resume</Link>
                  <Link to="/aboutme">About Me</Link>
                  <Link to="/projects">Projects</Link>
                  <Link to="/contact">Contact</Link>
                </Navigation>
            </Header>
            <Drawer title="Title">
              <Navigation>
                <Link to="/resume">Resume</Link>
                <Link to="/aboutme">About Me</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
              </Navigation>
            </Drawer>
            <Content>
              <div className="page-content" />
              <Routes />
            </Content>
            <FooterPage />
          </Layout>
        </HeaderWrapper>
      </div>
    );
  }
}

const HeaderWrapper = styled.div`
  .header-color {
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
  }
`;

export default NavigationBar;
