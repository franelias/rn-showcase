import { BarcodeScanningResult, CameraView } from "expo-camera";
import React, { useEffect, useState } from "react";
import { Dimensions, Text, View } from "react-native";
import { Svg, Defs, Rect, Mask, G } from 'react-native-svg';

const QRPage = () => {
    let { width, height } = Dimensions.get('window');

    const squareSize = 400;

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
    }

    return (
        <>
            <CameraView
                barcodeScannerSettings={{
                    barcodeTypes: ["qr"],
                }}
                onBarcodeScanned={handleBarcodeScanned}
            >
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
            </CameraView>
        </>
    );
};

export default QRPage;