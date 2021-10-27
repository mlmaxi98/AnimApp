import React from 'react'
import { Dimensions, StyleSheet, View } from 'react-native'
import { SliderBox } from "react-native-image-slider-box";

const dimentions = Dimensions.get('screen')

const SliderHome = ({ images }) => {
    return (
        <View style={styles.container}>
            <SliderBox
                images={images}
                autoplay={true}
                circleLoop={true}
                sliderBoxHeight={dimentions.height / 2.5}
                dotStyle={styles.sliderStyle}
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
export default SliderHome