import React, { useEffect, useState } from 'react'
import { useQuery } from 'react-apollo';
import { Carousel, SliderHome } from '../components/';
import { ActivityIndicator, ScrollView, StyleSheet, View } from 'react-native';
import { queryHome } from '../graphql/Queries'
const Home = ({ navigation }) => {

    const { data, loading, error } = useQuery(queryHome)
    const [trending, setTrending] = useState([])
    //const [main, setMain] = useState([])
    const [mostPopularies, setMostPopularies] = useState([])
    const [top, setTop] = useState([])

    useEffect(() => {
        if (data && !loading && !error) {
            setTrending([...data.trending.media])
            setMostPopularies([...data.mostPopularities.media])
            setTop([...data.top.media])
        }
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
                <SliderHome images={trending.map(anime => anime.coverImage.extraLarge)} />
                <Carousel list={mostPopularies} title="Most popularities" navigation={navigation} />
                <Carousel list={top} title="Top 100" navigation={navigation} />
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