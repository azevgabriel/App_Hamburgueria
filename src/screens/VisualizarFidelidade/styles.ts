import { Dimensions, StyleSheet } from 'react-native';

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      width: '100%'
    },
    box: {
      flex: 9,
      marginHorizontal: '5%',
    },
    textoContainer: {
      flexDirection:'row',
      flex: 0.18,
      alignItems: 'flex-end',
      justifyContent: 'flex-end',
      marginBottom: 10
    },
    texto: {
      color: colors.black,
      fontFamily: fonts.Jost_600SemiBold,
      fontSize: 30
    },
    cupomContainer: {
      flex: 1,
      marginBottom: 20
    },
    tab: {
      flex: 1.1,
      flexDirection: 'row',
  
      justifyContent: 'center',
      alignItems: 'center',
  
      borderTopColor: 'rgba(0,0,0,0.2)',
      borderTopWidth: 2
    },
    spaceTab: {
      flex: 1,
      alignItems: 'center'
    },
    divisor: {
      width: 2,
      height: '60%',
      backgroundColor: colors.shapeGray
    }
})