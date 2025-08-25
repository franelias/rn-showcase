import { useNavigation } from "@react-navigation/native";
import { View, Text, Button } from "react-native";

export const Page2 = () => {
    const navigation = useNavigation();

    return (
        <View style={{ paddingTop: 12, paddingHorizontal: 24, justifyContent: "center", alignItems: "center" }}>
            <Text style={{ marginBottom: 12 }}>Page2</Text>
            <Button
                title="Go to StackB Page1"
                onPress={() => navigation.navigate("StackB" as never)}
            />
            <Button
                title="Go to StackB Page2"
                onPress={() => navigation.navigate("StackB" as never, {
                    screen: "Page2",
                })}
            />
        </View>
    )
}

export default Page2;