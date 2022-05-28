import React from 'react'
import {
    StyleSheet,
    Text,
    View,
    Image,
    ProgressViewIOSComponent,
} from 'react-native'

const ListItem = ({ imageUrl, title, author }) => {
    return (
        <View style={styles.ItemContainer}>
            <View style={styles.leftContainer}>
                {!!imageUrl && (
                    <Image
                        style={{ height: 100, width: 100 }}
                        source={{
                            uri: imageUrl,
                        }}
                    />
                )}
            </View>
            <View style={styles.rightContainer}>
                <Text numberOfLines={3} style={styles.text}>
                    {title}
                </Text>
                <Text style={styles.subText}>{author}</Text>
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