import { Heading, Page, Button } from "@shopify/polaris";
import { Component } from "react";
import { ResourcePicker } from "@shopify/app-bridge-react";
import { TextStyle } from '@shopify/polaris';

class Index extends Component {

  render() {
    return (
      <div>
        <TextStyle variation="positive">
          Sample app using React and Next.js
        </TextStyle>
      </div>
    )
  }
  handleSelection = (resources) => {
    const IdFromResources = resources.selection.map((product) => product.id)
    this.setState({ open: false })
    console.log(IdFromResources)
  }
}

export default Index;
