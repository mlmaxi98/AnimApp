import React from 'react'
import { Dimensions, StyleSheet, View } from 'react-native'
import { SliderBox } from "react-native-image-slider-box";

const dimentions = Dimensions.get('screen')

const SliderHome = ({ images }) => {
    return (
        <View style={styles.container}>
            <SliderBox
                images={images}
                resizeMode={'cover'}
                autoplay
                circleLoop
                sliderBoxHeight={dimentions.height / 1.5}
                dotStyle={styles.sliderStyle}
                ImageComponentStyle={{ borderBottomRightRadius: 25, borderBottomLeftRadius: 25 }}
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
    sliderStyle: {
        backgroundColor: 'transparent',
        width: 0,
    }
})
export default SliderHome