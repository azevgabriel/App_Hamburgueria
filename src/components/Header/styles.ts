import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    marginTop: 40, //Coloquei uma altura que achei interessante, mas podem mudar depois!
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
  color: 'black',
  fontSize:25,
},
textHeaderName:{
  color: 'black',
  fontSize:25,
  fontWeight: 'bold',
},
textSub:{
  fontSize:20,
  color: 'black',
},
textSubBold:{
  fontSize:20,
  color: 'black',
  fontWeight: 'bold',
},
})