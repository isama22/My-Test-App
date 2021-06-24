import { Component } from "react";
import { EmptyState, Layout, Page } from '@shopify/polaris';
import { TitleBar } from '@shopify/app-bridge-react';

const img = 'https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg';

class Index extends Component {

  render() {
    return (
      <Page>
        <TitleBar
          title="Sample App"
          primaryAction={{
            content: 'Select products',
          }}
        />
        <Layout>
          <EmptyState
            heading='discount your products temporarily'
            action={{
              content: 'select products',
              onAction: () => console.log('clicked')
            }}
            image={img}
          >
            <p>select products to change their price temporarily</p>
          </EmptyState>
        </Layout>
      </Page>
    )
  }
  // handleSelection = (resources) => {
  //   const IdFromResources = resources.selection.map((product) => product.id)
  //   this.setState({ open: false })
  //   console.log(IdFromResources)
  // }
}

export default Index;
