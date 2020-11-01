import React, {useState} from 'react'
import { View, ScrollView, FlatList, Image, Text, StyleSheet } from 'react-native'
import { Button } from 'react-native-elements'
import DropDownPicker from 'react-native-dropdown-picker';

const AddPostScreen = () => {
    const [placeholder, setPlaceholder] = useState('choose a place')

    const images = [{id: "1", image: require('../../assets/OmarElmoghazy(1).jpg')},
    {id: "2", image: require('../../assets/OmarElmoghazy(2).jpg')},
    {id: "3", image: require('../../assets/OmarElmoghazy(3).jpg')},
    {id: "4", image: require('../../assets/OmarElmoghazy(1)_copy.jpg')},
    {id: "5", image: require('../../assets/OmarElmoghazy(2)_copy.jpg')},
    {id: "6", image: require('../../assets/OmarElmoghazy(3)_copy.jpg')},
    {id: "7", image: require('../../assets/OmarElmoghazy(1)_copy_copy.jpg')},
    {id: "8", image: require('../../assets/OmarElmoghazy(2)_copy_copy.jpg')},
    {id: "9", image: require('../../assets/OmarElmoghazy(3)_copy_copy.jpg')}]

    const places = ["Cairo", "Giza", "Alexandria", "Luxor", "Paris", "Luxemborg", "Amsterdam", "Luzern", "Bratislava", "Bruges", "Brussels", "Stuttgart", "Darmstadt", "Heidelberg"]



    return (
        <View style={{ marginHorizontal: 30, marginVertical: 30 }}>
            <ScrollView>
                <FlatList
                    horizontal
                    data={images}
                    keyExtractor={image => image.id}
                    renderItem={({ item }) => {
                        return (
                            <Image
                                style={styles.postImageStyle}
                                source={item.image}
                            />
                        )
                    }}
                />
            </ScrollView>
            <DropDownPicker
                items={places}
                placeholder={placeholder}
                defaultIndex={0}
                containerStyle={styles.pickerStyle}
                onChangeItem={item => setPlaceholder(item)}
            />
            <Button
                title="Add"
                buttonStyle={styles.buttonStyle}
            />

        </View>
    )
}

const styles = StyleSheet.create({
    postImageStyle: {
        width: 80,
        height: 200,
        borderColor: 'grey',
        marginLeft: 10

    },
    buttonStyle: {
        backgroundColor: "#ffcc00",
        width: 150,
        alignSelf: 'center',
        marginTop: 30
    },
    pickerStyle: {
        height: 40,
        marginTop: 30
    }
})

export default AddPostScreen