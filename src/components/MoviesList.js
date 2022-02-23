import React from 'react';
import { TouchableOpacity, View, FlatList, StyleSheet, Text, Image } from 'react-native';
import add_to_favorite from "../../assets/icons/add_to_favorite.png";

const Item = ({ index, title, image }) => (
    <View key={index} style={[styles.item, {marginTop: index === 0 ? 16 : 0}]}>
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

const MoviesList = ({ data }) => {

    const [total, setTotal] = React.useState(0);

    React.useEffect(() => setTotal(typeof data !== "undefined" ? data.length : 0), [data]);

    const renderItem = (index, item) => {
        return (
            <Item index={index} title={`${item.Title} - ${item.Year}`} image={item.Poster} />
        );
    };

    return (
        <>
            <Text style={styles.pageTitle}>
                {total === 0 ? "Nenhum filme encontrado" : `${total} filmes encontrados`}
            </Text>
            <FlatList
                data={data}
                renderItem={({ item, index }) => {
                    return renderItem(index, item);
                }}
                keyExtractor={item => item.id}
            />
        </>
    );
}

const styles = StyleSheet.create({
    pageTitle: {
        marginTop: 12,
        paddingHorizontal: 12
    },
    item: {
        backgroundColor: '#f9c2ff',
        marginBottom: 16,
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