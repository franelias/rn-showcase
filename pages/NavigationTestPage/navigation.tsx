import { createNativeStackNavigator } from "@react-navigation/native-stack";
import StackA from "./StackA/navigation";
import StackB from "./StackB/navigation";
import { HomeScreen } from "./Home";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ProfileScreen } from "./Profile";

const HomeTabs = createBottomTabNavigator({
    screens: {
        Home: HomeScreen,
        Profile: ProfileScreen,
    },
    screenOptions: {
        headerShown: false,
    },
});

const NavigationTestStack = createNativeStackNavigator({
    screens: {
        Tabs: {
            screen: HomeTabs,
        },
        StackA: {
            screen: StackA,
        },
        StackB: {
            screen: StackB,
        },
    },

});

export default NavigationTestStack;