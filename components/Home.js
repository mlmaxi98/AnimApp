import React, { useEffect, useState } from 'react'
import { View, Button, Text, ActivityIndicator, FlatList } from 'react-native'
import { gql } from 'apollo-boost'
import { useQuery } from 'react-apollo';
import Anime from './Anime';
import { Image } from 'react-native-elements';


const Home = ({ navigation }) => {
    let query = gql`
    {
        Page(page: 1, perPage: 10) {
          media(type: ANIME) {
            id
            title {
                romaji
            }
            coverImage {
              large
              color
            }
          }
        }
      }`
    let { data, loading, error } = useQuery(query)
    const [animes, setAnimes] = useState([])

    useEffect(() => {
        if (data && !loading && !error) setAnimes([...data.Page.media])
    }, [data])

    if (loading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center' }}>
                <ActivityIndicator size="large" color="#00ff00" />
            </View>
        )
    }
    return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
            <FlatList
                contentContainerStyle={{ alignItems: 'center' }}
                data={animes}
                keyExtractor={({ id }) => id.toString()}
                renderItem={({ item }) => (
                    <Anime
                        title={item.title.romaji}
                        image={item.coverImage.large}
                    />
                )}
            />
        </View>
    )
}

export default Home