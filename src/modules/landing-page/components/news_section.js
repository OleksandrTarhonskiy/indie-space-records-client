import React           from 'react';
import styled          from 'styled-components';
import GridList        from '@material-ui/core/GridList';
import GridListTile    from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton      from '@material-ui/core/IconButton';
import InfoIcon        from '@material-ui/icons/Info';

import CustomButton    from './custom_button';
import { NEWS }        from '../fake-db';
import SubscribeForm   from '../forms/subscribe';

const LastNews = () => (
  <LastNews.Wrapper>
    <LastNews.Heading>
      Last News
    </LastNews.Heading>
    <LastNews.SubHeading>
     You can also get all latest news:
    </LastNews.SubHeading>
    <SubscribeForm />
    <LastNews.GridList cellHeight={300}>
      {NEWS.map(post => (
        <GridListTile key={post.id}>
          <img src={post.photo} alt={post.title} />
          <GridListTileBar
            title={post.title}
            subtitle={<span>Lorem Ipsum is simply dummy text </span>}
            actionIcon={
              <LastNews.IconButton>
                <InfoIcon />
              </LastNews.IconButton>
            }
          />
        </GridListTile>
      ))}
    </LastNews.GridList>
    <CustomButton text="Read more" />
  </LastNews.Wrapper>
);

LastNews.Wrapper = styled.div`
  display         : 'flex';
  flexWrap        : 'wrap';
  justifyContent  : 'space-around';
  overflow        : 'hidden';
  backgroundColor : theme.palette.background.paper;
  padding         : 2%;
  position        : relative;
`;

LastNews.Heading = styled.h1`
  color       : #565656;
  font-family : 'Roboto', sans-serif;
  font-size   : 35px;
`;

LastNews.SubHeading = styled.p`
  color       : #565656;
  font-family : 'Roboto', sans-serif;
  font-size   : 20px;
`;

LastNews.GridList = styled(GridList)`
  width  : 500;
  height : 450;
`;

LastNews.IconButton = styled(IconButton)`
  color : #939393 !important;
`;

export default LastNews;
