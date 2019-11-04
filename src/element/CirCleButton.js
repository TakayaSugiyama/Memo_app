import React from "react";
import * as Font from 'expo-font';
import fontAwsome from "../../assets/fonts/fa-solid-900.ttf";
import {StyleSheet,View,Text} from "react-native";
import { TouchableHighlight } from "react-native-gesture-handler";





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
      <TouchableHighlight style = {styles.container}>
        <View style = {[styles.circleButton, style]}>
          <Text style = {styles.circleButtonTitle }>{this.props.children}</Text>
        </View>
      </TouchableHighlight>
    )
  }
}

const styles = StyleSheet.create({
   circleButtonTitle:{
     fontSize:48,
     lineHeight:50,
     color: "#fff",
     textAlign:"center",
     top: 18,
     left: 15,
    }, 
   circleButton:{
    backgroundColor:"#ff69b4",
    width:50,
    height:50, 
    borderRadius:50,
    position: "relative"
   }, 
   container:{
      margin: 30,
   }
})

export default CircleButton;