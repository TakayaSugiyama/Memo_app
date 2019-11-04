import React from "react"
import  {StyleSheet,TextInput, View} from "react-native";
import CircleButton from '../element/CirCleButton';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

class MemoEditScreen extends React.Component{
  render(){
    return(
      <View style = {styles.container}>
         <TextInput style = {styles.editInputArea} value = "Hi"  multiline /> 
         <CircleButton>
           <FontAwesomeIcon icon = {faCheck} style = {styles.checkButton}/>
         </CircleButton>
      </View>
    )
  }
}

const styles = StyleSheet.create({
   container:{
     flex:1,
     width: "100%",
   },
   checkButton:{
     color:"#fff",
     top: 15,
     left:16,
   },
   editInputArea:{
     paddingLeft:30,
     paddingTop:30,
     backgroundColor:"#fff",
     paddingBottom:780,
     color:"#333",
     fontSize:24,
   }
})

export default MemoEditScreen;