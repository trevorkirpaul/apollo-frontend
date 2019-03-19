import React from 'react';
import ReactMarkdown from 'react-markdown';

import Elements from 'queries/Elements';

import * as S from './styles';

const Home = ({ elements }) => {
  if (!elements || elements.length < 1) {
    return <p>loading...</p>;
  }

  return (
    <S.Home>
      <ReactMarkdown source={elements[0].content} />
    </S.Home>
  );
};

export default Elements()(Home);
