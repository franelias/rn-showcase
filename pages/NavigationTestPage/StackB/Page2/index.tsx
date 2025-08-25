import { View, Text, Button } from "react-native";
import { StackActions, useNavigation } from "@react-navigation/native";

export const Page2 = () => {
    const navigation = useNavigation();

    return (
        <View style={{ paddingTop: 12, paddingHorizontal: 24, justifyContent: "center", alignItems: "center" }}>
            <Text style={{ marginBottom: 12 }}>Page2</Text>
            <Button
                title="Go to StackB Page1"
                onPress={() => navigation.navigate("Page1" as never,)}
            />
            <Button
                title="Go to tabs"
                onPress={() => navigation.dispatch(StackActions.popTo("Tabs"))}
            />
            <Button
                title="Go page1, popTo"
                onPress={() => navigation.dispatch(StackActions.popTo("Page1"))}
            />
            <Button
                title="Go page1, popToTop"
                onPress={() => navigation.dispatch(StackActions.popToTop())}
            />
        </View>
    )
}

export default Page2;