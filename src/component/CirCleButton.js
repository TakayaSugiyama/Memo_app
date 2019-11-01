import React from "react";
import {StyleSheet, Text,View} from "react-native";

class CircleButton extends React.Component{
  render(){
    const style = this.props.style;
    return(
      <View style = {[styles.circleButton, style]}>
          <Text style = {styles.memoAddButtonTitle}>+</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  circleButton:{
    backgroundColor:"#ff69b4",
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
     color: "#fff",
     textAlign:"center",
   }
})

export default CircleButton;