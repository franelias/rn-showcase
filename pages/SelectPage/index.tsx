import { Canvas, LinearGradient, Rect, vec } from "@shopify/react-native-skia";
import React from "react";
import { useDerivedValue, useSharedValue, withTiming } from "react-native-reanimated";
import { FontAwesome } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

const SelectPage = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={{ flex: 1, gap: 16 }}>
            <View style={{ justifyContent: "center", alignItems: "center", marginVertical: 16 }}>
                <Text style={{ fontSize: 24, fontWeight: "bold" }}>
                    Select a component
                </Text>
            </View>
            <Button
                title="Random Gradient"
                onPress={() => navigation.navigate("RandomGradientPage" as never)}
            />
            <Button
                title="Pick Animated"
                onPress={() => navigation.navigate("PickAnimatedPage" as never)}
            />
            <Button
                title="Home Gradient"
                onPress={() => navigation.navigate("HomeGradientPage" as never)}
            />
        </SafeAreaView>
    );
};

export default SelectPage;