import { useNavigation, usePreventRemove } from "@react-navigation/native";
import React, { useCallback, useRef } from "react";
import { Button, Share, Text, useWindowDimensions, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { captureRef } from "react-native-view-shot";
import * as MediaLibrary from 'expo-media-library';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';

const DonePage = () => {
    const { top, bottom } = useSafeAreaInsets();
    const navigation = useNavigation();
    const viewRef = useRef<View>(null);
    const { width } = useWindowDimensions();

    const onSaveImageAsync = useCallback(async () => {
        try {
            const localUri = await captureRef(viewRef, {
                quality: 1,
                result: "tmpfile",
            });

            await Share.share({
                url: localUri,
                title: "Retiro realizado",
            },);
        } catch (e) {
            console.log(e);
        }
    }, [])


    return (
        <View style={{ paddingTop: top, flex: 1, justifyContent: "space-between", paddingBottom: bottom + 16, backgroundColor: 'rgb(242, 242, 242)' }}>
            <View ref={viewRef} style={{ flex: 2, alignItems: "center", backgroundColor: 'rgb(242, 242, 242)', paddingHorizontal: 24, paddingVertical: 24 }} collapsable={false}>
                <Text>Done</Text>
                <View style={{
                    backgroundColor: "white",
                    width: "100%",
                    borderRadius: 16,
                    marginTop: 24,
                    justifyContent: "center",
                    alignItems: "center",
                    paddingVertical: 16,
                }}>
                    <Text style={{ fontSize: 12, fontWeight: "600", color: "gray" }}>
                        Retiro realizado
                    </Text>
                    <Text style={{ fontSize: 24, fontWeight: "bold", marginTop: 4 }}>
                        $100 ARS
                    </Text>
                    <Text style={{ fontSize: 12, color: "gray", marginTop: 4 }}>
                        10:55 24.07.2025
                    </Text>
                </View>

                <View style={{
                    backgroundColor: "white",
                    width: "100%",
                    borderRadius: 16,
                    marginTop: 24,
                    justifyContent: "center",
                    paddingVertical: 16,
                    paddingHorizontal: 24,
                }}>
                    <Text style={{ fontSize: 12, color: "gray" }}>
                        De
                    </Text>
                    <Text style={{ fontSize: 24, fontWeight: "bold", marginTop: 2 }}>
                        Juan Martin Del Potro
                    </Text>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 16 }}>
                        <Text style={{ fontSize: 12, color: "gray", marginTop: 4, fontWeight: "600" }}>
                            CBU
                        </Text>
                        <Text style={{ fontSize: 12, color: "gray", marginTop: 4 }}>
                            1234567890
                        </Text>
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 0 }}>
                        <Text style={{ fontSize: 12, color: "gray", marginTop: 4, fontWeight: "600" }}>
                            CUIT
                        </Text>
                        <Text style={{ fontSize: 12, color: "gray", marginTop: 4 }}>
                            1234567890
                        </Text>
                    </View>

                    <View
                        style={{
                            flexDirection: "row",
                            justifyContent: "space-evenly",
                            marginTop: 16,
                        }}
                    >
                        {Array.from({ length: 18 }).map((_, idx) => (
                            <View
                                key={idx}
                                style={{
                                    width: 12,
                                    height: 1,
                                    backgroundColor: "#E0E0E0",
                                    marginHorizontal: 3,
                                    borderRadius: 1,
                                }}
                            />
                        ))}
                    </View>

                    <Text style={{ fontSize: 12, color: "gray", alignSelf: "flex-end", marginTop: 16 }}>
                        Para
                    </Text>
                    <Text style={{ fontSize: 24, fontWeight: "bold", marginTop: 2, alignSelf: "flex-end" }}>
                        Charles Leclerc
                    </Text>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 16 }}>
                        <Text style={{ fontSize: 12, color: "gray", marginTop: 4, fontWeight: "600" }}>
                            CBU
                        </Text>
                        <Text style={{ fontSize: 12, color: "gray", marginTop: 4 }}>
                            1234567890
                        </Text>
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 0 }}>
                        <Text style={{ fontSize: 12, color: "gray", marginTop: 4, fontWeight: "600" }}>
                            CUIT
                        </Text>
                        <Text style={{ fontSize: 12, color: "gray", marginTop: 4 }}>
                            1234567890
                        </Text>
                    </View>

                    <View
                        style={{
                            flexDirection: "row",
                            justifyContent: "space-evenly",
                            marginTop: 16,
                        }}
                    >
                        {Array.from({ length: 18 }).map((_, idx) => (
                            <View
                                key={idx}
                                style={{
                                    width: 12,
                                    height: 1,
                                    backgroundColor: "#E0E0E0",
                                    marginHorizontal: 3,
                                    borderRadius: 1,
                                }}
                            />
                        ))}
                    </View>

                    <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 16 }}>
                        <Text style={{ fontSize: 12, color: "gray", marginTop: 4, fontWeight: "600" }}>
                            Concepto
                        </Text>
                        <Text style={{ fontSize: 12, color: "gray", marginTop: 4 }}>
                            VAR
                        </Text>
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 0 }}>
                        <Text style={{ fontSize: 12, color: "gray", marginTop: 4, fontWeight: "600" }}>
                            Entidad
                        </Text>
                        <Text style={{ fontSize: 12, color: "gray", marginTop: 4 }}>
                            Banco de la Nación Argentina
                        </Text>
                    </View>
                </View>

            </View>

            <View style={{ flex: 1, justifyContent: "flex-end" }}>
                <View style={{ justifyContent: "center", alignItems: "center", marginTop: 24, paddingHorizontal: 24 }}>
                    <Button title="Compartir" onPress={onSaveImageAsync} />
                </View>

                <View style={{ justifyContent: "center", alignItems: "center", marginTop: 8, paddingHorizontal: 24 }}>
                    <Button title="Volver" onPress={() => navigation.goBack()} />
                </View>
            </View>
        </View>
    );
};

export default DonePage;