import React            from 'react';
import styled           from 'styled-components';
import { gql, graphql } from 'react-apollo';

const Profile = ({ data: { allProfiles = []} }) => (
  <div>
    {allProfiles.map(profile =>
      <Profile.Body key={profile.id} a={JSON.parse(profile.theme.style)}>
        {profile.name}
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
      Ipsum has been the industrys standard dummy text ever since the 1500s,
      when an unknown printer took a galley of type and scrambled it to make a type
      specimen book. It has survived not only five centuries, but also the leap into
      electronic typesetting, remaining essentially unchanged. It was popularised in
      the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
      and more recently with desktop publishing software like Aldus PageMaker including
      versions of Lorem Ipsum.
      </Profile.Body>
    )}
  </div>
);

Profile.Body = styled.div`
  color            : ${props => props.a.color};
  background-color : ${props => props.a.backgroundColor};
`;

const allProfilesQuery = gql`
  {
    allProfiles{
      id
      name
      genres
      theme {
        style
      }
    }
  }
`;
export default graphql(allProfilesQuery)(Profile);
