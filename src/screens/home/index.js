import React, { useState } from 'react'
import { FlatList, Keyboard, Modal, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'

import { MaterialIcons } from '@expo/vector-icons';

import { styles } from './style'
import Header from '../../components/header'
import Card from '../../components/card';
import ReviewForm from '../reviewForm/index'

export default function Home({ navigation }) {
    const [modalOpen, setModalOpen] = useState(false);

    const [reviews, setReviews] = useState([
        { title: 'Zelda, Breath of Fresh Air', rating: 5, body: 'Lorem ipsum', key: '1' },
        { title: 'Gotta Catch Them All (again)', rating: 4, body: 'Lorem ipsum', key: '2' },
        { title: 'Not so "Final" Fantasy', rating: 3, body: 'Lorem ipsum', key: '3' },
    ]);

    const addReview = (review) => {
        review.key = Math.random(), toString();
        setReviews((currentReviews) => {
            return [review, ...currentReviews];
        });
        // let arr = []
        // reviews.forEach(item => {
        //     arr.push(item);
        // })

        // arr = [...reviews]
        setModalOpen(false);
    }

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

    const pressHandler = () => {
        navigation.navigate('ReviewDetails');
    }

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
                <Modal visible={modalOpen} animationType='slide'>
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                        <View style={styles.modalContent}>
                            <MaterialIcons
                                name="close"
                                size={24}
                                color="black"
                                style={{ ...styles.modalToggle, ...styles.modalClose }}
                                onPress={() => setModalOpen(false)}
                            />
                            <ReviewForm addReview={addReview} />
                        </View>
                    </TouchableWithoutFeedback>
                </Modal>
                <MaterialIcons
                    name="add"
                    size={24}
                    color="black"
                    style={styles.modalToggle}
                    onPress={() => setModalOpen(true)}
                />
                <FlatList
                    data={reviews}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails', { title: item.title, rating: item.rating, body: item.body })}>
                                <Card>
                                    <Text>{item.title}</Text>
                                </Card>
                            </TouchableOpacity>
                        )
                    }}
                />
                <TouchableOpacity onPress={() => navigation.navigate('About')}>
                    <Text>about</Text>
                </TouchableOpacity>
            </View>
        )
    }

    return (
        renderMainView()
    );
}