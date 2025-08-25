import { View, Text, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

export const HomeScreen = () => {
    const navigation = useNavigation();

    return (
        <View style={{ paddingTop: 24, paddingHorizontal: 24, justifyContent: "center", alignItems: "center" }}>
            <Text style={{ marginBottom: 12 }}>Home Screen</Text>
            <Button
                title="Go to Stack A"
                onPress={() => navigation.navigate("StackA" as never)}
            />
            <Button
                title="Go to Stack B"
                onPress={() => navigation.navigate("StackB" as never)}
            />
        </View>
    )
}   