import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ComponentsTest } from ".";
import { Tamagui } from "./tamagui";
import { RnUi } from "./rnui";

const NavigationTestStack = createNativeStackNavigator({
    screens: {
        ChooseComponent: {
            screen: ComponentsTest,
        },
        Tamagui: {
            screen: Tamagui,
        },
        RnUi: {
            screen: RnUi,
        },
    },
});

export default NavigationTestStack;