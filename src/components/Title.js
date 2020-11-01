import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import * as RootNavigation from '../../navigationRef';



import { Feather } from '@expo/vector-icons';

const Title = ({ pageName }) => {
    return (
        <View style={styles.containerStyle}>
            <Text style={styles.textStyle}>{pageName}</Text>
            { pageName === 'Newsfeed' ? 
                <TouchableOpacity style={styles.buttonStyle} onPress={() => {RootNavigation.navigate("AddPost")}}>
                    <Feather 
                        name="camera"
                        size={24} 
                        color="black"    
                    />
                </TouchableOpacity>
             : null
            }
        </View>
    )
}

const styles = StyleSheet.create({
    containerStyle: {
        width: '100%',
        height: 80,
        borderBottomColor: 'grey',
        borderBottomWidth: 1.5,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    textStyle: {
        fontSize: 20,
        fontWeight: 'bold',
        position: 'relative',
        top: 40
        
        
    },
    buttonStyle: {
        position: 'relative',
        left: 150,
        top: 15
    }
})

export default Title