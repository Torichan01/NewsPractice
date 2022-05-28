import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import ListItem from './components/ListItem'

export default function App() {
    return (
        <View style={styles.container}>
            <ListItem />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0000',
        alignItems: 'center',
        justifyContent: 'center',
    },
    ItemContainer: {
        height: 100,
        width: '100%',
        borderColor: 'gray',
        borderWidth: 1,
        flexDirection: 'row',
    },
    leftContainer: {
        width: 100,
    },
    rightContainer: {
        flex: 1,
        flexDirection: 'column',
        padding: 10,
        justifyContent: 'space-between',
    },
    text: {
        fontSize: 16,
    },
    subText: {
        fontSize: 12,
        color: 'gray',
    },
})
