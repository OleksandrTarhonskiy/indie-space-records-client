import React    from 'react';
import { Link } from 'react-router-dom';
import styled   from 'styled-components';
import Preview  from './beautifulPlay.png';

const AllThemesPage = () => (
  <AllThemesPage.ThemesWrapper>
    <AllThemesPage.Headline>
      Choose your
      <AllThemesPage.Cursive>
        Theme
      </AllThemesPage.Cursive>
    </AllThemesPage.Headline>
    <AllThemesPage.HorizontalList>
      <AllThemesPage.ThemeItem to="/demos/beautiful_play">
        View Demo
      </AllThemesPage.ThemeItem>
    </AllThemesPage.HorizontalList>
  </AllThemesPage.ThemesWrapper>
);

AllThemesPage.ThemesWrapper = styled.div`
  padding : 5% 15%;
`;

AllThemesPage.ThemeItem = styled(Link)`
  && {
    background        : url(${Preview});
    background-size   : cover;
    height            : 323px;
    width             : 30%;
    background-repeat : no-repeat;
    margin            : 1%;
    outline           : none;
    color             : transparent;
    text-decoration   : none;
    text-align        : center;
    display           : flex;
    flex-direction    : column;
    justify-content   : center;
    font-family       : 'Roboto', sans-serif;
    font-size         : 40px;

    &:hover {
      color       : #ffff;
      opacity     : 0.8;
      text-shadow : -4px -4px 0px rgba(0, 0, 0, 1);
    }
  }
`;

AllThemesPage.HorizontalList = styled.div`
  display        : flex;
  flex-direction : row;
`;

AllThemesPage.Headline = styled.h1`
  font-family : 'Roboto', sans-serif;
  color       : #374142;
`;

AllThemesPage.Cursive = styled.span`
  font-family : 'Pacifico', cursive;
  margin-left : 1%;
`;

export default AllThemesPage;
