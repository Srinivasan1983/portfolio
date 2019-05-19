import React, { Component } from "react";
import {
  Tab,
  Tabs,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardActions,
  CardText,
  CardMenu,
  Button,
  IconButton
} from "react-mdl";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  getProjectDetails = () => {
    console.log();

    if (this.state.activeTab === 0) {
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
          <Tab>React</Tab>
          <Tab>VueJs</Tab>
          <Tab>Ethereum</Tab>
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
