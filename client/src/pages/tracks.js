import React from 'react';
import { Layout } from '../components';
import TrackCard from '../containers/track-card';
import {useQuery, gql} from '@apollo/client';

/**
 * Tracks Page is the Catstronauts home page.
 * We display a grid of tracks fetched with useQuery with the TRACKS query
 */

 const TRACKS = gql`
 # Query goes here
  query getTracks {
    tracksForHome {
      id
      title
      author {
        id
        photo
        name
      }
      thumbnail
      length
      modulesCount
    }
  }
`;

const Tracks = () => {
  const {loading, error, data} = useQuery(TRACKS);

  if (loading) return 'Loading...';

  if (error) return `Error! ${error.message}`;

  return (
    <Layout grid>
        {data?.tracksForHome?.map(track => (
        <TrackCard key={track.id} track={track} />
        ))}
    </Layout>)
};

export default Tracks;
