import React      from 'react';
import styled     from 'styled-components';

import {
  BeautifulPlayStyle,
  BeautifulPlayFont
}                  from '../models/themes_styles';

import SetTheme    from './set_theme';

const BeautifulPlay = ({setTheme}) => (
  <div>
    <SetTheme
      style={BeautifulPlayStyle}
      fonts={BeautifulPlayFont}
    />
    <BeautifulPlay.ThemeWrapper>
      <BeautifulPlay.Navigation>
        <BeautifulPlay.NavItems>
          <BeautifulPlay.NavItem>
            <BeautifulPlay.Link href="">Music</BeautifulPlay.Link>
          </BeautifulPlay.NavItem>
          <BeautifulPlay.NavItem>
            <BeautifulPlay.Link href="">Merch</BeautifulPlay.Link>
          </BeautifulPlay.NavItem>
          <BeautifulPlay.NavItem>
            <BeautifulPlay.Link href="">About</BeautifulPlay.Link>
          </BeautifulPlay.NavItem>
        </BeautifulPlay.NavItems>
      </BeautifulPlay.Navigation>
      <BeautifulPlay.Header>
        theme#1
      </BeautifulPlay.Header>
      <BeautifulPlay.FirstSection>
        tracks and albums here
      </BeautifulPlay.FirstSection>
      <BeautifulPlay.SecondSection>
        tracks and albums here
      </BeautifulPlay.SecondSection>
      <BeautifulPlay.ThirdSection>
        tracks and albums here
      </BeautifulPlay.ThirdSection>
    </BeautifulPlay.ThemeWrapper>
  </div>
);

BeautifulPlay.ThemeWrapper = styled.div`
  color       : #0d0228;
  font-family : 'Roboto', sans-serif;
`;

BeautifulPlay.Navigation = styled.div`
  position   : absolute;
  width      : 100%;
  text-align : center;
`;

BeautifulPlay.NavItems = styled.ul`
  margin  : 0;
  padding : 0;
`;

BeautifulPlay.Link = styled.a`
  && {
    color           : #ffff;
    text-decoration : none;
    font-weight     : 600;

    &:hover {
      color : #ba3341;
    }
  }
`;

BeautifulPlay.NavItem = styled.li`
  display : inline-block;
  padding : 2%;
`;

BeautifulPlay.FirstSection = styled.div`
  min-height : 400px;
  background : #ffff;
  padding    : 2%;
`;

BeautifulPlay.ThirdSection = styled.div`
  min-height : 400px;
  background : #80e26a;
  padding    : 2%;
`;

BeautifulPlay.Header = styled.div`
  width             : 100%;
  background        : linear-gradient(to right,#413b53 0%,#e84d75 100%);
  padding           : 15% 0;
  display           : flex;
  justify-content   : center;
  color             : #ffff;
  font-size         : 40px;
  text-shadow       : 4px 3px 0px rgba(1, 1, 1, 1);
`;

BeautifulPlay.SecondSection = styled.div`
  min-height : 400px;
  background : #ffff;
  padding    : 2%;
`;

export default BeautifulPlay;
