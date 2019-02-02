import React      from 'react';
import PropTypes  from 'prop-types';
import styled     from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import moment     from 'moment';
import Button     from '@material-ui/core/Button';
import { graphql }            from 'react-apollo';
import {
  compose,
  withHandlers,
  withState,
}                             from 'recompose';
import InfiniteScroll         from 'react-infinite-scroller';
import CircularProgress       from '@material-ui/core/CircularProgress';

import { viewEventsQuery } from '../../events/graphql/queries';

const FullEventsList = ({
  profile,
  data: {
    loading,
    events = [],
  },
  loadMore,
  hasMore,
}) => (
  <FullEventsList.PageWrapper
    profileFonts={JSON.parse(profile.theme.fonts)}
    profileStyles={JSON.parse(profile.theme.style)}
    sectionStyles={JSON.parse(profile.theme.sections.find((element) => element.type === 'events').style)}
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
              <FullEventsList.EventsItem key={e.id}>
                <FullEventsList.Cell
                  elementFont={JSON.parse(profile.theme.fonts)}
                  elementStyles={JSON.parse(profile.theme.style)}
                >
                  {moment(e.date).format('D MMM HH:mm')}
                </FullEventsList.Cell>
                <FullEventsList.Cell
                  elementFont={JSON.parse(profile.theme.fonts)}
                  elementStyles={JSON.parse(profile.theme.style)}
                >
                  {e.title}
                </FullEventsList.Cell>
                <FullEventsList.Cell
                  elementFont={JSON.parse(profile.theme.fonts)}
                  elementStyles={JSON.parse(profile.theme.style)}
                >
                  {e.address}
                </FullEventsList.Cell>
                <FullEventsList.Cell
                  elementFont={JSON.parse(profile.theme.fonts)}
                  elementStyles={JSON.parse(profile.theme.style)}
                >
                  {e.price}
                </FullEventsList.Cell>
                <FullEventsList.Button
                  elementFont={JSON.parse(profile.theme.fonts)}
                  elementStyles={JSON.parse(profile.theme.style)}
                >
              Tikets
                </FullEventsList.Button>
              </FullEventsList.EventsItem>
            )
          }
        </InfiniteScroll>
    }
  </FullEventsList.PageWrapper>
);

FullEventsList.PageWrapper = styled.div`
  background-color : ${props => props.sectionStyles.background};
  color            : ${props => props.sectionStyles.color};
  padding          : 5% 8%;
  font-family      : ${props => props.profileFonts.regularTextFont}, sans-serif;
  font-size        : ${props => props.profileStyles.RegularFontSize}px;
`;

FullEventsList.EventsItem = styled.div`
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

FullEventsList.Cell = styled.div`
  font-family : ${props => props.elementFont.regularTextFont}, sans-serif;
  font-size   : ${props => props.elementStyles.RegularFontSize}px;
  font-size   : 20px;
  width       : 220px;
  margin      : 2%;
`;

FullEventsList.Button = styled(Button)`
  && {
    font-family      : ${props => props.elementFont.linksFont}, sans-serif;
    background-color : ${props => props.elementStyles.buttonsBackground};
    height           : 62px;
    color            : ${props => props.elementStyles.buttonsColor};
    border           : ${props => props.elementStyles.border}px solid;
    border-radius    : ${props => props.elementStyles.borderRadius}px;
    margin           : 0 5%;
    padding          : 1% 5%;

    &:hover {
      color      : ${props => props.elementStyles.LinksHover};
      background : transparent;
    }
  }
`;

FullEventsList.propTypes = {
  profile  : PropTypes.object.isRequired,
  data     : PropTypes.object.isRequired,
  loadMore : PropTypes.func.isRequired,
  hasMore  : PropTypes.bool.isRequired,
};

const withRecompose = compose(
  graphql(viewEventsQuery, {
    options: props => ({
      fetchPolicy: 'network-only',
      variables: {
        profileId : props.profile.id,
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

            if (fetchMoreResult.events.length < 5) {
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

export default withRecompose(FullEventsList);
