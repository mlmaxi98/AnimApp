import React, { useEffect, useState } from 'react'
import { View, Button, Text, ActivityIndicator, FlatList, StyleSheet, Dimensions } from 'react-native'
import { gql } from 'apollo-boost'
import { useQuery } from 'react-apollo';
import Anime from './Anime';
import { Image } from 'react-native-elements';
import { SliderBox } from "react-native-image-slider-box";
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

const dimentions = Dimensions.get('screen')
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
            <View style={{ flex: 1, justifyContent: 'center' }}>
                <ActivityIndicator size="large" color="#00ff00" />
            </View>
        )
    }
    return (
        <>
            <View style={styles.sliderContainer}>
                <SliderBox
                    images={animes.map(anime => anime.coverImage.extraLarge)}
                    autoplay={true}
                    circleLoop={true}
                    sliderBoxHeight={dimentions.height / 2}
                    dotStyle={styles.sliderStyle}
                />
            </View>
            <View style={styles.sliderCarousel}>
                <FlatList
                    contentContainerStyle={{ alignItems: 'center' }}
                    data={animes}
                    horizontal
                    keyExtractor={({ id }) => id.toString()}
                    renderItem={({ item }) => (
                        <Anime
                            title={item.title.romaji}
                            image={item.coverImage.large}
                        />
                    )}
                />
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    sliderContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    sliderStyle: {

    },
    sliderCarousel: {

    }
})

export default Home