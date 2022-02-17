import * as React from "react";
import { View, Button } from "react-native";

export default function Kanban() {
  const [count, setCount] = React.useState(0);
  return (
    <View>
      <Button
        title={`Kanban Coming Soon! (Press me?) ${count > 0 ? count : ""}`}
        color="#841584"
        onPress={() => setCount((prev) => prev + 1)}
      />
    </View>
  );
}
