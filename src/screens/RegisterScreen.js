import React from 'react'
import { useDispatch } from 'react-redux'
import { registerStart } from '../redux/auth/authActions'
import { View, StyleSheet } from 'react-native'
import AuthForm from '../components/AuthForm'
import NavLink from '../components/NavLink'

const RegisterScreen = ({ navigation }) => {
    const dispatch = useDispatch()

    return (
        <View style={styles.containerStyle}>
            <AuthForm
                buttonTitle="Register"
                buttonFunction={(email, password) => {
                    console.log('Register', email,password)

                    dispatch(registerStart({email, password}))}}
            />
            <NavLink
                linkText="Already have an account? Login here"
                routeFunction={() => { navigation.navigate("Login") }}
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

export default RegisterScreen