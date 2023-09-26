import React from "react";
import { View, StyleSheet, ScrollView, Text } from "react-native"
import Constants from "expo-constants";
import {Link} from 'react-router-native'

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    paddingTop: Constants.statusBarHeight + 10,
    paddingBottom: 10,
    flexDirection: 'row',
  },
  text: {
    color: "#fff",
    fontSize: 17,
    paddingHorizontal: 10,
  },
  scroll: {
    paddingBottom: 15,
  }
});

const AppBarTab = ( {children, to}) => {
  return (
    <Link to={to} >
      <Text style={styles.text}>
        {children}
      </Text>
    </Link>
  )
}

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal syle={styles.scroll}>
      <AppBarTab active to='/company'>Login empresa </AppBarTab>
      <AppBarTab to='/employees'>Login empleado </AppBarTab>
      <AppBarTab to='/post'>Ver posts </AppBarTab>
      <AppBarTab to='/userList'>Lista de usuarios </AppBarTab>
      </ScrollView> 
    </View>
  );
};

export default AppBar;
