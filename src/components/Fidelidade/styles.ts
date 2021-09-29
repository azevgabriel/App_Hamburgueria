import { StyleSheet } from 'react-native';

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'center',
    display: 'flex',
    alignItems: 'stretch',
    flexDirection: 'row',
    marginBottom: 10,
    marginRight: 40
  },
  aside: {
    flex: 2,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 5
  },
  textoNivel: {
    fontFamily: fonts.Jost_600SemiBold
  },
  mainGray: {
    flex: 8,

    display: 'flex',
    alignItems: 'stretch',
    flexDirection: 'row',

    backgroundColor: colors.shapeGray,
    color: colors.white,
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderWidth: 2,
    borderColor: colors.borderGray
  },
  mainOrange: {
    flex: 8,

    display: 'flex',
    alignItems: 'stretch',
    flexDirection: 'row',

    backgroundColor: colors.softOrange,
    color: colors.black,
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderWidth: 2,
    borderColor: colors.darkOrange
  },
  image: {
    flex: 2,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10
  },
  text: {
    flex: 6,
  },
  textoCardGray: {
    fontFamily: fonts.Jost_400Regular,
    fontSize: 15,
    color: colors.borderGray,
  },
  textoCardOrange: {
    fontFamily: fonts.Jost_400Regular,
    fontSize: 15,
    color: colors.black
  }
})