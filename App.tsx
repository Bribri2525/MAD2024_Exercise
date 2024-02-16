import {Text, 
  View, 
  Image, 
  ScrollView, 
  TextInput, 
  StyleSheet,
} from 'react-native';
import React from 'react';

const App = () => {
  return (
    <View>
      <Text style={style.title}>Top 3 Korean Food</Text>
      <ScrollView>
        <TextInput
        placeholder="Masukkan nama anda"
        style={style.inputUsername}
        />
        <TextInput
        placeholder="Masukkan makanan favorit anda"
        style={style.inputUsername}
        />
        <Text style={style.words}>Ini adalah 3 makanan korea yang paling populer!</Text>
        <Image
          source={require('./assets/food1.jpg')}
          style={{width: 400,  height: 200}}
        />
        <Text style={style.title}> 2 </Text>
        <Image
          source={require('./assets/food2.jpg')}
          style={{width: 400,  height: 200}}
        />
        <Text style={style.title}> 3 </Text>
        <Image
          source={require('./assets/food3.jpg')}
          style={{width: 400,  height: 200}}
        />
        </ScrollView>
      </View>
  );
};

const style = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginTop: 10,
  },
  words:{
    fontSize: 15,
    textAlign: 'center'
  },
  inputUsername: {
    borderColor: 'black',
    borderWidth: 1,
    margin: 10,
    borderRadius: 10,
    padding: 10,    
  },
});

export default App;
