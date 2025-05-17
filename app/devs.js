import { View, Text, Image } from 'react-native';
import { styles } from '../styles/DevsScreenStyle';

export default function DevsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Desenvolvedores</Text>
      <View style={styles.devBox}>
        <Image
          source={require('../assets/img/valeria.jpg')}
          style={styles.devImage}
        />
        <Text style={styles.devName}>Valéria Conceição dos Santos</Text>
        <Text style={styles.devRm}>RM: 557177</Text>
      </View>
      <View style={styles.devBox}>
        <Image
          source={require('../assets/img/mirela.jpg')}
          style={styles.devImage}
        />
        <Text style={styles.devName}>Mirela Pinheiro Silva Rodrigues</Text>
        <Text style={styles.devRm}>RM: 558191</Text>
      </View>
    </View>
  );
}