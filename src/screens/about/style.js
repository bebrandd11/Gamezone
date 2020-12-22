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
});