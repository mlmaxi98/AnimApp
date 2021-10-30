import React, { useEffect } from 'react'
import { ActivityIndicator, TouchableOpacity, StyleSheet, Text } from 'react-native'
import { Image } from 'react-native-elements';

const Details = (props) => {
    useEffect(() => {
        console.log(props.route.params.item.coverImage.large)
    }, [props]);
    return (
        <>
            <Text>
            {props.route.params.item.coverImage.large}
            </Text>
        </>
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

export default Details