import React from 'react'
import { Text, TextInput, StyleSheet } from 'react-native'
import Header from '../../components/Header'
import Button from '../../components/Button'

const styles = StyleSheet.create({
    input: {
        flex: 1,
        paddingHorizontal: 5,
        paddingVertical: 15
    }
})

const SearchHeader = ({ onChange, value, onSubmit }) => (
    <Header>
        <TextInput
            style={styles.input}
            onChangeText={onChange}
            placeholder="Search"
            value={value}
        />
        <Button onPress={onSubmit}>
            <Text>Search</Text>
        </Button>
    </Header>
)

export default SearchHeader
