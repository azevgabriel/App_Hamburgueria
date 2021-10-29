import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { UserProps } from '../../global/props';
import {styles} from './styles';

export default function Header( {name, type} : UserProps) {
  var name_lenght_small = true
  if(name){
      if(name.length >= 14){
          name_lenght_small = false;
      }
  }

  const [tipoUser, setTipoUser] = useState(1);

  useEffect(() => {
    fetchUser() // descobre que tipo o usuário é (adm ou comum)
  },[])

  async function fetchUser() {
    if(type == 0) {
        setTipoUser(0);
    }
}
    return(
      <View style={styles.container1}>
        <View style={styles.containerHeader}>
            <Text style={styles.textHeader}>Olá,</Text>
            {
              name_lenght_small
              ?
              <Text style={styles.textHeaderName}>{name}!</Text>
              :
              <Text style={styles.textHeaderName_small}>{name}!</Text>
            }

            {
              tipoUser
                    
              ?
              
              <Text style={styles.textSub}>Veja seus <Text style={styles.textSubBold}>CUPONS!</Text></Text>

              :

              <Text style={styles.textADM}>
                Clique em um {`\n`}
                CUPOM para editar.
              </Text>
            }
            
        </View>
      </View>
       
    )
}