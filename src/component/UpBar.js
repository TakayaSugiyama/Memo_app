import React from "react"
import {StyleSheet, Text,View} from "react-native"

class UpBar extends React.Component{
  render(){
    return(
      <View style = {styles.upbar}>
        <View>
           <Text style ={styles.upbarTitle}>MEMOT</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  upbar:{
    position:"absolute",
    top:0,
    height:70,
    left:0,
    right:0,
    backgroundColor: "#265366",
    paddingTop:40,
    alignItems:"center",
    shadowColor:"#000",
    shadowOffset: {width: 1,height: 0},
    shadowOpacity:0.8,
    shadowRadius:0,
  },
  upbarTitle:{
    color:"#fff",
    fontSize: 20,
  }
});

export default UpBar;