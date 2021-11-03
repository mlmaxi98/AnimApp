import React, { useEffect, useState } from 'react'
import { ActivityIndicator, Dimensions, StyleSheet, Text, View, ScrollView } from 'react-native'
import { Image } from 'react-native-elements';
import { queryId } from '../graphql/Queries'
import { useQuery } from 'react-apollo';

const dimentions = Dimensions.get('screen')
const Details = ({ route }) => {

    const idAnime = route.params.id
    const { data, loading: load, error } = useQuery(queryId, { variables: { id: idAnime } })
    const [anime, setAnime] = useState({})
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        if (data && !error && !load) {
            setAnime({ ...data.Media })
            setLoading(true)
        }

    }, [data]);

    if (!loading) {

        return (
            <View style={styles.container}>
                <ActivityIndicator size="large" color="#00ff00" />
            </View>
        )
    }
    if (error) {
        return (
            <View style={styles.container}>
                <Text>Ocurrió un error</Text>
            </View>
        )
    }
    return (
        <ScrollView>
            <View style={styles.container}>
                <Image
                    source={{ uri: anime.coverImage.extraLarge }}
                    style={styles.image}
                    PlaceholderContent={<ActivityIndicator />}
                    resizeMode="cover"
                />
                <Text style={{ textAlign: "center" }}>
                    {anime.title.romaji}
                </Text>
                <Text style={{ textAlign: "center" }}>
                    {anime.title.native}
                </Text>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    image: {
        height: dimentions.height / 2,
        borderRadius: 20,
    }
})

export default Details