import { StackActions, useNavigation } from "@react-navigation/native";
import { View, Text, Button } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export const Page2 = () => {
    const { top } = useSafeAreaInsets();
    const navigation = useNavigation();

    console.log(navigation.getState());

    return (
        <View style={{ paddingTop: top }}>
            <Text>StackA Page2</Text>
            <Button
                title="Go to StackB Page1, pop"
                onPress={() => navigation.dispatch(StackActions.popTo('StackB', { from: 'StackA' }))}
            />
            <Button
                title="Go to StackB Page1, navigate"
                onPress={() => navigation.navigate('StackB' as never)}
            />
            <Button
                title="Go home, popTo"
                onPress={() => navigation.dispatch(StackActions.popTo('Home'))}
            />
        </View>
    )
}

export default Page2;