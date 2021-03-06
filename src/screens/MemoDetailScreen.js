import React from "react";
import {StyleSheet, Text,View} from 'react-native';
import CircleButton from "../element/CirCleButton";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';


class MemoDetailScreen extends  React.Component{
  render(){
    return(
      <View style = {styles.container}>
         <View style = {styles.memoHeader}>
           <View>
             <Text style = {styles.memoHeaderTitle}>Hello World</Text>
             <Text style = {styles.memoHeaderDate}>2017/10/27</Text>
           </View>
         </View>
         <View style = {styles.memoContent}>
            <Text sytle = {styles.memoContentText} >講座のアイデアです。</Text>
            <View style = {styles.buttonField} >
              <CircleButton style = {styles.editButton}  onPress = {() => {this.props.navigation.navigate("MemoEdit")} }>
                  <FontAwesomeIcon icon = {faEdit } style = {styles.editButtonTitle} />
              </CircleButton>
            </View>
         </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  memoHeader:{
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
  },
  memoContentText:{
    fontSize:30,
  },
  editButton:{
    top:9,
  },
  editButtonTitle:{
    top: 15,
    left:17,
    color:"#fff",
  }, 
  buttonField:{
    width:"20%",
    height:"10%",
    top:30,
  }
  
})

export default MemoDetailScreen;