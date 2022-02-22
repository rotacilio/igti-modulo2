import React from "react";
import {
    View,
} from "react-native";
import SearchMovie from "../components/SearchMovie";
import MoviesList from "../components/MoviesList";

const Home = () => {
    return (
        <View>
            <SearchMovie />
            <MoviesList />
        </View>
    );
}

export default Home;