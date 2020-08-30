import React from 'react'
import { View, Text, StyleSheet, ScrollView,Dimensions } from 'react-native'
import {Anton_400Regular} from '@expo-google-fonts/anton'

import Shoes from '../Shoes/Index'

export default function Footer() {
    return (
        <View>
        <Text style={styles.title}>Você também pode gostar:</Text>
            <ScrollView style={styles.mainContainer} horizontal showsHorizontalScrollIndicator={false}>
            <View style={{marginHorizontal: 10, marginVertical: 10}}>
                <Shoes img={require('../../assets/img/1.png')} description='Nike Max Air 2' price=' R$ 199,90'/>
            </View>
                <View style={{marginHorizontal: 10, marginVertical: 10}}>
                <Shoes img={require('../../assets/img/3.png')} description='Adidas Super Star' price=' R$ 239,90'/>
                </View>
                <View style={{marginHorizontal: 10, marginVertical: 10, marginRight: 24}}>
                <Shoes img={require('../../assets/img/5.png')} description='Adidas Gray Star' price=' R$ 179,90'/>
                </View>
        </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer:{
        width: '95%',
        height: Dimensions.get('window').height /3,
        backgroundColor: '#ddd',
        marginVertical: 10,
        marginHorizontal: 10,
        marginRight: 24
    },
    title:{
        fontSize: 24,
        fontFamily: 'Anton_400Regular',
        marginLeft: 10
    }
})
