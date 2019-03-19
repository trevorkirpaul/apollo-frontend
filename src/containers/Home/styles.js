import styled from 'styled-components';

const Home = styled.div`
  color: #f8f8f8;

  a {
    text-decoration: none;
    border-bottom: 1px solid #f8f8f8;
    /* background: #f8f8f8; */
    color: #f8f8f8;
  }

  a:hover {
    color: palevioletred;
  }
`;

const Title = styled.h1`
  color: #f8f8f8;
`;

const SubTitle = styled.h2``;

export { Home, Title, SubTitle };
