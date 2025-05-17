import React, { useState } from 'react';
import { View, Text, FlatList, Alert } from 'react-native';
import { useRouter, useFocusEffect } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ProductCard from '../components/ProductCard';
import CustomButton from '../components/CustomButton';
import { styles, COLORS } from '../styles/HomeScreenStyle';

export default function HomeScreen() {
  const [produtos, setProdutos] = useState([]);
  const router = useRouter();

  useFocusEffect(
    React.useCallback(() => {
      carregarProdutos();
    }, [])
  );

  async function carregarProdutos() {
    let dados = await AsyncStorage.getItem('produtos');
    dados = dados ? JSON.parse(dados) : [];
    setProdutos(dados);
  }

  async function deletarProduto(id) {
    Alert.alert(
      "Excluir produto",
      "Tem certeza que deseja excluir este produto?",
      [
        { text: "Cancelar", style: "cancel" },
        {
          text: "Excluir",
          style: "destructive",
          onPress: async () => {
            let novos = produtos.filter(prod => prod.id !== id);
            setProdutos(novos);
            await AsyncStorage.setItem('produtos', JSON.stringify(novos));
          }
        }
      ]
    );
  }

  const renderItem = ({ item }) => (
    <ProductCard
      produto={item}
      onPress={() => router.push({ pathname: '/cadastro', params: { id: item.id } })}
      onDelete={() => deletarProduto(item.id)}
    />
  );

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.bg }}>
      <FlatList
        data={produtos}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        ListEmptyComponent={
          <Text style={{ textAlign: 'center', marginTop: 40, color: COLORS.subtitle }}>
            Nenhum produto cadastrado.
          </Text>
        }
        contentContainerStyle={{ padding: 16, paddingBottom: 140 }}
      />
      <View style={styles.footer}>
        <CustomButton
          title="CADASTRAR NOVO PRODUTO"
          color={COLORS.green}
          onPress={() => router.push('/cadastro')}
        />
        <CustomButton
          title="SOBRE OS DESENVOLVEDORES"
          color={COLORS.brown}
          style={{ marginTop: 12 }}
          onPress={() => router.push('/devs')}
        />
      </View>
    </View>
  );
}
