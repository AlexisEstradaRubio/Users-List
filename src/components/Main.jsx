import React from "react";
import { Text, View } from "react-native";
import AppBar from "../components/AppBar";
import { Routes, Route, Navigate } from 'react-router-native'
import PostList from "./PostList";

const Main = () => {
  return (
    <View styled={{ flex: 1 }}>
      <AppBar />
      <Routes>
        <Route path="/company" element={<Text>Sign In Empresa</Text>} />
        <Route path="/employees" element={<Text>Sign In Empleado</Text>} />
        <Route path="/post" element={<PostList />} />
        <Route path="*" element={<Navigate to="/company" />} />
      </Routes>
    </View>
  );
};

export default Main;
