import React from "react";
import {StyleSheet, TextInput,View, Button, Text} from "react-native";
import { TouchableHighlight } from "react-native-gesture-handler";

class LoginScreen extends React.Component{
  render(){
    return(
      <View style = {styles.container}>
         <View style = {styles.form} >
            <Text style = {styles.title}>ログイン</Text>
            <TextInput value = "Your Eamil" style = {styles.formField } />
            <TextInput value = "Your Password" style = {styles.formField} />
            <TouchableHighlight   onPress = {() => {this.props.navigation.navigate("Home")}} style = {styles.submitButton}>
              <Text style = {styles.submitText}>ログインする</Text>
            </TouchableHighlight>
         </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
     flex:1, 
     width: "100%",
     backgroundColor:"#fff",
  },
  form:{
    paddingTop:100,
    paddingLeft:30,
    paddingRight:30,
    fontSize:27,
  },
  formField:{
    fontSize:20, 
    color:"#333",
    height:48,
    marginBottom:16,
    backgroundColor:"#ddd",
    width:"100%",
    borderWidth:1,
    borderColor:"#333",
  },
  title:{
    fontSize:30,
    textAlign:"center",
    padding:30,
  }, 
  submitButton:{
    backgroundColor:"blue",
    padding:15,
    borderRadius:40,
    width:"70%",
    alignSelf:"center"
  },
  submitText:{
    color:"#fff",
    textAlign:"center",
    fontSize:20,
  }
})

export default  LoginScreen;