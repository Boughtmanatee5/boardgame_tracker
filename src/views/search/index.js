import React, { PureComponent } from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native'
import SearchHeader from '../../partials/SearchHeader'
import ListItem from '../../components/ListItem'
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
        const { navigation } = this.props
        return (
            <View style={styles.container}>
                <SearchHeader
                    onChange={this.onChange}
                    onSubmit={this.onPress}
                    value={inputValue} 
                />
                <FlatList
                    data={result}
                    renderItem={({item}) => (
                        <ListItem onPress={() => navigation.navigate('GameDetail')} key={item.id}>
                            <Text>{item.name}</Text>
                        </ListItem>
                    )}
                />
            </View>
        )
    }
}

export default Search
