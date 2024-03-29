import React from "react";
import { render } from "react-dom";
import {
  Accordion,
  AccordionItem,
  Button,
  CodeSnippet,
  Link,
  TextArea
} from "carbon-components-react";

import "./style.css";

import POPUP_BLOCKED from "./popup_blocked.jpg";

const links = `https://www.google.com/
https://gopher.it/
https://mlh.io/`;
class App extends React.Component {
  state = {
    links: ""
  };

  onSubmit = () => {
    this.state.links.split(/\n/).forEach(link => {
      if (link) {
        window.open(link, "_blank");
      }
    });
  };

  render() {
    return (
      <div className="container" style={{ marginTop: 30 }}>
        <h1 style={{ marginBottom: 5 }}>MultiLink 🔗</h1>
        <p>Open multiple links at the same time in new tabs!</p>
        <div style={{ marginTop: 20 }}>
          <TextArea
            hideLabel={false}
            labelText={
              <span>
                <b>Enter your links here</b>:
              </span>
            }
            invalidText="A valid value is required"
            placeholder={links}
            onChange={e =>
              this.setState({ ...this.state, links: e.target.value })
            }
          />
        </div>
        <Button style={{ marginTop: 20 }} onClick={this.onSubmit}>
          🚀 Open All Links
        </Button>

        <h2 style={{ marginTop: 30, marginBottom: 10 }}>FAQs</h2>
        <Accordion>
          <AccordionItem title="New tabs were blocked by my browser...!? 🙁">
            <p>
              In your browser, please allow the app to open multiple new tabs.
              <img src={POPUP_BLOCKED} style={{ marginTop: 10 }} />
            </p>
          </AccordionItem>
          <AccordionItem title="How does this work?">
            <p>
              <b>Easy!</b> In Javascript you can do this:
            </p>
            <CodeSnippet style={{ marginTop: 10 }}>
              window.open("https://google.com", "_blank");
            </CodeSnippet>
          </AccordionItem>
        </Accordion>

        <div style={{ marginTop: 30 }}>
          Built by{" "}
          <Link href="https://gopher.it" target="_blank">
            Gopher Labs
          </Link>{" "}
          using{" "}
          <Link href="https://carbondesignsystem.com" target="_blank">
            Carbon Components
          </Link>
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
