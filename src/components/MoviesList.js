import React from 'react';
import { TouchableOpacity, ScrollView, View, FlatList, StyleSheet, Text, Image } from 'react-native';
import add_to_favorite from "../../assets/icons/add_to_favorite.png";
import added_to_favorite from "../../assets/icons/add_to_favorite_checked.png";


const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Item',
        image: 'https://observatoriodocinema.uol.com.br/wp-content/uploads/2020/04/Johnny_Depp_Pirates_of_the_Caribbean_Dead_Men_Tell_521035_3840x2160.jpg'
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Second Item',
        image: 'https://observatoriodocinema.uol.com.br/wp-content/uploads/2020/04/Johnny_Depp_Pirates_of_the_Caribbean_Dead_Men_Tell_521035_3840x2160.jpg'
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
        image: 'https://observatoriodocinema.uol.com.br/wp-content/uploads/2020/04/Johnny_Depp_Pirates_of_the_Caribbean_Dead_Men_Tell_521035_3840x2160.jpg'
    },
];

const Item = ({ title, image }) => (
    <View style={styles.item}>
        <Image
            source={{ uri: image }}
            style={{
                width: '100%',
                height: 200,
            }}
        />
        <View style={styles.detailsContainer}>
            <Text style={styles.movieName}>{title}</Text>
            <TouchableOpacity
                style={{
                    width: 32,
                    height: 32,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <Image
                    style={{
                        width: 24,
                        height: 24
                    }}
                    source={add_to_favorite}
                />
            </TouchableOpacity>
        </View>
    </View>
);

const MoviesList = () => {
    const renderItem = ({ item }) => (
        <Item title={item.title} image={item.image} />
    );

    return (
        <View>
            <Text style={styles.pageTitle}>Lista de filmes</Text>
            <FlatList
                nestedScrollEnabled={true}
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    pageTitle: {
        marginTop: 12,
        paddingHorizontal: 12
    },
    item: {
        backgroundColor: '#f9c2ff',
        marginTop: 16,
        marginHorizontal: 12,
        borderRadius: 8,
        overflow: 'hidden',
        borderColor: 'gray',
        elevation: 8
    },
    movieName: {
        flex: 5,
        fontSize: 16,
    },
    detailsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: 12,
        backgroundColor: 'white',
        alignItems: 'center'
    }
});

export default MoviesList;