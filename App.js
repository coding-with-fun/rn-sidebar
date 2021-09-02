import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import "react-native-gesture-handler";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

const Drawer = createDrawerNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen name="Feed" component={Feed} />
                <Drawer.Screen name="Article" component={Article} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

export function Feed() {
    return (
        <View style={styles.container}>
            <Text>Feed</Text>
            <StatusBar style="auto" />
        </View>
    );
}

export function Article() {
    return (
        <View style={styles.container}>
            <Text>Article</Text>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
