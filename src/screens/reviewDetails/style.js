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
        paddingVertical: 20,
        paddingHorizontal: 20,
    },
    rating: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 16,
        marginTop: 16,
        borderTopWidth: 1,
        borderTopColor: '#eee',
    },
});