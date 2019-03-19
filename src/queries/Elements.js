import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const query = gql`
  {
    elements {
      content
      id
      title
    }
  }
`;

const withElements = () => WrappedComponent => {
  class WithElements extends Component {
    render() {
      return (
        <Query query={query}>
          {({ loading, error, data }) => {
            if (loading) {
              return <p>loading</p>;
            }

            if (error) {
              return <p>error</p>;
            }

            return <WrappedComponent elements={data.elements} />;
          }}
        </Query>
      );
    }
  }

  return WithElements;
};

export default withElements;
