import { createNativeStackNavigator } from "@react-navigation/native-stack";
import QRScanPage from "./QRScanPage";
import QRResultPage from "./QRResultPage";

const QRStack = createNativeStackNavigator(
    {
        screens: {
            QRScanPage: {
                screen: QRScanPage,
                options: {
                    headerShown: false,
                },
            },
            QRResultPage: {
                screen: QRResultPage,
                options: {
                    headerShown: false,
                },
            },
        },
    }
);

export default QRStack;