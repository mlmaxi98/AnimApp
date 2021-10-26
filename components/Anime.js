import React from 'react'
import { View, Text, ActivityIndicator } from 'react-native'
import { Image } from 'react-native-elements';

const Anime = ({ image, title }) => {
    return (
        <View>
            <Image
                source={{ uri: image }}
                style={{ width: 100, height: 100, borderRadius: 10, margin:10 }}
                PlaceholderContent={<ActivityIndicator />}
            />
        </View>
    )
}

export default Anime