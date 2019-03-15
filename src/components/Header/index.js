import React from 'react';
import { View, StyleSheet } from 'react-native';
import { FullWidth } from '../../utilities/style'

const styles = StyleSheet.create({
    header: {
        width: FullWidth,
        height: 100,
        backgroundColor: '#79CCCD',
        flexDirection: 'row',
        alignItems: 'flex-end'
    }
})

const Header = ({ children }) => (
    <View style={styles.header}>
        {children}
    </View>
)

export default Header
