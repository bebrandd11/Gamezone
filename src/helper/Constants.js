import {Dimensions} from 'react-native';

export const COLORS = {
  APP_PRIMARY: '#FFF',
  WORKICON_COLOR: '#777779',
  LIGHT_GRAY: '#EEE',
  WHITE: '#fff',
  BLACK: '#000',
  BLUE: '#284AAD',
  GREEN: '#63B04A',
  ORANGE: '#F86C44',
  HEADER_BG_COLOR: '#FDF9F2',
};

export const STOCK_ANIMATION = 'bounceInDown';

export const HEIGHT = Dimensions.get('window').height;
export const WIDTH = Dimensions.get('window').width;

export const FONT_MEASURMENT = {
  verylarge: 30,
  title: 18,
  // subtitle: 16,
  large: 20,
  medium: 16,
  small: 14,
  verysmall: 12,
};

export const FONTS = {
  REGULAR: 'Nunito-Regular',
  EXTRA_BOLD: 'Nunito-ExtraBold',
  BOLD: 'Nunito-Bold',
};