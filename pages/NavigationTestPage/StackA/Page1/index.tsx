import { useNavigation } from "@react-navigation/native";
import { View, Text, Button } from "react-native";

export const Page1 = () => {
    const navigation = useNavigation();

    return (
        <View style={{ paddingTop: 12, paddingHorizontal: 24, justifyContent: "center", alignItems: "center" }}>
            <Text style={{ marginBottom: 12 }}>Page1</Text>
            <Button
                title="Go to StackA Page2"
                onPress={() => navigation.navigate("Page2" as never)}
            />
        </View>
    )
}

export default Page1;