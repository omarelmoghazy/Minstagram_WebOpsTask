import React from 'react'
import { View, StyleSheet } from 'react-native'

import { useDispatch } from 'react-redux'
import { logInStart } from '../redux/auth/authActions'

import AuthForm from '../components/AuthForm'
import NavLink from '../components/NavLink'

const LoginScreen = ({ navigation }) => {
    const dispatch = useDispatch()
    return (
        <View style={styles.containerStyle}>
            <AuthForm
                buttonTitle="Login"
                buttonFunction={(email, password) => {
                    console.log('Login', email,password)
                    dispatch(logInStart({email, password}))}}
            />
            <NavLink
                linkText="Don't have an account? Register here"
                routeFunction={() => { navigation.navigate("Register") }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 120
    }

})

export default LoginScreen