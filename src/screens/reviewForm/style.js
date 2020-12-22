import {StyleSheet} from 'react-native'
import {
    HEIGHT,
    COLORS,
    WIDTH,
    FONTS,
    FONT_MEASURMENT,
  } from '../../helper/Constants';
  

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.APP_PRIMARY,
        marginHorizontal: 10,
        marginVertical: 10,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 10,
        fontSize: 18,
        borderRadius: 6,
    },
    // submitBtn: {
    //     backgroundColor: COLORS.ORANGE,
    //     marginVertical: 10,
    //     paddingVertical: 10,
    //     paddingHorizontal: 10,
    //     alignItems: 'center',
    //     borderRadius: 5,
    // },
    // btnText: {
    //     color: COLORS.WHITE,
    //     fontSize: FONT_MEASURMENT.medium,
    //     fontFamily: 'Nunito-Bold',
    // },
    errorsText: {
        color: 'crimson',
        fontWeight: 'bold',
        marginBottom: 10,
        marginTop: 6,
        textAlign: 'center',
    },
});