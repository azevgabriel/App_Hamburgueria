import { StyleSheet } from "react-native";
import colors from "../../styles/colors";
import fonts from "../../styles/fonts";

export const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        margin: 15,
        marginTop: 30,
        paddingBottom: 40
    },
    row: {
        width: '100%',
        height: '10%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    column: {
        width: '100%',
        height: '20%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        color: colors.darkGray,
        fontStyle: "italic",
    },
    label: {
        fontSize: 20,
        fontFamily: fonts.Jost_600SemiBold,
        color: colors.darkGray,
    },
    input: {
        width: '100%',
        height: '80%',
        textAlignVertical: 'top',
        borderWidth: 1,
        borderColor: colors.darkGray,
        borderRadius: 5,
        padding: 5,
        fontSize: 20,
        fontFamily: fonts.Jost_400Regular,
        color: colors.darkGray,
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