import { View, Text } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import SuccessMessage from "@/components/SuccessMessage";

const confirmMessage = () => {
  const { message } = useLocalSearchParams();

  return (
    <>
      <SuccessMessage message={message as string} />
    </>
  );
};

export default confirmMessage;
