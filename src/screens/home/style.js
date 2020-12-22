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
    },
    componentView: {
        paddingVertical: 20,
        paddingHorizontal: 20,
    },
    text: {
        fontFamily: 'Nunito-Bold',
    },
    header: {
        width: '100%',
        height: '10%',
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
    modalToggle: {
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#f2f2f2',
        padding: 10,
        borderRadius: 10,
        alignSelf: 'center',
    },
    modalClose: {
        marginTop: 20,
        marginBottom: 0,
    },
    modalContent: {
        flex: 1,
    },
});