import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native'

import {Anton_400Regular} from '@expo-google-fonts/anton'

interface Button{
    label: string
}

const Button : React.FC<Button> = ({  
    label
})  => {
    return(
        <View>
            <TouchableOpacity style={styles.buttonContainer} activeOpacity={.6} onPress={() => Alert.alert('Parabéns!', 'Este item foi adicionado ao seu carrinho.')}>
                <Text style={styles.text}>Comprar</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonContainer:{
        width: '95%',
        height: 45,
        backgroundColor: '#333',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        padding: 5,
        marginBottom: '7%',
        marginTop: '5%',
        borderRadius: 2.5
    },
    text:{
        fontFamily: 'Anton_400Regular',
        fontSize: 22,
        letterSpacing: 1.1,
        color: '#fff'
    }
})

export default Button