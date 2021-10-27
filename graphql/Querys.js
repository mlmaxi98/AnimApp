import { gql } from 'apollo-boost'
import { useQuery } from 'react-apollo';

const queryHome = gql`
    {
        Page(page: 1, perPage: 10) {
            media(type: ANIME, seasonYear:2019) {
                id
                coverImage {
                    extraLarge
                    large
                }
                title {
                    romaji
                }
            }
          }
      }`