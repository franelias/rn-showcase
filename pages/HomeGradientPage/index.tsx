import React from "react";
import { useWindowDimensions, View, Text, ScrollView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import ParallaxScrollView from "../../components/ParallaxScrollView";

const HomeGradientPage = () => {
    const { width, height } = useWindowDimensions();

    const { top } = useSafeAreaInsets();

    return (
        <>
            <View style={{ position: "absolute", width: width, height: height, backgroundColor: "white" }} />
            <ParallaxScrollView
                headerImage={
                    <View style={{ paddingTop: top + 24, paddingHorizontal: 24 }}>
                        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                            <View style={{ width: 40, height: 40, backgroundColor: "#E4DCEF", opacity: 0.1, borderRadius: 20 }} />
                            <View style={{ width: 120, height: 40, backgroundColor: "#E4DCEF", opacity: 0.1, borderRadius: 32 }} />
                        </View>
                        <View style={{ width: 86, height: 17, backgroundColor: "#E4DCEF", opacity: 0.1, borderRadius: 32, marginTop: 16 }} />
                        <View style={{ width: 173, height: 42, backgroundColor: "#E4DCEF", opacity: 0.1, borderRadius: 32, marginTop: 4 }} />
                        <View style={{ flexDirection: "row", gap: 16, marginTop: 56, justifyContent: "space-between", paddingHorizontal: 24 }}>
                            <View style={{ width: 48, height: 48, backgroundColor: "#E4DCEF", opacity: 0.1, borderRadius: 24 }} />
                            <View style={{ width: 48, height: 48, backgroundColor: "#E4DCEF", opacity: 0.1, borderRadius: 24 }} />
                            <View style={{ width: 48, height: 48, backgroundColor: "#E4DCEF", opacity: 0.1, borderRadius: 24 }} />
                            <View style={{ width: 48, height: 48, backgroundColor: "#E4DCEF", opacity: 0.1, borderRadius: 24 }} />
                        </View>
                    </View>
                }
            >
                <View style={{ marginTop: 56, backgroundColor: "white", borderRadius: 32, paddingHorizontal: 24 }}>
                    <Text style={{ fontSize: 18, fontWeight: "bold", color: "black", marginTop: 24 }}>Title 1</Text>
                    <View style={{ height: 64, borderWidth: 1, borderColor: "#E4DCEF", borderRadius: 16, marginTop: 8 }} />
                    <Text style={{ fontSize: 18, fontWeight: "bold", color: "black", marginTop: 32 }}>Title 2</Text>

                    <ScrollView
                        horizontal
                        style={{ marginTop: 16, marginLeft: -24, marginRight: -24 }}
                        showsHorizontalScrollIndicator={false}
                        bounces={false}
                        contentContainerStyle={{ flexDirection: "row", gap: 16, paddingLeft: 24, paddingRight: 24, height: 31 }}
                    >
                        <View style={{ width: 83, height: 31, borderRadius: 24, borderWidth: 1, borderColor: "#E4DCEF" }} />
                        <View style={{ width: 83, height: 31, borderRadius: 24, borderWidth: 1, borderColor: "#E4DCEF" }} />
                        <View style={{ width: 83, height: 31, borderRadius: 24, borderWidth: 1, borderColor: "#E4DCEF" }} />
                        <View style={{ width: 83, height: 31, borderRadius: 24, borderWidth: 1, borderColor: "#E4DCEF" }} />
                        <View style={{ width: 83, height: 31, borderRadius: 24, borderWidth: 1, borderColor: "#E4DCEF" }} />
                    </ScrollView>
                    <View style={{ height: 272, borderWidth: 1, borderColor: "#E4DCEF", borderRadius: 16, marginTop: 16 }} />

                    <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 16, alignItems: "center" }}>
                        <Text style={{ fontSize: 18, fontWeight: "bold", color: "black" }}>Title 3</Text>
                        <Text style={{ fontSize: 14, fontWeight: "bold", color: "black" }}>Subtitle 3</Text>
                    </View>
                    <View style={{ height: 212, borderWidth: 1, borderColor: "#E4DCEF", borderRadius: 16, marginTop: 16 }} />


                    <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 16, alignItems: "center" }}>
                        <Text style={{ fontSize: 18, fontWeight: "bold", color: "black" }}>Title 4</Text>
                        <Text style={{ fontSize: 14, fontWeight: "bold", color: "black" }}>Subtitle 4</Text>
                    </View>
                    <View style={{ height: 212, borderWidth: 1, borderColor: "#E4DCEF", borderRadius: 16, marginTop: 16 }} />
                </View>
            </ParallaxScrollView >
        </>
    );
};

export default HomeGradientPage;