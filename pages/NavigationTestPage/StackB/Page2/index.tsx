import { View, Text, Button } from "react-native";
import { StackActions, useNavigation } from "@react-navigation/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export const Page2 = () => {
    const { top } = useSafeAreaInsets();
    const navigation = useNavigation();

    console.log(navigation.getState());
    return (
        <View style={{ paddingTop: top }}>
            <Text>StackB Page2</Text>
            <Button
                title="Go back"
                onPress={() => navigation.goBack()}
            />
            <Button
                title="Go to StackA Page1, popTo"
                onPress={() => navigation.dispatch(StackActions.popTo('StackA'))}
            />
            <Button
                title="Go home, popTo"
                onPress={() => navigation.dispatch(StackActions.popTo("Home"))}
            />
        </View>
    )
}

export default Page2;