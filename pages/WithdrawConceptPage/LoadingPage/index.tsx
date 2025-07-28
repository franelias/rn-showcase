import React, { useEffect, useRef, useState } from "react";
import { ActivityIndicator, Text, View } from "react-native";
import Animated, { FadeOut, SharedValue, useSharedValue, withDelay, withTiming } from "react-native-reanimated";
import LottieView from "lottie-react-native";
import { StackActions, useNavigation, usePreventRemove } from "@react-navigation/native";

const LOADING_DURATION = 3000;

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

        }, LOADING_DURATION);
    }, [setIsLoading, navigation]);

    usePreventRemove(isLoading, () => {
        console.log("prevent remove");
    });

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
                    colorFilters={[
                        {
                            keypath: "button",
                            color: "#00ff00",
                        },
                        {
                            keypath: "Sending Loader",
                            color: "#F00000",
                        },
                    ]}

                />
            }

            {isLoading &&
                <Animated.View
                    exiting={FadeOut.duration(150)}
                    style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
                >
                    <ActivityIndicator
                        size={70}
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