import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import Article from '../components/Article';

const Articles = () => (
  <Query
    query={gql`
      {
        articles {
          title
          content
          id
        }
      }
    `}
  >
    {({ loading, error, data }) => {
      if (loading) {
        return <p>loading</p>;
      }
      if (error) {
        return <p>error</p>;
      }

      return data.articles.map(article => (
        <Article key={article.id} content={article.content} />
      ));
    }}
  </Query>
);

export default Articles;
