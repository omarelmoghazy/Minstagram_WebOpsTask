import React from 'react'
import { View, ScrollView, Text, Image, StyleSheet } from 'react-native'
import { } from 'react-native-gesture-handler'

const Post = () => {
    return (
        <View style={styles.containerStyle}>
            <View style={styles.postHeaderStyle}>
                <Image style={styles.posterProfileImageStyle} source={require('../../assets/OmarElmoghazy.jpg')} />
                <Text style={styles.nameStyle}>Omar Elmoghazy</Text>
                <Text style={styles.dateStyle}> 4d</Text>
            </View>
            <Image style={styles.postStyle} source={require('../../assets/OmarElmoghazy.jpg')}/>
            <Text style={styles.likesStyle}>22 Likes</Text>
        </View>



    )
}

const styles = StyleSheet.create({
    containerStyle: {
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        paddingBottom: 5
    },
    posterProfileImageStyle: {
        width: 40,
        height: 40,
        borderRadius: 20
    },
    postHeaderStyle: {
        marginHorizontal: 15,
        marginVertical: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    nameStyle: {
        marginLeft: 10,
        fontSize: 15,
        fontWeight: 'bold'
    },
    dateStyle: {
        color: 'grey',
        marginLeft: 135
    },
    postStyle: {
        width: '100%',
        height: 350
    },
    likesStyle: {
        marginHorizontal: 20,
        marginVertical: 10,
        color: 'grey'
    }
})

export default Post
