import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, Alert} from 'react-native'

import Dot from '../../components/Dot/Index'
import BoxNumber from '../../components/BoxNumber/Index'
import Button from '../../components/Button/Index'
import Footer from '../../components/Footer/Index'



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
                <Text style={styles.title}>R$ 289,90</Text>
            </View>
            <View>
                <Text style={[styles.title, {color: '#888'}]}>Nike DownShifter 10</Text>
                <View style={styles.optionsColorContainer}>
                    <Dot color='#2379f4'/>
                    <Dot color='#fb6e53'/>
                    <Dot color='#ddd'/>
                    <Dot color='#111'/>
                </View>
                <View style={styles.optionsNumbersContainer}>
                    <ScrollView horizontal={true} style={{margin: 10, marginLeft: 5}} showsHorizontalScrollIndicator={false}>
                        <BoxNumber shoesNumber={37} />
                        <BoxNumber shoesNumber={38} />
                        <BoxNumber shoesNumber={39} />
                        <BoxNumber shoesNumber={40} />
                        <BoxNumber shoesNumber={41} />
                        <BoxNumber shoesNumber={42} />
                        <BoxNumber shoesNumber={43} />
                    </ScrollView> 
                </View>
                <View style={styles.infoContainer}>
                    <Text style={styles.title}>Descrição:</Text>
                    <Text style={styles.commonText}>O Tênis Nike Masculino Downshifter 10 traz amortecimento e suporte atualizados, para garantir uma corrida estável e confortável.</Text>
                    <Text style={[styles.commonText, {fontWeight: 'bold', fontSize: 20}]}>Categoria:</Text>
                    <Text style={styles.commonText}>Amortecimento</Text>
                    <Text style={[styles.commonText, {fontWeight: 'bold', fontSize: 20}]}>Material:</Text>
                    <Text style={styles.commonText}>Mash</Text>
                </View>
            </View>
                <View>
                    <Button label='Comprar'/>
                </View>
                <View style={styles.line}> 
                </View>
                <Footer/>
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
    infoContainer:{
        width: '100%',
    },
    title:{
        fontFamily: 'Anton_400Regular',
        paddingHorizontal: '2%',
        fontSize: 22
    },
    commonText:{
        fontSize: 16,
        color: '#333',
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
