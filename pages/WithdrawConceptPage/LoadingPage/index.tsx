import { Canvas, LinearGradient, Rect, vec } from "@shopify/react-native-skia";
import React, { useEffect, useRef, useState } from "react";
import { ActivityIndicator, Easing, Text, TouchableOpacity, useWindowDimensions, View } from "react-native";
import Animated, { FadeIn, FadeOut, SharedValue, useDerivedValue, useSharedValue, withDelay, withTiming } from "react-native-reanimated";
import { FontAwesome } from "@expo/vector-icons";
import LottieView from "lottie-react-native";
import { StackActions, useNavigation } from "@react-navigation/native";

const LoadingPage = () => {
    const animationRef = useRef<LottieView>(null);
    const [isLoading, setIsLoading] = useState(true);
    const navigation = useNavigation();
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
            progress.value = withDelay(100, withTiming(1, { duration: 1500 }));

            setTimeout(() => {
                navigation.dispatch(
                    StackActions.replace('DonePage')
                );
            }, 1600);

        }, 1000);
    }, []);

    const AnimatedLottieView = Animated.createAnimatedComponent(LottieView);

    const progress = useSharedValue(0);

    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            {!isLoading &&
                <AnimatedLottieView
                    ref={animationRef}
                    source={require("../../../assets/ok.json")}
                    style={{ width: "40%", height: "40%", justifyContent: "center", alignItems: "center" }}
                    loop={false}
                    progress={progress as SharedValue<number | undefined>}
                />
            }

            {isLoading &&
                <Animated.View
                    exiting={FadeOut.duration(150)}
                    style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
                >
                    <ActivityIndicator
                        size="large"
                        color="#00ff00"
                    />
                    <Text style={{ fontSize: 24, fontWeight: "bold", marginTop: 16 }}>
                        Estamos realizando tu retiro...
                    </Text>
                    <Text style={{ fontSize: 16, marginTop: 8 }}>
                        Por favor, espera un momento.
                    </Text>
                </Animated.View>
            }
        </View>
    );


};

export default LoadingPage;