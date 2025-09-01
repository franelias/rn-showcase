import { View, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { createTamagui, TamaguiProvider } from "tamagui";
import { defaultConfig } from '@tamagui/config/v4' // for quick config install this


export const ComponentsTest = () => {
    const navigation = useNavigation();

    return (
        <View style={{ paddingHorizontal: 24, paddingTop: 24 }}>
            <Button
                title="Tamagui"
                onPress={() => navigation.navigate("Tamagui" as never)}
            />
            <Button
                title="RnUi"
                onPress={() => navigation.navigate("RnUi" as never)}
            />
        </View>

    )
}

export default ComponentsTest;