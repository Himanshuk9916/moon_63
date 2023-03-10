import { createStackNavigator } from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Demo1 from '../screens/demo1';
import Demo2 from '../screens/demo2';
import Demo3 from '../screens/demo3';

const Stack=createStackNavigator();

function StackNavigation(){
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Demo1' component={Demo1}/>
                <Stack.Screen name='Demo2' component={Demo2}/>
                <Stack.Screen name='Demo3' component={Demo3}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default StackNavigation;


