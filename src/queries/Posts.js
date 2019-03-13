import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";

const Post = ({ title, body, author: { email } }) => (
  <React.Fragment>
    <h2>{title}</h2>
    <p>body: {body}</p>
    <p>author: {email}</p>
  </React.Fragment>
)

const Posts = () => (
  <Query
    query={gql`
      {
        posts {
          title
          body
          id
          author {
            email
            id
          }
        }
      }
    `}
  >
    {({ loading, error, data }) => {
      if (loading) return <p>loading...</p>;
      if (error) return <p>Error</p>;
      console.log({ data });

      return data.posts.map(post => (
        <Post key={post.id} {...post} />
      ))
    }}
  </Query>
);

export default Posts;
