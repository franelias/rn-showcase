import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoadingPage from "./LoadingPage";
import DonePage from "./DonePage";

const WithdrawConceptStack = createNativeStackNavigator(
    {
        screens: {
            WithdrawConcept: {
                screen: LoadingPage,
                options: {
                    headerShown: false,
                },
            },
            DonePage: {
                screen: DonePage,
                options: {
                    headerShown: false,
                },
            },
        },
    }
);

export default WithdrawConceptStack;