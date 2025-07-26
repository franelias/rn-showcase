import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome } from "@expo/vector-icons";
import Animated, { FadeIn, FadeOut, LinearTransition, useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";

type PickItemProps = {
    checked: boolean;
    onPress: () => void;
    label: string;
};

const PickItem: React.FC<PickItemProps> = ({ label, checked, onPress }) => {

    const containerStyle = useAnimatedStyle(() => {
        return {
            borderRadius: 32,
            height: 40,
            justifyContent: "center",
            alignItems: "center",
            borderWidth: 1,
            borderColor: checked ? "#ff6347" : "grey",
            flexDirection: "row",
            backgroundColor: checked ? "#ff63474d" : "transparent"
        }
    }, [checked])


    const textStyle = useAnimatedStyle(() => {
        return {
            color: checked ? "#ff6347" : "grey",
            fontSize: 16,
            fontWeight: "bold",
            paddingLeft: 24,
            paddingRight: checked ? 10 : 24
        }
    }, [checked])

    return (
        <Animated.View
            layout={LinearTransition.springify().mass(0.8)} // This indicates that every layout change will be animated
            style={containerStyle}
            onTouchEnd={onPress}
        >
            <Animated.Text
                style={textStyle}
            >{label}
            </Animated.Text>
            {checked &&
                <Animated.View
                    style={[{ paddingRight: 8 }]}
                    entering={FadeIn.duration(350)}
                    exiting={FadeOut.duration(200)}
                >
                    <FontAwesome name="check-circle" size={24} color="#ff6347" />
                </Animated.View>
            }
        </Animated.View>
    );
};

const PickAnimatedPage = () => {
    const [selectedItem, setSelectedItem] = useState<string | null>(null);

    return (
        <SafeAreaView style={{ flex: 1, paddingHorizontal: 16, paddingTop: 16, backgroundColor: "black" }}>
            <Text style={{ fontSize: 24, fontWeight: "bold", alignSelf: "center", color: "white" }}>Please select one item</Text>
            <View style={{ flexDirection: "row", gap: 16, flexWrap: "wrap", marginTop: 24 }}>
                {Array.from({ length: 10 }).map((_, index) => (
                    <PickItem
                        key={index}
                        label={index.toString()}
                        checked={selectedItem === index.toString()}
                        onPress={() => selectedItem === index.toString() ? setSelectedItem(null) : setSelectedItem(index.toString())} />
                ))}
            </View>
        </SafeAreaView>
    );
};

export default PickAnimatedPage;