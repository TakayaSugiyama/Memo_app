import React from "react"
import  {StyleSheet,Text, View} from "react-native";
import MemoList from '../component/MemoList';
import UpBar from '../component/UpBar';
import CircleButton from '../component/CirCleButton';

class MemoListScreen extends React.Component{
  render(){
    return(
      <View>
        <UpBar/>
        <MemoList/>
        <CircleButton/>
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
  }
});

export default MemoListScreen;