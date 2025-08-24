import { createNativeStackNavigator } from "@react-navigation/native-stack";
import StackA from "./StackA/navigation";
import StackB from "./StackB/navigation";
import { HomeScreen } from "./Home";

const NavigationTestStack = createNativeStackNavigator(
    {
        screens: {
            Home: {
                screen: HomeScreen,
                options: {
                    headerShown: false,
                },
            },
            StackA: {
                screen: StackA,
                options: {
                    headerShown: false,
                },
            },
            StackB: {
                screen: StackB,
                options: {
                    headerShown: false,
                },
            },
        },
    }
);

export default NavigationTestStack;