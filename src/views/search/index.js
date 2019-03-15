import React, { PureComponent } from 'react';
import { StyleSheet, View, TextInput, Button, Text, FlatList } from 'react-native'
import Header from '../../components/Header'
import BoardGameGeekService from '../../services/BoardGameGeekService'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF'
    }
})

class Search extends PureComponent {

    constructor(props) {
        super(props)

        this.state = {
            result: [],
            inputValue: ''
        }
    }

    search = async () => {
        const value = this.state.inputValue
        
        try {
           const result = await BoardGameGeekService.search(value)
           this.setState({ result })
        } catch(e) {
            console.error(e)
        }
    }

    onPress = () => {
        this.search()
    }

    onChange = (value) => {
        this.setState({ inputValue: value })
    }

    render() {
        const { result, inputValue } = this.state

        return (
            <View style={styles.container}>
                <Header>
                    <TextInput
                        onChangeText={this.onChange}
                        placeholder="Search"
                        value={inputValue}
                    />
                    <Button onPress={this.onPress} title="search"/>
                </Header>
                <FlatList
                    data={result}
                    renderItem={({item}) => (
                        <Text>{item.name}</Text>
                    )}
                />
            </View>
        )
    }
}

export default Search
