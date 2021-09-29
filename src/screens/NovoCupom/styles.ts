import { Dimensions, Platform, StyleSheet } from 'react-native';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

const largura = Dimensions.get('window').width;
const altura = Dimensions.get('window').height;

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? 15 : 0,
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
    },
    back:{
        width:largura,
        bottom:altura/50,
        left:largura*0.05,
    },
    components:{
        flex: 1,
        width: '90%',
        height: '100%',
        marginBottom: '5%',
        marginHorizontal: '5%',
        flexDirection: 'column',
        justifyContent: 'space-around',
    },
    titleInput: {
        color: colors.darkGray,
        fontFamily: fonts.Jost_600SemiBold,
        marginTop: 10,
        fontSize: 16,
    },
    input: {
        height: 60,
        borderWidth: 3,
        padding: 10,
        borderColor: colors.shapeGray,
        borderRadius: 4
      }
})