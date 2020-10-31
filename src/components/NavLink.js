import React from 'react'
import { Text } from 'react-native-elements'
import { TouchableOpacity, StyleSheet } from 'react-native'

const NavLink = ({linkText, routeFunction}) => {
    return (
        <TouchableOpacity onPress={() => {routeFunction()}}>
            <Text style={styles.linkStyle}>{linkText}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    linkStyle: {
        color: '#ff6666', 
        fontSize: 15,
        marginHorizontal: 10,
        marginVertical: 5
    }
})

export default NavLink