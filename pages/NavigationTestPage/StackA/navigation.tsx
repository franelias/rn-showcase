import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Page1 } from "./Page1";
import { Page2 } from "./Page2";

const StackA = createNativeStackNavigator(
    {
        screens: {
            Page1: {
                screen: Page1,
                options: {
                    headerShown: false,
                },
            },
            Page2: {
                screen: Page2,
                options: {
                    headerShown: false,
                },
            },
        },
    }
);

export default StackA;