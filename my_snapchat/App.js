import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useState, useEffect } from 'react';
import * as SecureStore from 'expo-secure-store';

import AuthContext from './secureToken';
import HomePage from './Screens/HomePage';
import Register from './Screens/Register';
import Login from './Screens/Login';
import CameraApp from './Screens/Camera';
import SearchContact from './Screens/SearchContact';
import PickerApp from './Screens/Picker';
import CameraPreview from './Screens/CameraPreview';
// import { StatusBar } from 'expo-status-bar';

const Stack = createNativeStackNavigator();

export default function App() {
  const [token, setToken] = useState(null);

  async function getToken(){
    setToken(await SecureStore.getItemAsync('token'))
  }
  useEffect(() =>{ getToken()
  },[]);

  return (
  <AuthContext.Provider value ={[token, setToken]} >
        <NavigationContainer>
           <Stack.Navigator initialRouteName="Inscription">
             {
               !token ?
               <>
               <Stack.Screen name='Login' component={Login} />
               <Stack.Screen name="Inscription" component={Register} />
               </>
               :
               <>
               <Stack.Screen name="HomePage" component={HomePage} />
               <Stack.Screen name='Camera' component={CameraApp} />
               <Stack.Screen name='SearchContact' component={SearchContact} />
               <Stack.Screen name='Picker' component={PickerApp} />
               <Stack.Screen name='CameraPreview' component={CameraPreview} />
               </>
             }
          </Stack.Navigator>
       </NavigationContainer>
    </AuthContext.Provider>
  );
}