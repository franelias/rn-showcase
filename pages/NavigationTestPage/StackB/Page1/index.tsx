import { useNavigation } from "@react-navigation/native";
import { View, Text, Button } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export const Page1 = () => {
    const { top } = useSafeAreaInsets();
    const navigation = useNavigation();
    console.log(navigation.getState());
    return (
        <View style={{ paddingTop: top }}>
            <Text>StackB Page1</Text>
            <Button
                title="Go to StackB Page2"
                onPress={() => navigation.navigate("Page2" as never)}
            />
        </View>
    )
}

export default Page1;