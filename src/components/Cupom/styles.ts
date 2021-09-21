import { StyleSheet, Dimensions } from 'react-native';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export const styles = StyleSheet.create({
  container: {
    height: 180,
    width: ((Dimensions.get('window').width)/2) - 15,
    borderWidth: 2,
    borderStyle: 'dashed',
    borderRadius: 1,
    backgroundColor: colors.shapeGray,
    borderColor: colors.borderGray,
    padding: 5,
    margin: 5
  },
  image:{
    width: '98%', 
    height: 100,
    borderWidth: 2,
    borderColor: colors.borderGray,
    borderRadius: 60
  },
  hamburguinhos:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 2,
  },
  HamIconText:{
    fontFamily: fonts.Jost_400Regular,
  },
  ImageView:{
    justifyContent:'center',
    alignItems:'center'
  },
  titleText:{
    flex: 1,
    alignItems: 'center',
  },
  bodyText:{
    flex: 1,
    alignItems: 'flex-end',
  },
  title:{
    marginVertical:5,
    fontFamily:fonts.Jost_600SemiBold,
    fontSize: 16
  },
  day:{
    fontFamily:fonts.Jost_400Regular,
    fontSize: 10,
    color: 'red',
    alignItems:'center',
  }
});