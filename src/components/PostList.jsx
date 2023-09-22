import React from "react";
import { FlatList, Text } from "react-native";
import useListPost from "../hooks/useListPost";

const PostList = () => {
  const { post } = useListPost();

  return (
    <FlatList
      data={post}
      ItemSeparatorComponent={() => <Text></Text>}
      renderItem={({ item }) => (
        <Text>
          Titulo: {item.title}
          {item.body}
        </Text>
      )}
    />
  );
};

export default PostList;
