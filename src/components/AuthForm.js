import React, { useState } from 'react'
import { Input, Text, Button } from 'react-native-elements'
import { View, Image, StyleSheet } from 'react-native'
import { color } from 'react-native-reanimated'


const AuthForm = ({ buttonTitle, buttonFunction }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    return (
        <View style={{ margin: 10 }}>
            {/* <Icon 
                type="feather"
                name="instagram"
                size={150}
                style={{ marginBottom: 50}}
            /> */}
            <Image
                source={require('../../assets/Minstagram-icon.png')}
                style={styles.imageStyle}
            />
            <Input
                value={email}
                onChangeText={(newEmail) => { setEmail(newEmail) }}
                placeholder="Email"
                leftIcon={{ type: 'feather', name: 'mail', color: 'grey' }}
                autoCorrect={false}
                autoCapitalize='none'
            />
            <Input
                value={password}
                onChangeText={(newPass) => { setPassword(newPass) }}
                placeholder="Password"
                leftIcon={{ type: 'feather', name: 'lock', color: 'grey' }}
                secureTextEntry
                autoCorrect={false}
            />
            <Button
                title={buttonTitle}
                buttonStyle= {{backgroundColor: '#ff6666'}}
                onPress={() => { 
                    buttonFunction(email, password 
                    )
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    imageStyle: {
        width: 200, height: 200, alignSelf: 'center', marginBottom: 40
    }
})

export default AuthForm