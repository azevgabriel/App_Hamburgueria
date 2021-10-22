import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';

export const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingBottom: 2,
    marginTop: 20
  },

  rowheader:{
    flexDirection:'row',
  },
  viewheader:{
    width: '70%',
    marginTop: -30
  },
  viewimage:{
    width: '30%',
    marginTop: 50,
  },
  image:{
    width: 80,
    height: 80,
    borderRadius:40
  },
  cuponsContainer: {
    flex: 8.5,
  },
  flatlist:{
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 50,
  },
  QRCode: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: '5%',
    borderTopColor: 'rgba(0,0,0,0.2)',
    borderTopWidth: 2,
  },
  inputQRCode: {
    backgroundColor: colors.white,
    borderRadius: 10,
    borderColor: colors.darkGray,
    borderWidth: 1,
    textAlign: 'center',
    flex: 7,
    height: 40,
    marginRight: 10
  },
  icons: {
    backgroundColor: colors.black,
    borderRadius: 10,
    borderColor: colors.white,
    borderWidth: 1,
    padding: 5,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5

  },
  QRModal: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: 'rgba(0,0,0,0.95)'
  },
  cancelButton: {
    marginBottom: 40
  },
  cancelX: {
    color: colors.white,
    fontSize: 30
  },
  tabAdm: {
    flexDirection: 'row',

    justifyContent: 'center',
    alignItems: 'center',

    flex: 1.3,
  },
  tabUser: {
    flexDirection: 'row',

    justifyContent: 'center',
    alignItems: 'center',
    borderTopColor: 'rgba(0,0,0,0.2)',
    borderTopWidth: 2,
    flex: 1.3,
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