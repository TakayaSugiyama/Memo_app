import React from "react"
import  {StyleSheet,Text, View} from "react-native";
import UpBar from '../component/UpBar';
import CircleButton from '../element/CirCleButton';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

class MemoEditScreen extends React.Component{
  render(){
    return(
      <View style = {styles.container}>
         <UpBar/>
         <View style = {styles.editInputArea}> 
           <Text style = {styles.editInput}>aaaaaaaaaaaaaaaa</Text>
         </View>
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
     marginTop:70,
     padding:30,
   },
   editInput:{
     color:"#333",
     fontSize:23,
   }
})

export default MemoEditScreen;