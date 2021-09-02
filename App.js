import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import "react-native-gesture-handler";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen name="Home" component={Home} />
                <Drawer.Screen
                    name="StackedScreens"
                    component={StackedScreens}
                />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

export function Home() {
    return (
        <View style={styles.container}>
            <Text>Home</Text>
            <StatusBar style="auto" />
        </View>
    );
}

const screenOptionStyle = {
    headerStyle: {
        backgroundColor: "#9AC4F8",
    },
    headerTintColor: "white",
    headerBackTitle: "Back",
};

export function StackedScreens() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Feed"
                component={Feed}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Article"
                component={Article}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
}

export function Feed({ navigation }) {
    return (
        <View style={styles.container}>
            <Text>Feed</Text>
            <Button
                title="Go to About Screen"
                onPress={() => navigation.navigate("Article")}
            />
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
