import React from 'react'
import { StyleSheet, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import { WebView } from 'react-native-webview'
import { useDispatch } from 'react-redux'
import { addClip, deleteClip } from './store/actions/user'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0000',
    },
})

export default ArticlesScreen = ({ route }) => {
    const { article } = route.params

    const dispatch = useDispatch()
    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity
                onPress={() => {
                    dispatch(addClip({ clip: article }))
                }}
            >
                <Text style={{ margin: 10, fontSize: 30 }}></Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => {
                    dispatch(deleteClip({ clip: article }))
                }}
            >
<<<<<<< HEAD
                <Text style={{ margin: 10, fontSize: 30 }}>DELETE_CLIP</Text>
=======
                <Text style={{ margin: 10, fontSize: 30 }}></Text>
>>>>>>> f1cbbcfa41a60afe9b9a0df5270875173d8286c7
            </TouchableOpacity>
            <WebView source={{ url: article.url }} />
        </SafeAreaView>
    )
}
