import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView} from 'react-native'



import Dot from '../../components/Dot/Index'
import BoxNumber from '../../components/BoxNumber/Index'



export default function Details({navigation}) {
    navigation.setOptions({
        headerTitle: 'Nike Max Air 2',
    })
    return (
        <ScrollView style={styles.mainContainer}>
            <View >
            <Image
            source={require('../../assets/img/details.png')}
            resizeMode= 'cover'
            style={styles.image}
            />
            <View>
                <Text style={styles.text}>R$ 289,99</Text>
            </View>
            <View>
                <Text style={[styles.text, {color: '#888'}]}>Nike DownShifter 10</Text>
                <View style={styles.optionsColorContainer}>
                    <Dot color='#2379f4'/>
                    <Dot color='#fb6e53'/>
                    <Dot color='#ddd'/>
                    <Dot color='#111'/>
                </View>
                <View style={styles.optionsNumbersContainer}>
                    <ScrollView horizontal={true} style={{margin: 10, marginLeft: 5}} showsHorizontalScrollIndicator={false}>
                        <BoxNumber shoesNumber={37} available={true} style={{}}/>
                        <BoxNumber shoesNumber={38} available={true}/>
                        <BoxNumber shoesNumber={39} available={false}/>
                        <BoxNumber shoesNumber={40} available={true}/>
                        <BoxNumber shoesNumber={41} available={false}/>
                        <BoxNumber shoesNumber={42} available={true}/>
                        <BoxNumber shoesNumber={43} available={true}/>
                    </ScrollView> 
                </View>
            </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    mainContainer:{
        flex: 1,
        width: '100%',
        backgroundColor: '#fff'
    },
    optionsColorContainer:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: 130,
        marginVertical: 10
    },
    optionsNumbersContainer:{
        flexDirection: 'row',
        width: '100%'

    },
    text:{
        fontFamily: 'Anton_400Regular',
        paddingHorizontal: '2%',
        fontSize: 22
    },
    image:{
        width: '100%'
    }

})
