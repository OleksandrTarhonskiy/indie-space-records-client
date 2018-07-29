import React        from 'react';
import styled       from 'styled-components';
import GridList     from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import List         from '@material-ui/core/List';
import ListItem     from '@material-ui/core/ListItem';

import { BANDS }     from '../fake-db';
import ArtistFilters from './artist_filters_panel';

const Artists = () => (
  <Artists.SectionWrapper>
    <ArtistFilters />
    <Artists.GridList cellHeight={400} cols={3} spacing={0}>
      { BANDS.map(band => (
        <GridListTile key={band.id} cols={band.cols || 1}>
          <img src={band.image.url} alt="Some description here" />
          <Artists.Name>
            <p>{band.name}</p>
          </Artists.Name>
          { band.tags.map(tag => (
            <Artists.Tags key={tag}>
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
  </Artists.SectionWrapper>
);

Artists.SectionWrapper = styled.div`
  width    : 100%;
  margin   : 0;
  padding  : 0;
  position : rekative;
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
