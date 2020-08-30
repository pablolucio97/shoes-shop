import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

import {Anton_400Regular} from '@expo-google-fonts/anton'

import Home from './screens/Home/Index'
import Details from './screens/Details/Index'

const Stack = createStackNavigator()

export default function Routes () {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Home' screenOptions={{
                headerTitleStyle:{
                    color: '#222',
                    fontFamily: 'Anton_400Regular'
                }
            }}>
                <Stack.Screen name='Home' component={Home} options={{
                    headerShown: false,
                }}/>
                <Stack.Screen name='Details' component={Details}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

