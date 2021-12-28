import React, { useState } from 'react';

import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import { CupomProps, UserCupomProps } from '../../global/props';

import icon1 from "../../assets/cuponsImages/icon1.jpg";
import icon2 from "../../assets/cuponsImages/icon2.jpg";
import icon3 from "../../assets/cuponsImages/icon3.jpg";
import icon4 from "../../assets/cuponsImages/icon4.jpg";
import icon5 from "../../assets/cuponsImages/icon5.jpg";
import icon6 from "../../assets/cuponsImages/icon6.jpg";
import icon7 from "../../assets/cuponsImages/icon7.jpg";
import icon8 from "../../assets/cuponsImages/icon8.jpg";
import icon9 from "../../assets/cuponsImages/icon9.png";
import icon10 from "../../assets/cuponsImages/icon10.jpg";
import icon11 from "../../assets/cuponsImages/icon11.png";
import icon12 from "../../assets/cuponsImages/icon12.png";
import icon13 from "../../assets/cuponsImages/icon13.jpg";
import icon14 from "../../assets/cuponsImages/icon14.jpg";
import icon15 from "../../assets/cuponsImages/icon15.png";
import icon16 from "../../assets/cuponsImages/icon16.png";
import icon17 from "../../assets/cuponsImages/icon17.jpg";
import icon18 from "../../assets/cuponsImages/icon18.png";
import icon19 from "../../assets/cuponsImages/icon19.jpg";
import icon20 from "../../assets/cuponsImages/icon20.jpg";
import icon21 from "../../assets/cuponsImages/icon21.jpg";
import icon22 from "../../assets/cuponsImages/icon22.jpg";
import icon23 from "../../assets/cuponsImages/icon23.png";
import icon24 from "../../assets/cuponsImages/icon24.jpg";
import icondefault from "../../assets/cuponsImages/icondefault.jpg";
import star from "../../assets/star.png";
import { styles } from './styles';

interface Cupom_UserCupomProps extends TouchableOpacityProps {
  user_cupom?: UserCupomProps;
  cupom: CupomProps;
}

export function Cupom({ user_cupom, cupom, ...rest }: Cupom_UserCupomProps) {
  var title_lenght_small = true

  if (cupom.title) {
    if (cupom.title.length >= 18) {
      title_lenght_small = false;
    }
  }

  function getImage() {
    switch (cupom.image) {
      case 'icon1':
        return icon1;
        break
      case 'icon2':
        return icon2;
        break
      case 'icon3':
        return icon3;
        break
      case 'icon4':
        return icon4;
        break
      case 'icon5':
        return icon5;
        break
      case 'icon6':
        return icon6;
        break
      case 'icon7':
        return icon7;
        break
      case 'icon8':
        return icon8;
        break
      case 'icon9':
        return icon9;
        break
      case 'icon10':
        return icon10;
        break
      case 'icon11':
        return icon11;
        break
      case 'icon12':
        return icon12;
        break
      case 'icon13':
        return icon13;
        break
      case 'icon14':
        return icon14;
        break
      case 'icon15':
        return icon15;
        break
      case 'icon16':
        return icon16;
        break
      case 'icon17':
        return icon17;
        break
      case 'icon18':
        return icon18;
        break
      case 'icon19':
        return icon19;
        break
      case 'icon20':
        return icon20;
      case 'icon21':
        return icon21;
        break
      case 'icon22':
        return icon22;
        break
      case 'icon23':
        return icon23;
        break
      case 'icon24':
        return icon24;
        break
      default:
        return icondefault;
    }

  }
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <View style={styles.hamburguinhos}>

        <Text style={styles.HamIconText}>
          🍔 {cupom.burgers_added}
        </Text>
        <Text style={styles.HamIconText}>
          {
            user_cupom
              ?
              <Text>
                x{user_cupom.remaining_uses}
              </Text>
              :
              <Text></Text>
          }
        </Text>
      </View>
      <View style={styles.ImageView}>
        {
          cupom.fidelity
            ?
            <Image style={styles.image} source={star} />
            :
            <Image style={styles.image} source={getImage()} />
        }
      </View>
      <View style={styles.titleText}>
        {
          title_lenght_small
            ?
            <Text style={styles.title}>
              {cupom.title}
            </Text>
            :
            <Text style={styles.title_small}>
              {cupom.title}
            </Text>
        }

      </View>

      <View style={styles.bodyText}>
        <Text style={styles.day}>
          {
            (cupom.expiration_date?.toUpperCase() != 'NULL' && cupom.expiration_date != '' && cupom.expiration_date != null)
              ?
              'até dia ' + cupom.expiration_date
              :
              'Tempo Ilimitado'
          }
        </Text>
      </View>
    </TouchableOpacity>
  );
}