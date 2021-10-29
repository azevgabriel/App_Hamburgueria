import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingBottom: 2,
    marginTop: 10
  },
  rowHeaderADM:{
    flex: 3.1,
    flexDirection:'row'
  },
  rowHeaderUser:{
    flex: 2.4,
    flexDirection:'row'
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
    borderRadius:40,
    position: 'absolute'
  },
  logout: {
    borderColor: colors.darkGray,
    width: 35,
    borderRadius: 40,
    borderWidth: 1,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 60,
    left: 55,
    backgroundColor: colors.white
  },
  modalBackground: {
    backgroundColor: 'rgba(0,0,0,0.7)',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalLogout: {
    width: '90%',
    backgroundColor: colors.white,
    paddingVertical: 60,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    borderWidth: 2,
    borderColor: colors.darkOrange
  },
  textModal: {
    fontFamily: fonts.Jost_400Regular,
    fontSize: 20,
    color: colors.black,
    marginBottom: 15
  },
  buttonModalCancelar: {
    width: '42%',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.darkGray,
    marginRight: 15,
    backgroundColor: colors.darkOrange,
    borderRadius: 8,
    paddingVertical: 10
  },
  buttonModalSair: {
    width: '42%',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.darkGray,
    backgroundColor: colors.shapeGray,
    borderRadius: 8,
    paddingVertical: 10
  },
  textCancelar: {
    fontFamily: fonts.Jost_400Regular,
    fontSize: 18,
    color: colors.white
  },
  textSim: {
    fontFamily: fonts.Jost_400Regular,
    fontSize: 18,
    color: colors.black
  },
  cuponsContainer: {
    flex: 8.5
  },
  flatlist:{
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 5,
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

    flex: 1,
  },
  tabUser: {
    flexDirection: 'row',

    justifyContent: 'center',
    alignItems: 'center',
    borderTopColor: 'rgba(0,0,0,0.2)',
    borderTopWidth: 2,
    flex: 1.15,
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