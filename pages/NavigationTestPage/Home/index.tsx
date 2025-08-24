import { View, Text, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export const HomeScreen = () => {
    const navigation = useNavigation();

    const { top } = useSafeAreaInsets();

    return (
        <View style={{ paddingTop: top }}>
            <Text>Home Screen</Text>
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