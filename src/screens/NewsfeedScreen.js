import React from 'react'
import { View, ScrollView, Text, StyleSheet } from 'react-native'
import Title from '../components/Title'
import Post from '../components/Post'

const NewsfeedScreen = () => {
    return (
        <View style={{flex: 1}}>
            <Title pageName="Newsfeed" />
            <ScrollView>
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({

})

export default NewsfeedScreen