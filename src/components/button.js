import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import {
    HEIGHT,
    COLORS,
    WIDTH,
    FONTS,
    FONT_MEASURMENT,
  } from '../helper/Constants';

export default function Button({text, onPress}) {
    return (
        <TouchableOpacity onPress={onPress} style={styles.submitBtn} >
            <Text style={styles.btnText}>{text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    submitBtn: {
        backgroundColor: COLORS.ORANGE,
        marginVertical: 10,
        paddingVertical: 10,
        paddingHorizontal: 10,
        alignItems: 'center',
        borderRadius: 5,
    },
    btnText: {
        color: COLORS.WHITE,
        fontSize: FONT_MEASURMENT.medium,
        fontFamily: 'Nunito-Bold',
    },
})
