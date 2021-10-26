import * as React from 'react'
import { View, Button, Text, Image } from 'react-native'
import { useTheme } from '@react-navigation/native';
const Search = ({ navigation }) => {
    const { colors } = useTheme();
    return (

        <View style={{ flex: 1, justifyContent: 'center' }}>
            <Text>Search !!!!!!!!</Text>
            <Button
                title="Go to Details"
                onPress={() => navigation.navigate('Home')}
                color={colors.text}
            />
        </View>

    )
}
export default Search
