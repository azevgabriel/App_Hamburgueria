import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 2,
    backgroundColor: colors.white
  },
  rowheader:{
    flexDirection:'row',
    marginBottom: 50
  },
  viewheader:{
    width: '70%',
    marginTop: -30
  },
  viewimage:{
    width: '30%',
    marginTop: 50
  },
  image:{
    width: 80,
    height: 80,
    borderRadius:40
  },
  flatlist:{
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 50,
  },
  tab: {
    flex: 0.6,
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
});