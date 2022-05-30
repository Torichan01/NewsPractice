import React from 'react'
import { StyleSheet, SafeAreaView, Text } from 'react-native'
import { useSelector } from 'react-redux'
import ListItem from '../components/ListItem'
export default ClipScreen = ({ navigation }) => {
    const user = useSelector((state) => state.user)
    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={user.clips}
                renderItem={({ item }) => (
                    <ListItem
                        imageUrl={item.urlToImage}
                        title={item.title}
                        author={item.author}
                        onPress={() =>
                            navigation.navigate('Article', { article: item })
                        }
                    />
                )}
                keyExtractor={(item, index) => index.toString()}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
})
