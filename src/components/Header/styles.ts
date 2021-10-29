import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    marginTop: 40,
    justifyContent: 'center'
},
container1: {
  flex: 1,
  marginTop: 60,
  justifyContent: 'center'
},
containerHeader: {
  marginLeft: 20,
  flex: 1,
  alignItems :'flex-start'
},
textHeader:{
  color: colors.black,
  fontSize:25,
  fontFamily: fonts.Jost_600SemiBold,
},
textHeaderName:{
  color: colors.black,
  fontSize:25,
  fontWeight: 'bold',
  fontFamily: fonts.Jost_600SemiBold
},
textHeaderName_small:{
  color: colors.black,
  fontSize:20,
  fontWeight: 'bold',
  fontFamily: fonts.Jost_600SemiBold,
},
textSub:{
  fontSize:20,
  color: colors.black,
  fontFamily: fonts.Jost_600SemiBold,
},
textADM:{
  fontSize:20,
  color: 'black',
  fontFamily: fonts.Jost_600SemiBold
},
textSubBold:{
  fontSize:20,
  color: 'black',
  fontWeight: 'bold',
  fontFamily: fonts.Jost_600SemiBold,
},
})