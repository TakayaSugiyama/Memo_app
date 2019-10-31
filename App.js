import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MemoList from './src/component/MemoList';
import UpBar from './src/component/UpBar';
import CircleButton from './src/component/CirCleButton';


export default function App() {
  return (
    <View style={styles.container}>
      <UpBar/>
      <MemoList/>
      <CircleButton/>
    </View>
  );
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

