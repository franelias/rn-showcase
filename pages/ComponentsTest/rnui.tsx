import { View, Text, ScrollView, StyleSheet } from "react-native";
import { useState } from "react";
import {
    Card,
    Button,
    Checkbox,
    Text as UIText,
    Colors,
    Typography,
    Spacings,
    Modal,
    DateTimePicker
} from "react-native-ui-lib";

export const RnUi = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [isCompleted, setIsCompleted] = useState(true);
    const [selectedDate, setSelectedDate] = useState(new Date());

    return (
        <ScrollView style={styles.container}>
            <View style={styles.content}>
                <UIText style={styles.title}>React Native UI Components Showcase</UIText>

                {/* Feature Card */}
                <Card style={styles.card} elevation={4}>
                    <View style={styles.cardHeader}>
                        <UIText style={styles.cardTitle}>Latest Project</UIText>
                    </View>
                    <View style={styles.cardContent}>
                        <UIText style={styles.description}>
                            Built a React Native app using React Native UI for consistent design
                            and smooth animations. The project showcases modern mobile
                            development practices.
                        </UIText>

                        <View style={styles.buttonRow}>
                            <Button
                                label="React Native"
                                outline
                                size={Button.sizes.small}
                                style={styles.tagButton}
                            />
                            <Button
                                label="React Native UI"
                                outline
                                size={Button.sizes.small}
                                style={styles.tagButton}
                            />
                            <Button
                                label="TypeScript"
                                outline
                                size={Button.sizes.small}
                                style={styles.tagButton}
                            />
                        </View>

                        <View style={styles.separator} />

                        <View style={styles.datePickerSection}>
                            <UIText style={styles.sectionTitle}>Project Deadline</UIText>
                            <DateTimePicker
                                value={selectedDate}
                                onChange={setSelectedDate}
                                mode="date"
                                placeholder="Select deadline"
                            />
                        </View>

                        <View style={styles.checkboxRow}>
                            <Checkbox
                                value={isCompleted}
                                onValueChange={setIsCompleted}
                                color={Colors.primary}
                            />
                            <UIText style={styles.checkboxLabel}>
                                Mark project as completed
                            </UIText>
                        </View>

                        <Button
                            label="Open Modal"
                            onPress={() => setModalVisible(true)}
                            style={styles.openModalButton}
                        />
                    </View>
                </Card>
            </View>

            <Modal
                animationType="slide"
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(false);
                }}
                onBackgroundPress={() => setModalVisible(false)}
                overlayBackgroundColor={Colors.overlay20}
            >
                <View style={styles.modalContainer}>
                    <UIText style={styles.modalText}>Modal</UIText>
                    <Button
                        label="Close Modal"
                        onPress={() => setModalVisible(false)}
                        style={styles.closeModalButton}
                    />
                </View>
            </Modal>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    content: {
        padding: Spacings.s4,
        gap: Spacings.s4,
    },
    title: {
        ...Typography.h4,
        textAlign: 'center',
        color: Colors.blue10,
        marginBottom: Spacings.s2,
    },
    card: {
        marginBottom: Spacings.s2,
    },
    cardHeader: {
        padding: Spacings.s4,
        borderBottomWidth: 1,
        borderBottomColor: Colors.grey70,
    },
    cardTitle: {
        ...Typography.h4,
        color: Colors.textPrimary,
    },
    cardContent: {
        padding: Spacings.s4,
        gap: Spacings.s3,
    },
    description: {
        ...Typography.body,
        color: Colors.textSecondary,
        lineHeight: 20,
    },
    buttonRow: {
        flexDirection: 'row',
        gap: Spacings.s2,
        flexWrap: 'wrap',
    },
    tagButton: {
        marginRight: Spacings.s1,
        marginBottom: Spacings.s1,
    },
    separator: {
        height: 1,
        backgroundColor: Colors.grey70,
        marginVertical: Spacings.s2,
    },
    datePickerSection: {
        gap: Spacings.s2,
    },
    sectionTitle: {
        ...Typography.body,
        color: Colors.textPrimary,
        fontWeight: '600',
    },

    checkboxRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: Spacings.s2,
    },
    checkboxLabel: {
        ...Typography.body,
        color: Colors.textPrimary,
        flex: 1,
    },
    openModalButton: {
        marginTop: Spacings.s2,
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.background,
    },
    modalText: {
        ...Typography.h3,
        color: Colors.textPrimary,
        marginBottom: Spacings.s4,
    },
    closeModalButton: {
        marginTop: Spacings.s2,
    },
});

export default RnUi;