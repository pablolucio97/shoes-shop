import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

interface BoxNumber {
    shoesNumber: number,
}

 const BoxNumber: React.FC<BoxNumber> = ({
    shoesNumber
 })  => {
    return (
        <View style={styles.mainContainer} >
            <TouchableOpacity activeOpacity={.4}>
                <Text style={styles.text}>{shoesNumber}</Text>
            </TouchableOpacity>
        </View>
    )
 }
export default BoxNumber

const styles = StyleSheet.create({

mainContainer:{
    width: 100,
    height: 40,
    backgroundColor: '#333',
    padding: 5,
    margin: 5,
    marginBottom: 20
},
text:{
    color: '#fff',
    fontSize: 24,
    alignSelf: 'center',

}

})


