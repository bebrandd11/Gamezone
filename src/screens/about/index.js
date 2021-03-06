import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { styles } from './style'
import Header from '../../components/header'

export default function About() {
    const renderMainView = () => {
        return (
            <View style={styles.container}>
                {renderHeader()}
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

    /*
    .##.....##.########....###....########..########.########.
    .##.....##.##.........##.##...##.....##.##.......##.....##
    .##.....##.##........##...##..##.....##.##.......##.....##
    .#########.######...##.....##.##.....##.######...########.
    .##.....##.##.......#########.##.....##.##.......##...##..
    .##.....##.##.......##.....##.##.....##.##.......##....##.
    .##.....##.########.##.....##.########..########.##.....##
    */

    const renderHeader = () => {
        return (
            <Header />
        )
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
        return (
            <View style={styles.componentView}>
                <Text>about</Text>
            </View>
        )
    }

    return (
        renderMainView()
    );
}