import React from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import CardAnime from './CardAnime'
const Carousel = ({ list }) => {
    return (
        <View style={styles.container}>
            <FlatList
                contentContainerStyle={{ alignItems: 'center' }}
                data={list}
                horizontal
                keyExtractor={({ id }) => id.toString()}
                renderItem={({ item }) => (
                    <CardAnime
                        title={item.title.romaji}
                        image={item.coverImage.large}
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
        alignItems: 'center',
    },
})
export default Carousel
