// paginaSenhas.js

import { View, StyleSheet, Text} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export function PaginaSenhas() {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={ESTILO.header}>
                <Text style={ESTILO.title}>
                    Meus ID's
                </Text>
            </View>
        </SafeAreaView>
    )
}

const ESTILO = StyleSheet.create({
    header: {
        padding: 14,
        paddingTop: 58,
        backgroundColor: "#8B2E44"
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#FFF"
    }

})