import React from "react";
import { Text, View } from "react-native";
import users from "../data/users";

const UserList = () => {
  return (
    <View>
      {users.map((user) => (
        <View key={user.id}>
          <Text>{user.name} </Text>
        </View>
      ))}
    </View>
  );
};

export default UserList;
