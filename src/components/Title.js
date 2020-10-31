import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Title = ({ pageName }) => {
    return (
        <View style={styles.containerStyle}>
            <Text style={styles.textStyle}>{pageName}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    containerStyle: {
        width: '100%',
        height: 80,
        borderBottomColor: 'grey',
        borderBottomWidth: 1.5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textStyle: {
        fontSize: 19,
        fontWeight: 'bold',
        marginTop: 25
    }
})

export default Title