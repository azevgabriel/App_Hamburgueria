import { Dimensions, Platform, StyleSheet,  } from 'react-native';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

const largura = Dimensions.get('window').width;
const altura = Dimensions.get('window').height;

export const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        flexDirection: 'column',
        width: '100%',
        marginTop: 20
},
    back: {
        width: largura,
        bottom: altura / 50,
        left: largura * 0.05,
    },
    components: {
        flex: 1,
        width: '90%',
        height: '100%',
        marginBottom: '5%',
        marginHorizontal: '5%',
        flexDirection: 'column',
        justifyContent: 'space-around',
    },
    userContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    titleInput: {
        color: colors.darkGray,
        fontFamily: fonts.Jost_600SemiBold,
        marginTop: 10,
        fontSize: 16,
    },
    input: {
        height: 40,
        borderWidth: 3,
        padding: 10,
        borderColor: colors.shapeGray,
        borderRadius: 4
    },
    plus: {
        width: 40,
        height: 40,
        borderRadius: 20,
        borderColor: 'blue',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.white,
        marginTop: -45,
        marginLeft: 130,
        shadowColor: colors.black,
        shadowOpacity: 1,
        shadowRadius: 6,
        elevation: 7
    },
    iconPlus: {
        fontSize: 30,
        color: colors.green
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
      },
      modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
      },
      buttonChoose: {
        backgroundColor: colors.softOrange,
        margin: 10,
        borderRadius: 20,
        padding: 10,
        elevation: 2
      },
      containerSetter:{
        width: '100%',
        flexDirection: 'column',
        paddingTop: Platform.OS === 'android' ? 15 : 0,
        alignItems: 'center',
        justifyContent: 'center',
    },
    setterContainer:{
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    button:{
        height: 50,
        width: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: colors.borderGray,
        borderRadius: 3,
    },
    displayNumber:{
        height: 50,
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: colors.borderGray,
        borderRadius: 3
    },
    buttonText:{
        color: colors.borderGray,
        fontSize: 27,
    },
    displayNumberText:{
        color: colors.borderGray,
        fontSize: 20,
    },
    title:{
        marginBottom: 7,
    }
})