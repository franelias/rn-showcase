import React, { useEffect, useState } from "react";
import { useWindowDimensions } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Canvas, LinearGradient, Rect, vec } from "@shopify/react-native-skia";
import { BlurView } from "expo-blur";
import { Text, View } from "react-native";
import { Gyroscope } from 'expo-sensors';
import { useSharedValue, useDerivedValue } from "react-native-reanimated";

const BlurEffectPage = () => {
    const { width, height } = useWindowDimensions();
    const { top } = useSafeAreaInsets();
    const [sensorAvailable, setSensorAvailable] = useState(false);
    const [value, setValue] = useState({ x: 0, y: 0 });

    const gradientX = useSharedValue(0);
    const gradientY = useSharedValue(0);

    const gradientStart = useDerivedValue(() => {
        return vec(
            gradientX.value * 100,
            gradientY.value * 100
        );
    });

    const gradientEnd = useDerivedValue(() => {
        return vec(
            width + gradientX.value * 100,
            height + gradientY.value * 100
        );
    });

    useEffect(() => {
        let subscription: any;

        const startSensor = async () => {
            try {
                const isAvailable = await Gyroscope.isAvailableAsync();
                if (!isAvailable) {
                    setSensorAvailable(false);
                    return;
                }

                setSensorAvailable(true);

                const updateInterval = 16;

                Gyroscope.setUpdateInterval(updateInterval);
                subscription = Gyroscope.addListener((data) => {
                    gradientX.value += data.x * 0.5;
                    gradientY.value += data.y * 0.5;
                    setValue({ x: data.x, y: data.y });
                });
            } catch (error) {
                console.error('Error setting up sensor:', error);
                setSensorAvailable(false);
            }
        };

        startSensor();

        return () => {
            if (subscription) {
                subscription.remove();
            }
        };
    }, []);

    return (
        <>
            <Canvas style={{ flex: 1 }}>
                <Rect
                    x={0}
                    y={0}
                    width={width}
                    height={height}
                >
                    <LinearGradient
                        start={gradientStart}
                        end={gradientEnd}
                        colors={["red", "blue"]}
                    />
                </Rect>
            </Canvas>
            <BlurView
                intensity={100}
                style={{ flex: 1, paddingTop: top, position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }}>
                <View style={{ padding: 20 }}>
                    <Text style={{ color: 'white', fontSize: 14 }}>
                        Status: {sensorAvailable ? 'Active' : 'Not Available'}
                    </Text>
                    <Text style={{ color: 'white', fontSize: 12, marginTop: 10 }}>
                        {value.x} {value.y}
                    </Text>
                </View>
            </BlurView>
        </>
    );
};

export default BlurEffectPage;