import React, {useState} from "react";
import {
    Text,
    TextInput,
    TouchableOpacity,
    View,
    StyleSheet
} from "react-native";

const SearchMovie = ({ onClick }) => {

    const [text, onChangeText] = useState(null);

    return (
        <View style={{ paddingHorizontal: 12 }}>
            <Text>Buscar por título</Text>
            <View style={styles.searchView}>
                <TextInput
                    style={styles.input}
                    placeholder="Digite o nome do filme"
                    value={text}
                    onChangeText={onChangeText}
                />
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => onClick(text)}
                >
                    <Text style={styles.buttonText} >
                        Buscar
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    searchView: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 12,
    },
    input: {
        flex: 3,
        height: 40,
        backgroundColor: "#EEEEEE",
        borderRadius: 6,
        borderColor: "gray",
        borderWidth: 1,
        paddingLeft: 12,
        marginRight: 6
    },
    button: {
        flex: 1,
        marginLeft: 6,
        backgroundColor: '#01579B',
        borderRadius: 6,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        color: 'white'
    }
});

export default SearchMovie;