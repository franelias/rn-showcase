import { ImageSVG, LinearGradient, Rect, Skia, vec } from '@shopify/react-native-skia';
import { Canvas } from '@shopify/react-native-skia';
import type { PropsWithChildren, ReactElement } from 'react';
import { StyleSheet, useWindowDimensions, View } from 'react-native';
import Animated, {
    interpolate,
    useAnimatedRef,
    useAnimatedStyle,
    useDerivedValue,
    useScrollViewOffset,
    interpolateColor,
} from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const HEADER_HEIGHT = 247;

type Props = PropsWithChildren<{
    headerImage: ReactElement;
}>;

export default function ParallaxScrollView({
    children,
    headerImage,
}: Props) {
    const scrollRef = useAnimatedRef<Animated.ScrollView>();
    const scrollOffset = useScrollViewOffset(scrollRef);
    const { bottom } = useSafeAreaInsets();
    const { width, height } = useWindowDimensions();

    const headerAnimatedStyle = useAnimatedStyle(() => {
        return {
            transform: [
                {
                    translateY: interpolate(
                        scrollOffset.value,
                        [-HEADER_HEIGHT, 0, HEADER_HEIGHT],
                        [-HEADER_HEIGHT / 2, 0, HEADER_HEIGHT * 0.75]
                    ),
                },
            ],
        };
    });

    const leftColorStart = "rgba(119, 60, 215, 1)";
    const leftColorEnd = "#FF6F61";
    const rightColorStart = "rgba(48, 20, 88, 1)";
    const rightColorEnd = "#6B5B95";

    const colors = useDerivedValue(() => {
        const left = interpolateColor(
            scrollOffset.value,
            [0, 500],
            [leftColorStart, leftColorEnd]
        );
        const right = interpolateColor(
            scrollOffset.value,
            [0, 500],
            [rightColorStart, rightColorEnd]
        );
        return [left, right];
    });

    return (
        <>
            <Canvas style={{ flex: 1, position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }}>
                <Rect x={0} y={0} width={width} height={height * 0.68}>
                    <LinearGradient
                        start={vec(0, 0)}
                        end={vec(width, 200)}
                        colors={colors}
                    />
                </Rect>
            </Canvas>
            <View style={styles.container}>
                <Animated.ScrollView
                    ref={scrollRef}
                    scrollEventThrottle={16}
                    scrollIndicatorInsets={{ bottom }}
                    contentContainerStyle={{ paddingBottom: bottom, backgroundColor: "transparent" }}
                    showsVerticalScrollIndicator={false}
                    bounces={false}
                >
                    <Animated.View
                        style={[
                            styles.header,
                            headerAnimatedStyle,
                        ]}>
                        {headerImage}
                    </Animated.View>
                    <View style={styles.content}>{children}</View>
                </Animated.ScrollView>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "transparent",
    },
    header: {
        height: HEADER_HEIGHT,
    },
    content: {
        flex: 1,
        paddingTop: 32,
        gap: 16,
        overflow: 'hidden',
    },
});

