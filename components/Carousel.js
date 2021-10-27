import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import CardAnime from './CardAnime'
const Carousel = ({ list, title, navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{title}</Text>
            <FlatList
                contentContainerStyle={{ alignItems: 'center' }}
                data={list}
                horizontal
                keyExtractor={({ id }) => id.toString()}
                renderItem={({ item }) => (
                    <CardAnime
                        title={item.title.romaji}
                        image={item.coverImage.large}
                        navigation={navigation}
                    />
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        //alignItems: 'center',
        marginTop: 25,
    },
    text: {
        paddingBottom: 20,
        paddingLeft: 5,
        fontWeight: 'bold',
        fontSize: 20,
    }
})
export default Carousel
