import React from "react";
import {StyleSheet, Text,View} from "react-native";

class CircleButton extends React.Component{
  render(){
    return(
      <View style = {styles.memoAddButton}>
          <Text style = {styles.memoAddButtonTitle}>+</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
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
})

export default CircleButton;