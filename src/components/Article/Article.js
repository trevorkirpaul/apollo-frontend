import React from 'react';
import ReactMarkdown from 'react-markdown';

import * as S from './styles';

const Article = ({ content }) => (
  <S.Wrapper>
    <ReactMarkdown source={content} />
  </S.Wrapper>
);

export default Article;
