import React from 'react'
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'

import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';

export default function Header() {
    const navigation = useNavigation();

    const openMenu = () => {
        navigation.toggleDrawer();
    }

    return (
        <View style={styles.header}>
            <ImageBackground source={require('../../assets/game_bg.png')} style={styles.headerBackgrounImage}>
                {/* icon for the menu */}
                <MaterialIcons name="menu" size={30} color="black" style={styles.icon} onPress={openMenu} />
                <View style={styles.headerTitle}>
                    <Image source={require('../../assets/heart_logo.png')} style={styles.headerImage} />
                    <Text style={styles.headerText}>GameZone</Text>
                </View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: '10%',
    },
    headerBackgrounImage: {
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#eee',
        elevation: 10,
    },
    headerText: {
        fontFamily: 'Nunito-Bold',
        fontSize: 20,
        color: '#333',
        letterSpacing: 1,
    },
    icon: {
        position: 'absolute',
        left: 15,
    },
    headerTitle: {
        flexDirection: 'row',
    },
    headerImage: {
        width: 26,
        height: 26,
        marginHorizontal: 10,
    },
});
