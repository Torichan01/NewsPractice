import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

const ListItem = () => {
    return (
        <View style={styles.ItemContainer}>
            <View style={styles.leftContainer}>
                <Image
                    style={{ height: 100, width: 100 }}
                    source={{
                        uri: 'https://picsum.photos/200/300',
                    }}
                />
            </View>
            <View style={styles.rightContainer}>
                <Text numberOfLines={3} style={styles.text}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.\Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit, sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua.
                </Text>
                <Text style={styles.subText}>Compornent</Text>
            </View>
        </View>
    )
}

export default ListItem

const styles = StyleSheet.create({
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
