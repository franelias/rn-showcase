import { defaultConfig } from "@tamagui/config/v4";
import { View, Text, ScrollView, Alert, Modal } from "react-native"
import { useState } from "react";
import { Card, createTamagui, TamaguiProvider, Avatar, Button, XStack, YStack, H4, Paragraph, Separator, Checkbox, Label } from "tamagui";

const config = createTamagui(defaultConfig)

export const Tamagui = () => {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <TamaguiProvider config={config}>
            <ScrollView style={{ flex: 1, backgroundColor: '#f5f5f5' }}>
                <YStack padding="$4" gap="$4">
                    <H4 textAlign="center" color="$blue10">Tamagui Components Showcase</H4>

                    {/* Feature Card */}
                    <Card elevate size="$4" bordered>
                        <Card.Header padded>
                            <H4>Latest Project</H4>
                        </Card.Header>
                        <YStack padding="$4" gap="$3">
                            <Paragraph>
                                Built a React Native app using Tamagui for consistent design
                                and smooth animations. The project showcases modern mobile
                                development practices.
                            </Paragraph>
                            <XStack gap="$2">
                                <Button size="$2" variant="outlined">React Native</Button>
                                <Button size="$2" variant="outlined">Tamagui</Button>
                                <Button size="$2" variant="outlined">TypeScript</Button>
                            </XStack>

                            <Separator />

                            <XStack gap="$3" alignItems="center">
                                <Checkbox id="completed" checked />
                                <Label htmlFor="completed">
                                    Mark project as completed
                                </Label>
                            </XStack>
                            <Button onPress={() => setModalVisible(true)}>Open Modal</Button>
                        </YStack>
                    </Card>
                </YStack>

                <Modal
                    animationType="slide"
                    visible={modalVisible}
                    onRequestClose={() => {
                        setModalVisible(false);
                    }}>
                    <YStack style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                        <Text>Modal</Text>
                        <Button onPress={() => setModalVisible(false)}>Close Modal</Button>
                    </YStack>
                </Modal>
            </ScrollView>
        </TamaguiProvider >
    )
}

export default Tamagui;