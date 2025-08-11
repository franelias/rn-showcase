import { BarcodeScanningResult, CameraView } from "expo-camera";
import React, { useEffect, useState } from "react";
import { Text, useWindowDimensions, View } from "react-native";
import { Svg, Defs, Rect, Mask, G } from 'react-native-svg';
import { StackActions, useNavigation } from "@react-navigation/native";
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";

const QRScanPage = () => {
    const navigation = useNavigation<any>();

    const { width, height } = useWindowDimensions()

    const squareSize = width - 100;

    const qrColors = ["green", "#3483fa", "red", "#ffe600"]

    const [qrColorIndex, setQrColorIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setQrColorIndex((prevIndex) => {
                if (prevIndex === qrColors.length - 1) {
                    return 0;
                } else {
                    return prevIndex + 1;
                }
            });
        }, 1500);

        return () => clearInterval(interval);
    }, []);

    const handleBarcodeScanned = (event: BarcodeScanningResult) => {
        console.log(event);
        opacity.value = withTiming(0, { duration: 200 });

        setTimeout(() => {
            navigation.dispatch(
                StackActions.replace('QRResultPage', { data: event.data, raw: event.raw })
            );
        }, 300);
    }

    const opacity = useSharedValue(1);

    const animatedStyle = useAnimatedStyle(() => {
        return {
            opacity: opacity.value,
        }
    })

    return (
        <Animated.View style={animatedStyle}>
            <CameraView
                barcodeScannerSettings={{
                    barcodeTypes: ["qr"],
                }}
                onBarcodeScanned={handleBarcodeScanned}
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    width: "100%",
                    height: "100%",
                }}

            />
            <Svg
                height={height}
                width={width}
                pointerEvents='none'>
                <G>
                    <Defs>
                        <Mask id={`clip`} >
                            <Rect fill="#fff" width='100%' height='100%' />
                            <Rect rx={20} ry={20} width={squareSize} height={squareSize} x={width / 2 - squareSize / 2} y={height / 2 - squareSize / 2} stroke='white' strokeWidth='2' />
                        </Mask>
                    </Defs>
                    <Rect width='100%' height='100%'
                        fill="rgba(0,0,0,1)" fillOpacity='.8' mask={`url(#clip)`} />
                </G>
            </Svg>
            <Text style={{
                color: "white",
                fontSize: 14,
                position: "absolute",
                top: height / 2 + squareSize / 2 + 48,
                left: 0,
                right: 0,
                bottom: 0,
                zIndex: 1000,
                textAlign: "center",
            }}>Pagá cualquier{' '}
                <Text style={{ color: qrColors[qrColorIndex] }}>QR</Text> {'\n'}
                {' '}y recibí cashback en{' '}
                <Text style={{ color: "orange" }}>BTC</Text>
            </Text>
        </Animated.View>
    );
};

export default QRScanPage;