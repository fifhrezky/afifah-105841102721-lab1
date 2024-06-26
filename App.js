import { StyleSheet,Text,View } from 'react-native'
import React from 'react'
import{useFonts} from 'expo-font'
const App = () => {
  const [fontsLoaded,fontError] = useFonts({
    'Metro-Bold':require('./assets/Fonts/Metropolis-Bold.otf'),
    'Metro-Medium':require('./assets/Fonts/Metropolis-Medium.otf'),
    'Metro-SemiBold':require('./assets/Fonts/Metropolis-SemiBold.otf'),
    'Metro-Black':require('./assets/Fonts/Metropolis-Black.otf'),
  });
  if (!fontsLoaded) 
    return <View>
      <Text> Font tidak ditemukan ! </Text>
    </View>
  return(
    <View style={{
      flex:1,
      justifyContent:'center',
      alignItems:'center',

    }}>
      <Text style ={{fontFamily:'Metro-Bold',fontSize:30}}> Metro Bold</Text>
      <Text style ={{fontFamily:'Metro-Medium',fontSize:30}}> Metro Medium</Text>
      <Text style ={{fontFamily:'Metro-SemiBold',fontSize:30}}> Metro SemiBold</Text>
      <Text style ={{fontFamily:'Metro-Black',fontSize:30}}> Metro Black</Text>
    </View>
  )
}

export default App