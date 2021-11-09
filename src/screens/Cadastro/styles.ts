import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    margin: 15,
    marginTop: 30,
    paddingBottom: 40
  },
  viewTitle: {
    flex: 1,
  },
  viewPhoto: {
    flex: 3
  },
  viewButton: {
    flex: 2
  },
  text: {
    fontSize: 25,
    fontFamily: fonts.Jost_600SemiBold,
    color: colors.darkGray,
    marginTop: 10,
    marginBottom: 20,
  },
  viewInput: {
    marginBottom: 20,
    marginTop: 20,
    flex: 12
  },
  titleInput: {
    color: colors.darkGray,
    fontFamily: fonts.Jost_600SemiBold,
    marginTop: 10,
    marginBottom: 2
  },
  input: {
    height: 50,
    borderWidth: 3,
    padding: 10,
    borderColor: colors.shapeGray,
    borderRadius: 4
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
  }
})