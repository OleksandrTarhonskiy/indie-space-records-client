import React                  from 'react';
import PropTypes              from 'prop-types';
import styled                 from 'styled-components';
import breakpoint             from 'styled-components-breakpoint';
import moment                 from 'moment';
import Button                 from '@material-ui/core/Button';
import { graphql }            from 'react-apollo';
import {
  compose,
  withHandlers,
  withState,
}                             from 'recompose';
import InfiniteScroll         from 'react-infinite-scroller';
import CircularProgress       from '@material-ui/core/CircularProgress';

import { viewEventsQuery }    from '../../events/graphql/queries';
import withTheme              from '../HOCs/with_theme';

const AllEventsPage = ({
  theme: {
    style,
    fonts,
    sections,
  },
  data: {
    loading,
    events = [],
  },
  loadMore,
  hasMore,
}) => (
  <AllEventsPage.PageWrapper
    profileFonts={JSON.parse(fonts)}
    profileStyles={JSON.parse(style)}
    sectionStyles={JSON.parse(sections.find((element) => element.type === 'events').style)}
  >
    {
      loading ?
        <CircularProgress />
        :
        <InfiniteScroll
          pageStart={0}
          loadMore={loadMore}
          hasMore={hasMore}
          loader={<CircularProgress key={0} />}
          useWindow={true}
        >
          {
            events.map(e =>
              <AllEventsPage.EventsItem key={e.id}>
                <AllEventsPage.Cell
                  font={JSON.parse(fonts)}
                  styles={JSON.parse(style)}
                >
                  {moment(e.date).format('D MMM HH:mm')}
                </AllEventsPage.Cell>
                <AllEventsPage.Cell
                  font={JSON.parse(fonts)}
                  styles={JSON.parse(style)}
                >
                  {e.title}
                </AllEventsPage.Cell>
                <AllEventsPage.Cell
                  font={JSON.parse(fonts)}
                  styles={JSON.parse(style)}
                >
                  {e.address}
                </AllEventsPage.Cell>
                <AllEventsPage.Cell
                  font={JSON.parse(fonts)}
                  styles={JSON.parse(style)}
                >
                  {e.price}
                </AllEventsPage.Cell>
                <AllEventsPage.Button
                  font={JSON.parse(fonts)}
                  styles={JSON.parse(style)}
                >
              Tikets
                </AllEventsPage.Button>
              </AllEventsPage.EventsItem>
            )
          }
        </InfiniteScroll>
    }
  </AllEventsPage.PageWrapper>
);

AllEventsPage.PageWrapper = styled.div`
  background-color : ${props => props.sectionStyles.background};
  color            : ${props => props.sectionStyles.color};
  padding          : 5% 8%;
  font-family      : ${props => props.profileFonts.regularTextFont}, sans-serif;
  font-size        : ${props => props.profileStyles.RegularFontSize}px;
`;

AllEventsPage.EventsItem = styled.div`
  && {
    display        : flex;
    flex-direction : column;
    width          : 100%;

    ${breakpoint('md')`
      display        : flex;
      flex-direction : row;
    `}
  }
`;

AllEventsPage.Cell = styled.div`
  font-family : ${props => props.font.regularTextFont}, sans-serif;
  font-size   : ${props => props.styles.RegularFontSize}px;
  font-size   : 20px;
  width       : 220px;
  margin      : 2%;
`;

AllEventsPage.Button = styled(Button)`
  && {
    font-family      : ${props => props.font.linksFont}, sans-serif;
    background-color : ${props => props.styles.buttonsBackground};
    height           : 62px;
    color            : ${props => props.styles.buttonsColor};
    border           : ${props => props.styles.border}px solid;
    border-radius    : ${props => props.styles.borderRadius}px;
    margin           : 0 5%;
    padding          : 1% 5%;

    &:hover {
      color      : ${props => props.styles.LinksHover};
      background : transparent;
    }
  }
`;

AllEventsPage.propTypes = {
  theme    : PropTypes.object.isRequired,
  data     : PropTypes.object.isRequired,
  loadMore : PropTypes.func.isRequired,
  hasMore  : PropTypes.bool.isRequired,
};

const withRecompose = compose(
  withTheme,
  graphql(viewEventsQuery, {
    options: props => ({
      fetchPolicy: 'network-only',
      variables: {
        profileId : props.id,
        offset    : 0,
      },
    }),
  }),
  withState('hasMore', 'setHasMore', true),
  withHandlers(
    {
      loadMore : ({ data, setHasMore }) => () => {
        data.fetchMore({
          variables : {
            offset : data.events.length,
          },

          updateQuery : (previousResult, { fetchMoreResult }) => {
            if (!fetchMoreResult) {
              return previousResult;
            }

            if (fetchMoreResult.events.length < 12) {
              setHasMore(false);
            }

            return {
              ...previousResult,
              events: [...previousResult.events, ...fetchMoreResult.events],
            };
          },
        });
      }
    },
  ),
);

export default withRecompose(AllEventsPage);
