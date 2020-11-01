import React from 'react'
import { View, ScrollView, SafeAreaView, Text, Image, FlatList, StyleSheet } from 'react-native'
import Title from '../components/Title'


const ProfileScreen = () => {

    const images = [require('../../assets/OmarElmoghazy(1).jpg'),
    require('../../assets/OmarElmoghazy(2).jpg'),
    require('../../assets/OmarElmoghazy(3).jpg'),
    require('../../assets/OmarElmoghazy(1)_copy.jpg'),
    require('../../assets/OmarElmoghazy(2)_copy.jpg'),
    require('../../assets/OmarElmoghazy(3)_copy.jpg'),
    require('../../assets/OmarElmoghazy(1)_copy_copy.jpg'),
    require('../../assets/OmarElmoghazy(2)_copy_copy.jpg'),
    require('../../assets/OmarElmoghazy(3)_copy_copy.jpg')]

    return (
        <>
            <Title pageName="Profile" />
            <ScrollView>
                <View style={{ marginVertical: 20, marginHorizontal: 25 }}>
                    <Image style={styles.profileImageStyle} source={require('../../assets/OmarElmoghazy.jpg')} />
                    <Text style={styles.nameStyle}>Omar Elmoghazy</Text>
                    <Text style={styles.emailStyle}>omarelmoghazy1@gmail.com</Text>
                    <Text style={styles.ageStyle}>23 Years Old</Text>
                </View>
                <View style={styles.lineStyle} />
                <FlatList
                    numColumns={3}
                    data={images}
                    keyExtractor={image => image}
                    renderItem={({ item }) => {
                        return (
                            // {console.log(item.toString())}
                            <Image
                                style={styles.postImageStyle}
                                source={item}
                            />
                        )
                    }}
                />
            </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    lineStyle: {
        borderBottomWidth: 1,
        borderBottomColor: 'grey'
    },
    profileImageStyle: {
        width: 150,
        height: 150,
    },
    postImageStyle: {
        width: '33.3%',
        height: 200,
        borderColor: 'grey',
        borderWidth: 0.3
    },
    nameStyle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 15
    },
    emailStyle: {
        fontSize: 15,
        color: 'grey',
        fontWeight: 'bold'
    },
    ageStyle: {
        fontSize: 17,
        color: 'grey',
        marginTop: 5
    }
})

export default ProfileScreen