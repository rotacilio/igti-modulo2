import React from "react";
import {
    View,
    StyleSheet
} from "react-native";
import Home from "../screens/Home";

class MainComponent extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Home />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 24,
        backgroundColor: "white"
    }
});

export default MainComponent;