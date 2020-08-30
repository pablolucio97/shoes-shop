import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

import Home from './screens/Home/Index'
import Details from './screens/Details/Index'

const Stack = createStackNavigator()

export default function Routes () {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Home'>
                <Stack.Screen name='Home' component={Home} options={{
                    headerShown: false
                }}/>
                <Stack.Screen name='Details' component={Details}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

