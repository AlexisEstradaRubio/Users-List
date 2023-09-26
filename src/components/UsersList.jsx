import React from "react";
import { Text, View } from "react-native";
import users from "../data/users";
import AddUser from "../pages/AddUser"

const UserList = () => {
  return (
    <>
    <View>
      {users.map((user) => (
        <View key={user.id}>
          <Text>{user.name} </Text>
        </View>
      ))}
    </View>
    <AddUser />
    </>
  );
};

export default UserList;
