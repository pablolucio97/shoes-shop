import React from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'

interface Dot {
    color: string
}

const Dot: React.FC<Dot> = ({
    color
}) => {
    return (
        <View style={[styles.mainContainer, {backgroundColor: color}]}>
        </View>
    )
}


const styles = StyleSheet.create({
    mainContainer:{
        width: Dimensions.get('window').width * 0.050,
        height: Dimensions.get('window').width * 0.050 ,
        backgroundColor: '#55ff',
        borderRadius: Dimensions.get('window').width * 0.025,
        marginHorizontal: '2.5%',
        elevation: 5
    }
})

export default Dot