import React from "react";
import * as Icon from "@expo/vector-icons";

export default ({ name, focused }) => (
  <Icon.Ionicons name={name} size={26} color={focused ? "white" : "#7f8c8d"} />
);
