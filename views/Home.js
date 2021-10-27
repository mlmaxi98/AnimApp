import React, { useEffect, useState } from 'react'
import { gql } from 'apollo-boost'
import { useQuery } from 'react-apollo';
import { Carousel, SliderHome } from '../components/';
import { ActivityIndicator, ScrollView, StyleSheet, View } from 'react-native';
/* Page(page: 1, perPage: 50) {
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
        } */

const Home = ({ navigation }) => {
    let query = gql`
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
    let { data, loading, error } = useQuery(query)
    const [animes, setAnimes] = useState([])

    useEffect(() => {
        if (data && !loading && !error) setAnimes([...data.Page.media])
    }, [data])

    if (loading) {
        return (
            <View style={styles.sliderContainer}>
                <ActivityIndicator size="large" color="#00ff00" />
            </View>
        )
    }
    return (
        <ScrollView>
            <View style={styles.sliderContainer}>
                <SliderHome images={animes.map(anime => anime.coverImage.extraLarge)} />
                <Carousel list={animes} title="Most popularities" navigation={navigation} />
                <Carousel list={animes} />
                <Carousel list={animes} />
                <Carousel list={animes} />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    sliderContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})

export default Home