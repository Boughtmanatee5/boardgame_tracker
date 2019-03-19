import React from 'react'
import { StyleSheet, View } from 'react-native'

const styles = StyleSheet.create({
    listItem: {
        paddingHorizontal: 10,
        paddingVertical: 15,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderColor: '#000'
    }
})

const ListItem = ({ children, style, ...props }) => (
    <View style={[styles.listItem, style]} {...props}>
        {children}
    </View>
)

export default ListItem
