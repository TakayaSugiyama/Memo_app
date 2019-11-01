import React from "react";
import {StyleSheet, Text,View} from 'react-native';
import CircleButton from "../component/CirCleButton";
import UpBar from "../component/UpBar";

class MemoDetailScreen extends  React.Component{
  render(){
    return(
      <View style = {styles.container}>
         <UpBar/>
         <View style = {styles.memoHeader}>
           <View>
             <Text style = {styles.memoHeaderTitle}>講座のアイデア</Text>
             <Text style = {styles.memoHeaderDate}>2017/10/27</Text>
           </View>
         </View>
         <View style = {styles.memoContent}>
            <Text sytle = {styles.memoContentText} >講座のアイデアです。</Text>
         </View>
         <CircleButton style = {styles.editButton}>+</CircleButton>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  memoHeader:{
     marginTop:70,
     height: 200,
     backgroundColor:"#033440",
     justifyContent:"center",
     padding:10,
  },
  memoHeaderTitle:{
    color:"#fff",
    fontWeight:"bold",
    fontSize:40,
    marginBottom:4,
  },
  memoHeaderDate:{
    color:"#fff", 
    fontSize:15, 
    color:"#fff",
  },
  container:{
    flex: 1,
    backgroundColor:"#eee",
    width: "100%"
  }, 
  memoContent:{
    padding: 30,
    backgroundColor:"#fff",
    flex:1,
  },
  memoContentText:{
    fontSize:30,
  },
  editButton:{
    top: 245,
  }
})

export default MemoDetailScreen;