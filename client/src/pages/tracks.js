import React from 'react';
import { Layout } from '../components';
import {gql} from '@apollo/client';

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
  return <Layout grid> </Layout>;
};

export default Tracks;
