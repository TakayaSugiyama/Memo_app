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
            <Text style = {styles.memoTitle}>講座のアイデア</Text>
            <Text style = {styles.memoDate}>2017 10 27 </Text>
        </View>
        
        <View style = {styles.memoListItem}>
            <Text style = {styles.memoTitle}>講座のアイデア</Text>
            <Text style = {styles.memoDate}>2017 10 27 </Text>
        </View>

        <View style = {styles.memoListItem}>
            <Text style = {styles.memoTitle}>講座のアイデア</Text>
            <Text style = {styles.memoDate}>2017 10 27 </Text>
        </View> 

        <View style = {styles.memoListItem}>
            <Text style = {styles.memoTitle}>講座のアイデア</Text>
            <Text style = {styles.memoDate}>2017 10 27 </Text>
        </View> 

        <View style = {styles.memoListItem}>
            <Text style = {styles.memoTitle}>講座のアイデア</Text>
            <Text style = {styles.memoDate}>2017 10 27 </Text>
        </View> 

        <View style = {styles.memoAddButton}>
          <Text style = {styles.memoAddButtonTitle}>+</Text>
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
    backgroundColor:"#eee",
    position:"relative",
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
    shadowColor:"#000",
    shadowOffset: {width: 1,height: 0},
    shadowOpacity:0.8,
    shadowRadius:0,
  },
  upbarTitle:{
    color:"#fff",
    fontSize: 20,
  },
  memoLists:{
    width:"100%",
    flex:1,
    paddingTop:70,
  },
  memoListItem:{
    padding:16,
    borderBottomColor:"#ddd",
    borderBottomWidth:1,
    backgroundColor:"#fff",
  },
  memoTitle:{
    fontSize:18,
    marginBottom:4,
  }, 
  memoDate:{
    color:"#887676",
    fontSize:12
  }, 
  memoAddButton:{
   backgroundColor:"rgba(39, 119, 168, 0.3)",
   width:50,
   height:50, 
   borderRadius:50,
   position:"absolute", 
   bottom: 20,
   right:30,
  }, 
  memoAddButtonTitle:{
    fontSize:48,
    lineHeight:50,
    textAlign:"center",
  }
});
