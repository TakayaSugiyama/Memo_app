import React from "react"
import {StyleSheet, Text,View} from "react-native"
import { TouchableHighlight } from "react-native-gesture-handler"

class MemoList extends React.Component{
  render(){
    return(
         <View style = {styles.memoLists}>
          <TouchableHighlight onPress = {() => {this.props.navigation.navigate("MemoDetail");}}>
            <View style = {styles.memoListItem}>
                  <Text style = {styles.memoTitle}>講座のアイデア</Text>
                  <Text style = {styles.memoDate}>2017 10 27 </Text>
              </View>
          </TouchableHighlight>
          <TouchableHighlight onPress = {() => {this.props.navigation.navigate("MemoDetail");}}>
            <View style = {styles.memoListItem}>
                  <Text style = {styles.memoTitle}>講座のアイデア</Text>
                  <Text style = {styles.memoDate}>2017 10 27 </Text>
              </View>
          </TouchableHighlight>
          <TouchableHighlight onPress = {() => {this.props.navigation.navigate("MemoDetail");}}>
            <View style = {styles.memoListItem}>
                  <Text style = {styles.memoTitle}>講座のアイデア</Text>
                  <Text style = {styles.memoDate}>2017 10 27 </Text>
              </View>
          </TouchableHighlight>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  memoLists:{
    width:420,
    flex:1,
    paddingLeft:20,
    paddingRight:20,
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

export default MemoList;