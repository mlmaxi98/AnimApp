import React from 'react'
import { ActivityIndicator, TouchableOpacity, StyleSheet } from 'react-native'
import { Image } from 'react-native-elements';

const Anime = ({ image }) => {
    return (
        <TouchableOpacity style={styles.container}>
            <Image
                source={{ uri: image }}
                style={styles.image}
                PlaceholderContent={<ActivityIndicator />}
                resizeMode="cover"
            />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 5,
        position: 'relative',
    },
    image: {
        height: 200,
        width: 120,
        borderRadius: 20,
    }
})

export default Anime