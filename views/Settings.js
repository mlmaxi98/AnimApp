import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { useTheme } from '@react-navigation/native';

// Black background and white text in light theme, inverted on dark theme
const Settings = () => {
    const { colors } = useTheme();

    return (
        <View style={{ flex: 1, justifyContent: 'center' }}>

            <TouchableOpacity style={{ backgroundColor: colors.card }}>
                <Text style={{ color: colors.text }}>Button!</Text>
            </TouchableOpacity>
        </View >
    );
}

export default Settings