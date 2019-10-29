import React from 'React'
import { StyleSheet, Text, View } from 'react-native';


class BodyText extends React.Component{
  render(){
    return (
        <Text style = {styles.text}>
          {this.props.children}
        </Text>
    )
  }
}

const styles = StyleSheet.create({
  text:{
    color: "red",
  },
});
export default BodyText;

