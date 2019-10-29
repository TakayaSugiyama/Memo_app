import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>

      <View style = {styles.upbar}>
        <View>
           <Text style ={styles.upbarTitle}>MEMOT</Text>
        </View>
      </View>

      <View style = {styles.memoLists}>
        <View style = {styles.memoListItem}>
            <Text style = {styles.memoTiele}>講座のアイデア</Text>
            <Text style = {styles.memoDate}>2017 10 27 </Text>
        </View>
        
        <View style = {styles.memoListItem}>
            <Text style = {styles.memoTiele}>講座のアイデア</Text>
            <Text style = {styles.memoDate}>2017 10 27 </Text>
        </View>

        <View style = {styles.memoListItem}>
            <Text style = {styles.memoTiele}>講座のアイデア</Text>
            <Text style = {styles.memoDate}>2017 10 27 </Text>
        </View> 

        <View style = {styles.memoListItem}>
            <Text style = {styles.memoTiele}>講座のアイデア</Text>
            <Text style = {styles.memoDate}>2017 10 27 </Text>
        </View> 

        <View style = {styles.memoListItem}>
            <Text style = {styles.memoTiele}>講座のアイデア</Text>
            <Text style = {styles.memoDate}>2017 10 27 </Text>
        </View> 

      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  upbar:{
    position:"absolute",
    top:0,
    height:70,
    left:0,
    right:0,
    backgroundColor: "#265366",
    paddingTop:40,
    alignItems:"center",
  },
  upbarTitle:{
    color:"#fff",
    fontSize: 20,
  }
});
