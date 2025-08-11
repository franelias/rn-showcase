import React from "react";
import { Text, View } from "react-native";
import { RouteProp } from "@react-navigation/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const QRResultPage = ({ route }: { route: RouteProp<any, any> }) => {
    const { data, raw } = route.params as { data: string, raw: string };
    console.log(data, raw);

    const { top } = useSafeAreaInsets();

    return (
        <View style={{ paddingTop: top, paddingHorizontal: 24 }}>
            <Text>QRResultPage</Text>
            <Text>{data}</Text>
            <Text>{raw}</Text>
        </View>
    );
};

export default QRResultPage;