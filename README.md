# React Native

## Cara install

tanpa typescript

```sh
npx create-expo-app YourAppName --template blank
```

## Cara custom button

## setting dynamic width dengan max-widht dan widht

```jsx
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

## gunakan Dimension from react-native untuk ambil ukuran device

```jsx
const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  card: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: deviceWidth < 380 ? 18 : 36,
  },
});
```

## setting sizes using useWindowDimensions

```jsx
import { useWindowDimensions } from "react-native";

export default function StartGameScreen({ onPickNumber }) {
  const [enteredNumber, setEnteredNumber] = useState("");

  const { width, height } = useWindowDimensions();

  const marginTopDistance = height < 400 ? 60 : 100;

  return (
    <View style={[styles.rootContainer, { marginTop: marginTopDistance }]}>
      // ....
    </View>
  );
}
```
