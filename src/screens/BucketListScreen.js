import React from 'react'
import { View, TextInput, TouchableOpacity, FlatList, Text, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons';
import Title from '../components/Title'


const BucketListScreen = () => {

    const places = ["Cairo", "Giza", "Alexandria", "Luxor", "Paris", "Luxemborg", "Amsterdam", "Luzern", "Bratislava", "Bruges", "Brussels", "Stuttgart", "Darmstadt", "Heidelberg"]

    return (
        <View>
            <Title pageName="Bucketlist" />
            <View style={{ marginVertical: 20, marginHorizontal: 25 }}>
                <View style={styles.containerStyle}>
                    <TextInput style={styles.textInputStyle} placeholder="Place" />
                    <TouchableOpacity style={styles.buttonStyle}>
                        <Feather name="plus" size={24} color="grey" />
                    </TouchableOpacity>
                </View>
                <FlatList
                    scrollEnabled
                    data={places}
                    keyExtractor={place => place}
                    renderItem={({ item }) => {
                        return (
                            <View style={styles.placeContainerStyle}>
                                <Text style={styles.placeStyle}>{item}</Text>
                            </View>
                        )
                    }}
                    style={{ marginTop: 40, marginBottom: 230 }}
                />

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    containerStyle: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    textInputStyle: {
        backgroundColor: '#c4c4c4',
        paddingHorizontal: 10,
        height: 40,
        width: 250,
        marginRight: 10
    },
    buttonStyle: {
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'grey',
        width: 45,
        height: 38,
        alignItems: 'center',
        justifyContent: 'center'
    },
    placeContainerStyle: {
        height: 55,
        justifyContent: 'center',
        borderBottomColor: '#d7d7d7',
        borderBottomWidth: 1,

    },
    placeStyle: {
        fontSize: 20
    }
})

export default BucketListScreen