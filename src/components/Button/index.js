import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'

const styles = StyleSheet.create({
    button: {
        paddingHorizontal: 10,
        paddingVertical: 15
    }
})
const Button = ({ children, onPress, style }) => (
    <TouchableOpacity
        onPress={onPress}
    >
        <View style={style ? {...style, ...styles.button} : styles.button}>
            {children}
        </View>
    </TouchableOpacity>
)

export default Button
