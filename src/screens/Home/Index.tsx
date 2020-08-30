import React from 'react'
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native'
import {MaterialIcons} from '@expo/vector-icons'


import Shoes from '../../components/Shoes/Index'


export default function Home() {



    return (
        <View style={styles.mainContainer}>
            <View style={styles.header}>
                <Image source={require('../../assets/img/banner.png')} style={styles.image}/>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>Tênis</Text>
                    <Text style={styles.text}> | </Text>
                    <Text style={[styles.text, {color: '#999'}]}>Masculino</Text>
                    <TouchableOpacity style={{position: 'absolute', right:8 , alignSelf: 'center'}}>
                        <MaterialIcons
                            name='filter-list'
                            size={24}
                            color='#000'
                        />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.line}/>
                <ScrollView>
                    <Text style={styles.text}>Lançamentos</Text>
                    <View style={styles.porductContainer}>
                        <Shoes img={require('../../assets/img/1.png')} description='Nike Max Air 2' price='199,99'/>
                        <Shoes img={require('../../assets/img/2.png')} description='Nike DownShifter 10' price='299,99'/>
                </View>
                    <View style={styles.porductContainer}>
                        <Shoes img={require('../../assets/img/3.png')} description='Adias SuperStar' price='239,99'/>
                        <Shoes img={require('../../assets/img/4.png')} description='Adidas Leaf' price='399,99'/>
                </View>
                    <View style={styles.porductContainer}>
                        <Shoes img={require('../../assets/img/5.png')} description='Adidas Gray Star' price='179,99'/>
                        <Shoes img={require('../../assets/img/6.png')} description='Adidas Gradient 3' price='299,99'/>
                    </View>
                </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer:{
        flex: 1,
        width: '100%',
        backgroundColor: '#fff',
    },
    textContainer:{
        flexDirection: 'row',
        marginHorizontal: '5%',
        marginVertical: '5%'
    },
    porductContainer:{
        marginLeft: 10,
        flexDirection: 'row',
        justifyContent:'space-around', 
        width: '100%'
    },
    header:{
        marginBottom: 8
    },
    text:{
        fontFamily: 'Anton_400Regular',
        fontSize: 22,
        marginLeft: 10
    },
    image:{
        width: '100%'
    },
    line:{
        borderBottomColor: '#d8d8d8',
        borderBottomWidth: 2,
    }
    
})
