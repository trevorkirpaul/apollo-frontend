import styled from 'styled-components';
import { Link as LinkBase } from 'react-router-dom';

const Link = styled(LinkBase)`
  text-decoration: none;
  color: white;
  margin-right: 10px;
  font-family: 'Roboto', sans-serif;

  &:hover {
    color: palevioletred;
    cursor: pointer;
  }
`;

const NavBar = styled.div`
  color: #f8f8f8;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Section = styled.div``;

const TitleSection = styled.div`
  text-align: right;
`;

const Title = styled.span`
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  font-size: 25px;
`;

const BoldTitle = styled(Title)`
  font-weight: 600;
`;

const SubTitle = styled.span`
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  font-size: 15px;
`;

export { NavBar, Section, Title, BoldTitle, SubTitle, TitleSection, Link };
