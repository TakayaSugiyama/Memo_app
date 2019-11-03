import React from "react";
import * as Font from 'expo-font';
import fontAwsome from "../../assets/fonts/fa-solid-900.ttf";
import {StyleSheet,View} from "react-native";





class CircleButton extends React.Component{
  state = {
    fontLoaded: false,
  };
  componentDidMount() {
    Font.loadAsync({
      FontAwsome:fontAwsome
    });
    this.setState({ fontLoaded: true });
  }
  render(){
    const style = this.props.style;
    return(
      <View style = {[styles.circleButton, style]}>
         {this.props.children}
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