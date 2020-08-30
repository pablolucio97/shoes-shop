import React, {ReactNode} from 'react'
import { View, Text, TouchableOpacity, Image, StyleSheet, Alert } from 'react-native'

import {useNavigation} from '@react-navigation/native'

interface ProductProps {
    img: string,
    description: string,
    price: string
}

const Shoes: React.FC<ProductProps> = ({
    img,
    description,
    price
}) => {

    function filterDesc (desc) {
        if(desc.length < 27){
            return desc
        }
        return `${desc.substring(0,25)}...`
    }

    

        const toDetails = useNavigation()

    return (
        <TouchableOpacity style={styles.mainContainer} activeOpacity={.6} onPress={() => toDetails.navigate('Details')}>
            <Image
            source={img}
            style={styles.shoesImg}
            />
            <Text style={styles.shoesText}>{filterDesc(description)}</Text>
            <View style={{opacity: .4}}>
                <Text style={styles.shoesText}>{price}</Text>
            </View>
        </TouchableOpacity>
    )

}

const styles = StyleSheet.create({
    mainContainer:{
        paddingVertical: '2%',
        alignItems: 'center',
        justifyContent: 'center'

    },
    shoesImg:{
        width: 175,
        height: 175

    },
    shoesText:{
        fontSize: 16,
        marginTop: 4
    }
})

export default Shoes
