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
    }
})