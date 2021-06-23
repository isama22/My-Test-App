import { Heading, Page, Button } from "@shopify/polaris";
import { Component } from "react";
import { ResourcePicker } from "@shopify/app-bridge-react";
import { TextStyle } from '@shopify/polaris';

class Index extends Component {

  // state = {
  //   open: false
  // }

  render() {
    return (
      // <Page
      //   title='Product selector'
      //   primaryAction={{
      //     content: 'Select Products',
      //     onAction: () => this.setState({ open: true })

      //   }}
      // >
      //   <ResourcePicker
      //     resourceType='Product'
      //     open={this.state.open}
      //     onCancel={ () => this.setState({ open: false })}
      //     onSelection={ (resources) => this.handleSelection(resources)}
      //   />
      // </Page>
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
