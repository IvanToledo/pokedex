import * as React from 'react';
import { Text, View, StyleSheet,FlatList, Image } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {


 {     
    return(
    <View style={style.container}>
      <Text style={style.titulo}> Pokemons de agua </Text>

      <FlatList data={arrayTeste} renderItem={({item})=> 
          <View style={style.Pokemon}>
          

          <Image style= {style.img}source={item.capa}/>
          <Text>
              <Text style={style.subTitulo1}>Pokemon:</Text> {item.pokemon}{'\n'}                  
              <Text style={style.subTitulo2}>Geracao: </Text> {item.geracao}{'\n'}
              
              </Text>
          </View>
      }/>
    </View>
  );
}
}

const style = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },

  titulo:{
    fontSize: 30,
    color: 'red',
    fontFamily: 'Lato_400Regular',
    marginTop: 40,
    marginBottom: 10,
    textAlign:'center'
    },

  img:{
    borderRadius: 10,
    width: 200,
    height: 200,
    marginTop: 20
  },

  subTitulo1:{
    
    fontSize: 20,
    fontWeight: 'bold'   
  },  

  subTitulo2:{
    fontSize: 20,
    fontWeight: 'bold'   
  },  


  }
);


const arrayTeste = [
  {pokemon:'PlayStation 5', geracao:'2022', capa:require('./assets/quagsire.png')},
  {pokemon:'PlayStation 5', geracao:'2022', capa:require('./assets/lapras.png')},
  {pokemon:'PlayStation 5', geracao:'2022', capa:require('./assets/quaxly.png')},
  {pokemon:'PlayStation 5', geracao:'2022', capa:require('./assets/giarados.png')},
  {pokemon:'PlayStation 5', geracao:'2022', capa: require('./assets/totodile.png')}
];