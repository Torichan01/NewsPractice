import React from 'react'
import { StyleSheet, Text, SafeAreaView } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0000',
    },
})

export default ArticlesScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Text>this us Articles Screen</Text>
        </SafeAreaView>
    )
}
