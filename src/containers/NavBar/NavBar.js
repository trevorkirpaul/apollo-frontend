import React from 'react';

import * as S from './styles';

const NavBar = () => {
  return (
    <S.NavBar>
      <S.Section>
        <S.Link to="/">Home</S.Link>
        <S.Link to="/">Articles</S.Link>
        <S.Link to="/">Posts</S.Link>
      </S.Section>

      <S.TitleSection>
        <S.Title>
          <S.Section>
            Trevor<S.BoldTitle>Kirpaul</S.BoldTitle>
          </S.Section>
          <S.SubTitle>Front End Developer</S.SubTitle>
        </S.Title>
      </S.TitleSection>
    </S.NavBar>
  );
};

export default NavBar;
