import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingBottom: 2,
    marginTop: 5
  },
  rowHeader:{
    flexDirection:'row'
  },
  viewheader:{
    width: '70%',
    marginTop: -30
  },
  viewimageADM:{
    width: '30%',
    marginBottom: 39,
    marginTop: 40
  },
  viewimageUser:{
    width: '30%',
    marginBottom: 13,
    marginTop: 40
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
    backgroundColor: '#f2f2f2',
    paddingVertical: 40,
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
    width: '43%',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.white,
    marginRight: 15,
    backgroundColor: colors.darkOrange,
    borderRadius: 8,
    paddingVertical: 10
  },
  buttonModalSair: {
    width: '43%',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.white,
    backgroundColor: '#363535',
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
    color: colors.white
  },
  modalBackground2: {
    backgroundColor: 'rgba(0,0,0,0.7)',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalLogout2: {
    width: '90%',
    backgroundColor: '#f2f2f2',
    paddingVertical: 30,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    borderWidth: 2,
    borderColor: '#990000'
  },
  textModal2: {
    fontFamily: fonts.Jost_400Regular,
    fontSize: 20,
    color: colors.black,
    marginBottom: 15,
    textAlign: 'center'
  },
  buttonModalCancelar2: {
    width: '40%',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.white,
    marginRight: 15,
    backgroundColor: '#990000',
    borderRadius: 8,
    paddingVertical: 10
  },
  textCancelar2: {
    fontFamily: fonts.Jost_400Regular,
    fontSize: 18,
    color: colors.white
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
  textTab: {
    fontFamily: fonts.Jost_400Regular,
    fontSize: 18,
    color: colors.white,
    marginRight: 10
  },
  icons: {
    backgroundColor: colors.black,
    borderRadius: 10,
    borderColor: colors.white,
    borderWidth: 1,
    padding: 8,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,

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

    flex: 0.9,
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