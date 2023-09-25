import React from "react";
import { Text, View } from "react-native";
import AppBar from "../components/AppBar";
import { Routes, Route, Navigate } from 'react-router-native'
import PostList from "./PostList";
import Login from "../pages/Login"
import UserList from "./UsersList"

const Main = () => {
  return (
    <View styled={{ flex: 1 }}>
      <AppBar />
      <Routes>
        <Route path="/company" element={<Login />} />
        <Route path="/employees" element={<Text>Admin</Text>} />
        <Route path="/post" element={<PostList />} />
        <Route path="/userList" element={<UserList />} />
        <Route path="*" element={<Navigate to="/company" />} />
      </Routes>
    </View>
  );
};

export default Main;
