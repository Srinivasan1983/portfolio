import React, { Component } from "react";
import {
  Tab,
  Tabs,
  Grid,
  Cell,
  Card,
  CardTitle
} from "react-mdl";

import styled from "styled-components";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  getProjectDetails = () => {
    console.log();

    if (this.state.activeTab === 0) {
      return (
        <div className="project-grid">
          <Grid className="demo-grid-3">
            <Cell col={4} tablet={8}>
              <Card shadow={0} style={{ margin: "auto" }}>
                <CardTitle
                  style={{
                    color: "#fff",
                    height: "176px",
                    background:
                      "url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover"
                  }}
                >
                  Welcome
                </CardTitle>
              </Card>
            </Cell>
            <Cell col={4} tablet={6}>
              Description
            </Cell>
            <Cell col={4} phone={4}>
              <LinkWrapper>
                <div className="link-container">
                  <a
                    href="https://e-shopping.netlify.com/"
                    className="eshopping-live-demo"
                    title="LIVE DEMO"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i class="fas fa-link">Live Demo</i>
                  </a>
                  <a
                    href="https://github.com/Srinivasan1983/eshopping"
                    className="eshopping-github"
                    title="SOURCE CODE"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i class="fab fa-github-square">Github</i>
                  </a>
                </div>
              </LinkWrapper>
            </Cell>
          </Grid>
          <Grid className="demo-grid-3">
            <Cell col={4} tablet={8}>
              <Card shadow={0} style={{ margin: "auto" }}>
                <CardTitle
                  style={{
                    color: "#fff",
                    height: "176px",
                    background:
                      "url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover"
                  }}
                >
                  Welcome
                </CardTitle>
              </Card>
            </Cell>
            <Cell col={4} tablet={6}>
              Description
            </Cell>
            <Cell col={4} phone={4}>
              Link
            </Cell>
          </Grid>
          <Grid className="demo-grid-3">
            <Cell col={4} tablet={8}>
              <Card shadow={0} style={{ margin: "auto" }}>
                <CardTitle
                  style={{
                    color: "#fff",
                    height: "176px",
                    background:
                      "url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover"
                  }}
                >
                  Welcome
                </CardTitle>
              </Card>
            </Cell>
            <Cell col={4} tablet={6}>
              Description
            </Cell>
            <Cell col={4} phone={4}>
              Link
            </Cell>
          </Grid>
        </div>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <div>
          <Grid className="demo-grid-3">
            <Cell col={4} tablet={8}>
              <Card shadow={0} style={{ margin: "auto" }}>
                <CardTitle
                  style={{
                    color: "#fff",
                    height: "176px",
                    background:
                      "url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover"
                  }}
                >
                  Welcome
                </CardTitle>
              </Card>
            </Cell>
            <Cell col={4} tablet={6}>
              Description
            </Cell>
            <Cell col={4} phone={4}>
              Link
            </Cell>
          </Grid>
          <Grid className="demo-grid-3">
            <Cell col={4} tablet={8}>
              <Card shadow={0} style={{ margin: "auto" }}>
                <CardTitle
                  style={{
                    color: "#fff",
                    height: "176px",
                    background:
                      "url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover"
                  }}
                >
                  Welcome
                </CardTitle>
              </Card>
            </Cell>
            <Cell col={4} tablet={6}>
              Description
            </Cell>
            <Cell col={4} phone={4}>
              Link
            </Cell>
          </Grid>
          <Grid className="demo-grid-3">
            <Cell col={4} tablet={8}>
              <Card shadow={0} style={{ margin: "auto" }}>
                <CardTitle
                  style={{
                    color: "#fff",
                    height: "176px",
                    background:
                      "url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover"
                  }}
                >
                  Welcome
                </CardTitle>
              </Card>
            </Cell>
            <Cell col={4} tablet={6}>
              Description
            </Cell>
            <Cell col={4} phone={4}>
              Link
            </Cell>
          </Grid>
        </div>
      );
    } else if (this.state.activeTab === 2) {
      return (
        <div>
          <Grid className="demo-grid-3">
            <Cell col={4} tablet={8}>
              <Card shadow={0} style={{ margin: "auto" }}>
                <CardTitle
                  style={{
                    color: "#fff",
                    height: "176px",
                    background:
                      "url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover"
                  }}
                >
                  Welcome
                </CardTitle>
              </Card>
            </Cell>
            <Cell col={4} tablet={6}>
              Description
            </Cell>
            <Cell col={4} phone={4}>
              Link
            </Cell>
          </Grid>
          <Grid className="demo-grid-3">
            <Cell col={4} tablet={8}>
              <Card shadow={0} style={{ margin: "auto" }}>
                <CardTitle
                  style={{
                    color: "#fff",
                    height: "176px",
                    background:
                      "url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover"
                  }}
                >
                  Welcome
                </CardTitle>
              </Card>
            </Cell>
            <Cell col={4} tablet={6}>
              Description
            </Cell>
            <Cell col={4} phone={4}>
              Link
            </Cell>
          </Grid>
          <Grid className="demo-grid-3">
            <Cell col={4} tablet={8}>
              <Card shadow={0} style={{ margin: "auto" }}>
                <CardTitle
                  style={{
                    color: "#fff",
                    height: "176px",
                    background:
                      "url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover"
                  }}
                >
                  Welcome
                </CardTitle>
              </Card>
            </Cell>
            <Cell col={4} tablet={6}>
              Description
            </Cell>
            <Cell col={4} phone={4}>
              Link
            </Cell>
          </Grid>
        </div>
      );
    }
  };

  handleTabChange = tabId => {
    this.setState({ activeTab: tabId });
  };

  render() {
    return (
      <div className="category-tabs">
        <Tabs
          activeTab={this.state.activeTab}
          onChange={tabId => this.handleTabChange(tabId)}
          ripple
        >
          <Tab>My Projects</Tab>
        </Tabs>
        <section>
          <Grid className="project-grid" align={"middle"}>
            <Cell col={12}>
              <div className="content">{this.getProjectDetails()}</div>
            </Cell>
          </Grid>
        </section>
      </div>
    );
  }
}

export default Projects;

const LinkWrapper = styled.div`

  .link-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 25px;
    padding: 0 15px;
  }
  .eshopping-live-demo {
    color: orangered;
  }
  .eshopping-github {
    color: orangered;
  }
`;
