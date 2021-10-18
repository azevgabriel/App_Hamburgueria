import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { styles } from './styles';
import colors from '../../styles/colors';

export default function QRScanner(props) {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({type, data}) => {
    setScanned(true);
    props.onCodeScanned(type, data);
  };

  if (hasPermission === null) {
    return <Text style={styles.text}>Aceite a permissão para poder usar a câmera!</Text>

  }
  if (hasPermission === false) {
    return <Text style={styles.text}>Permissão negada pelo usuário</Text>

  }

  return (
    <View style={styles.container}>
      
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />

      <View
        style={styles.square}
      />
      
    </View>
  );
}