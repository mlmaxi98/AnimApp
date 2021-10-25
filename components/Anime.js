import React from 'react'
import { View, Text } from 'react-native'
import { Image } from 'react-native-elements';

const Anime = ({ image, title }) => {
    return (
        <View>
            <Image
                source={{ uri: image }}
                style={{ width: 200, height: 200 }}
            />
            <Text>{title}</Text>
        </View>
    )
}

export default Anime