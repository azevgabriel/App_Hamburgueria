import { Platform, StyleSheet } from 'react-native';

import colors from '../../styles/colors';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: colors.swampGreen,
        paddingTop: Platform.OS === 'android' ? 15 : 0,
    }
})