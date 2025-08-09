# React Native

## Cara install

tanpa typescript

```sh
npx create-expo-app YourAppName --template blank
```

## Cara custom button

## setting dynamic width dengan max-widht dan widht

```sh
import { StyleSheet, Text } from "react-native";

export default function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 24,
    color: "white",
    textAlign: "center",
    borderWidth: 2,
    borderColor: "white",
    padding: 12,
    maxWidth: "80%",
    width: 300,
  },
});


```
