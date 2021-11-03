import { gql } from 'apollo-boost'

export const queryHome = gql`
    query {
        trending: Page(page: 1, perPage: 10) {
                    media(type:ANIME, sort:[TRENDING_DESC]) {
                        id
                        coverImage {
                            extraLarge
                        }
                        title {
                            romaji
                        }
                    }
        }

        mostPopularities: Page(page: 1, perPage: 10) {
                    media(type:ANIME, sort:[POPULARITY_DESC]) {
                        id
                        coverImage {
                            large
                        }
                        title {
                            romaji
                        }
                    }
        }

        top: Page(page: 1, perPage: 100) {
                    media(type:ANIME, sort:[SCORE_DESC]) {
                        id
                        coverImage {
                            large
                        }
                        title {
                            romaji
                        }
                    }
        }
    }`
export const queryId = gql`
    query Id($id: Int) {
        Media(type: ANIME, id: $id) {
            id
            title {
                romaji
                native
            }
            coverImage {
                extraLarge
            }

        }
    }`

//Querys con variables

/*
const GET_ANIMES = gql`
query Animes($type: MediaType ,$genre:String, $sort: [MediaSort], $perPage: Int) {
    Page(page: 1, perPage: $perPage) {
        media(type:$type, sort: $sort, genre: $genre) {
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

const { data: dataMain, loading: loadMain, error: errorMain } = useQuery(GET_ANIMES, { variables: { ...mainQuery } })
*/