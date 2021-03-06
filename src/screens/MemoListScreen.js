import React from "react"
import  {StyleSheet, View} from "react-native";
import MemoList from '../component/MemoList';
import CircleButton from '../element/CirCleButton';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

class MemoListScreen extends React.Component{
  render(){
    return(
      <View style={styles.container}>
        <MemoList  navigation = {this.props.navigation}/>
        <CircleButton>
           <FontAwesomeIcon icon = {faPlus} style = {styles.listbutton} />
        </CircleButton>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:"#eee",
    position:"relative",
  },
  listbutton:{
    top:15,
    left:17,
    color:"#fff",
  }
});

export default MemoListScreen;