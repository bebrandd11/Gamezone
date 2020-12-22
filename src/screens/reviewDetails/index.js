import React, { useEffect } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import { styles } from './style'
import { images } from '../../helper/jsonData'
import Card from '../../components/card'

export default function ReviewDetails({ navigation, route }) {

    // useEffect(() => {
    //     const { title, rating, body } = route.params;
    //     console.log("title", title)
    // }, [])

    const renderMainView = () => {
        return (
            <View style={styles.container}>
                {renderComponents()}
            </View>
        )
    }

    /*
    .##........#######...######...####..######...######.
    .##.......##.....##.##....##...##..##....##.##....##
    .##.......##.....##.##.........##..##.......##......
    .##.......##.....##.##...####..##..##........######.
    .##.......##.....##.##....##...##..##.............##
    .##.......##.....##.##....##...##..##....##.##....##
    .########..#######...######...####..######...######.
    */

    /*
    .##....##....###....##.....##.####..######......###....########.####..#######..##....##
    .###...##...##.##...##.....##..##..##....##....##.##......##.....##..##.....##.###...##
    .####..##..##...##..##.....##..##..##.........##...##.....##.....##..##.....##.####..##
    .##.##.##.##.....##.##.....##..##..##...####.##.....##....##.....##..##.....##.##.##.##
    .##..####.#########..##...##...##..##....##..#########....##.....##..##.....##.##..####
    .##...###.##.....##...##.##....##..##....##..##.....##....##.....##..##.....##.##...###
    .##....##.##.....##....###....####..######...##.....##....##....####..#######..##....##
    */

    const pressHandler = () => {
        navigation.goBack();
    }

    /*
    ..######...#######..##.....##.########...#######..##....##.########.##....##.########..######.
    .##....##.##.....##.###...###.##.....##.##.....##.###...##.##.......###...##....##....##....##
    .##.......##.....##.####.####.##.....##.##.....##.####..##.##.......####..##....##....##......
    .##.......##.....##.##.###.##.########..##.....##.##.##.##.######...##.##.##....##.....######.
    .##.......##.....##.##.....##.##........##.....##.##..####.##.......##..####....##..........##
    .##....##.##.....##.##.....##.##........##.....##.##...###.##.......##...###....##....##....##
    ..######...#######..##.....##.##.........#######..##....##.########.##....##....##.....######.
    */

    const renderComponents = () => {
        const { title, rating, body } = route.params;

        return (
            <View>
                <Card>
                    <Text>{title}</Text>
                    <Text>{body}</Text>
                    <View style={styles.rating}>
                        <Text>GameZone rating: </Text>
                        {/* <Text>{rating}</Text> */}
                        <Image source={images.ratings[rating]} />
                    </View>
                </Card>
                {/* <Text>{ navigation.getParam('title') }</Text> */}
                <TouchableOpacity onPress={pressHandler}>
                    <Text>Home</Text>
                </TouchableOpacity>
            </View>
        )
    }

    return (
        renderMainView()
    );
}