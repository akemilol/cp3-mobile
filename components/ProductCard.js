import { View, Text, TouchableOpacity } from 'react-native';
import { styles, COLORS } from '../styles/HomeScreenStyle';

export default function ProductCard({ produto, onPress, onDelete }) {
  return (
    <View style={styles.produtoCard}>
      <TouchableOpacity style={{ flex: 1 }} onPress={onPress} activeOpacity={0.85}>
        <Text style={styles.produtoTitulo}>{produto.nome}</Text>
        <Text style={styles.produtoSub}>
          Validade: <Text style={styles.produtoDestaque}>{produto.validade}</Text>
        </Text>
        <Text style={styles.produtoSub}>
          Quantidade: <Text style={styles.produtoDestaque}>{produto.quantidade}</Text>
        </Text>
        <Text style={styles.produtoSub}>
          Cód. Barras: <Text style={styles.produtoDestaque}>{produto.codigoBarras}</Text>
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onDelete} style={styles.deleteButton}>
        <Text style={{ color: COLORS.white, fontWeight: "bold" }}>Excluir</Text>
      </TouchableOpacity>
    </View>
  );
}