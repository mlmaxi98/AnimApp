import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import CardAnime from './CardAnime'
const Carousel = ({ list, title, navigation, vertical }) => {
    const handlePress = (item) => {
        console.log('handle', item)
        navigation.navigate('Details', { item })
    }
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{title}</Text>
            <FlatList
                contentContainerStyle={{ alignItems: 'center' }}
                data={list}
                horizontal={!vertical ? true : false}
                keyExtractor={({ id }) => id.toString()}
                renderItem={({ item }) => (
                    <CardAnime
                        item={item}
                        image={item.coverImage.large}
                        title={item.title.romaji}
                        navigation={navigation}
                        onPress={() => handlePress(item)}
                    />
                )}
                numColumns={vertical ? 3 : null}
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
        flexWrap: 'nowrap'
    },
    text: {
        paddingBottom: 20,
        paddingLeft: 5,
        fontWeight: 'bold',
        fontSize: 20,
    }
})
export default Carousel
