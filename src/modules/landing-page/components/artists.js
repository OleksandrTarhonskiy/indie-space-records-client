import React        from 'react';
import styled       from 'styled-components';
import GridList     from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import List         from '@material-ui/core/List';
import ListItem     from '@material-ui/core/ListItem';

import { BANDS } from '../fake-db'

const Artists = () => (
  <Artists.GridList cellHeight={400} cols={3}>
      { BANDS.map(band => (
        <GridListTile key={band.image.url} cols={band.cols || 1}>
          <img src={band.image.url} alt="Some description here" />
          <Artists.Name>
            <p>{band.name}</p>
          </Artists.Name>
          { band.tags.map(tag => (
              <Artists.Tags>
                <List>
                  <ListItem>
                    {tag}
                  </ListItem>
                </List>
              </Artists.Tags>
            ))
          }
        </GridListTile>
      ))}
    </Artists.GridList>
);

Artists.ArtistsWrapper = styled.div`
  display: flex;
`;

Artists.Name = styled.div`
  position    : absolute;
  bottom      : 8px;
  left        : 16px;
  font-family : 'Roboto', sans-serif;
  font-size   : 35px;
  color       : #fff;
`;

Artists.Tags = styled.div`
  position    : absolute;
  bottom      : 8px;
  left        : 50px;
  font-family : 'Roboto', sans-serif;
  font-size   : 16px;
  color       : #fff;
`;

Artists.Root = styled.div`
  display        : 'flex',
  flexWrap       : 'wrap',
  justifyContent : 'space-around',
  overflow       : 'hidden',
`;

Artists.GridList = styled(GridList)`
  width  : 500,
  height : 450,
`;

export default Artists;
