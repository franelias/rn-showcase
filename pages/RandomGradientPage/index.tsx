import { Canvas, LinearGradient, Rect, vec } from "@shopify/react-native-skia";
import React from "react";
import { TouchableOpacity, useWindowDimensions } from "react-native";
import { useDerivedValue, useSharedValue, withTiming } from "react-native-reanimated";
import { FontAwesome } from "@expo/vector-icons";

const RandomGradientPage = () => {
    const { width, height } = useWindowDimensions();

    const leftValue = useSharedValue("red");
    const rightValue = useSharedValue("blue");

    const colors = useDerivedValue(() => {
        return [leftValue.value, rightValue.value];
    });

    const handleRandom = () => {
        leftValue.value = withTiming(`#${Math.floor(Math.random() * 16777215).toString(16)}`);
        rightValue.value = withTiming(`#${Math.floor(Math.random() * 16777215).toString(16)}`);
    };

    return (
        <>
            <Canvas style={{ flex: 1 }}>
                <Rect x={0} y={0} width={width} height={height}>
                    <LinearGradient
                        start={vec(0, 0)}
                        end={vec(width, height)}
                        colors={colors}
                    />
                </Rect>
            </Canvas>
            <TouchableOpacity
                style={{ position: "absolute", justifyContent: "center", alignItems: "center", bottom: 52, right: 32, width: 64, height: 64, borderRadius: 32, backgroundColor: "black" }}
                onPress={handleRandom}
            >
                <FontAwesome name="random" size={24} color="white" />
            </TouchableOpacity>
        </>
    );
};

export default RandomGradientPage;