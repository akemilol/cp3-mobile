import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Modal, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CameraView, useCameraPermissions } from 'expo-camera';
import CustomButton from '../components/CustomButton';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { styles, COLORS } from '../styles/CadastroScreenStyle';

export default function CadastroScreen() {
  const router = useRouter();
  const params = useLocalSearchParams();
  const [permission, requestPermission] = useCameraPermissions();

  const [produtoEdit, setProdutoEdit] = useState(null);

  const [nome, setNome] = useState('');
  const [dataFabricacao, setDataFabricacao] = useState('');
  const [validade, setValidade] = useState('');
  const [quantidade, setQuantidade] = useState('');
  const [lote, setLote] = useState('');
  const [codigoBarras, setCodigoBarras] = useState('');
  const [estado, setEstado] = useState('');

  const [cameraVisible, setCameraVisible] = useState(false);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    async function carregarProduto() {
      try {
        if (params.id) {
          const data = await AsyncStorage.getItem('produtos');
          const lista = data ? JSON.parse(data) : [];
          const encontrado = lista.find(p => p.id === params.id);
          if (encontrado) {
            setProdutoEdit(encontrado);
            setNome(encontrado.nome);
            setDataFabricacao(encontrado.dataFabricacao);
            setValidade(encontrado.validade);
            setQuantidade(encontrado.quantidade);
            setLote(encontrado.lote);
            setCodigoBarras(encontrado.codigoBarras);
            setEstado(encontrado.estado);
          }
        }
      } catch (e) {
        console.error('Erro ao carregar produto:', e);
      }
    }

    carregarProduto();
  }, [params.id]);

  function limparCampos() {
    setNome('');
    setDataFabricacao('');
    setValidade('');
    setQuantidade('');
    setLote('');
    setCodigoBarras('');
    setEstado('');
  }

  async function salvarProduto() {
    if (!nome || !dataFabricacao || !validade || !quantidade || !lote || !codigoBarras || !estado) {
      Alert.alert('Preencha todos os campos!');
      return;
    }

    const novoProduto = {
      id: produtoEdit ? produtoEdit.id : Date.now().toString(),
      nome,
      dataFabricacao,
      validade,
      quantidade,
      lote,
      codigoBarras,
      estado,
    };

    try {
      let produtos = await AsyncStorage.getItem('produtos');
      produtos = produtos ? JSON.parse(produtos) : [];

      if (produtoEdit) {
        produtos = produtos.map(p => (p.id === produtoEdit.id ? novoProduto : p));
      } else {
        produtos.push(novoProduto);
      }

      await AsyncStorage.setItem('produtos', JSON.stringify(produtos));
      limparCampos();
      router.back();
    } catch (error) {
      Alert.alert('Erro ao salvar', error.message || String(error));
    }
  }

  const handleBarCodeScanned = ({ type, data }) => {
    setCodigoBarras(data);
    setScanned(true);
    setCameraVisible(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{produtoEdit ? 'Editar Produto' : 'Cadastrar Produto'}</Text>

      <Text style={styles.label}>Nome do Produto</Text>
      <TextInput
        value={nome}
        onChangeText={setNome}
        style={styles.input}
        placeholder="Ex: Maçã Gala"
        placeholderTextColor={COLORS.subtitle}
      />

      <Text style={styles.label}>Data de Fabricação</Text>
      <TextInput
        value={dataFabricacao}
        onChangeText={setDataFabricacao}
        style={styles.input}
        placeholder="dd/mm/aaaa"
        placeholderTextColor={COLORS.subtitle}
      />

      <Text style={styles.label}>Prazo de Validade</Text>
      <TextInput
        value={validade}
        onChangeText={setValidade}
        style={styles.input}
        placeholder="dd/mm/aaaa"
        placeholderTextColor={COLORS.subtitle}
      />

      <Text style={styles.label}>Quantidade</Text>
      <TextInput
        value={quantidade}
        onChangeText={setQuantidade}
        keyboardType="numeric"
        style={styles.input}
        placeholder="Ex: 10"
        placeholderTextColor={COLORS.subtitle}
      />

      <Text style={styles.label}>Lote</Text>
      <TextInput
        value={lote}
        onChangeText={setLote}
        style={styles.input}
        placeholder="Ex: X123B7"
        placeholderTextColor={COLORS.subtitle}
      />

      <Text style={styles.label}>Código de Barras</Text>
      <View style={styles.row}>
        <TextInput
          value={codigoBarras}
          onChangeText={setCodigoBarras}
          style={[styles.input, { flex: 1, marginBottom: 0 }]}
          placeholder="Escaneie ou digite"
          placeholderTextColor={COLORS.subtitle}
        />
        <TouchableOpacity
          onPress={() => {
            setScanned(false);
            setCameraVisible(true);
          }}
          style={styles.scanButton}
        >
          <Text style={styles.scanButtonText}>Escanear</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.label}>Estado de Origem</Text>
      <TextInput
        value={estado}
        onChangeText={setEstado}
        style={styles.input}
        placeholder="Ex: SP"
        placeholderTextColor={COLORS.subtitle}
      />

      <CustomButton
        title={produtoEdit ? 'Salvar Alterações' : 'Cadastrar'}
        color={COLORS.green}
        onPress={salvarProduto}
      />
      <CustomButton
        title="Cancelar"
        color={COLORS.danger}
        onPress={() => router.back()}
      />

      <Modal visible={cameraVisible} animationType="slide">
        <View style={styles.modalContainer}>
          {permission === null ? (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              <Text>Verificando permissão da câmera...</Text>
              <CustomButton title="Permitir" color={COLORS.green} onPress={requestPermission} />
            </View>
          ) : !permission.granted ? (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              <Text>Permissão da câmera não concedida</Text>
              <CustomButton title="Permitir" color={COLORS.green} onPress={requestPermission} />
            </View>
          ) : (
            <CameraView
              style={{ flex: 1 }}
              onBarcodeScanned={scanned ? undefined : handleBarCodeScanned}
            />
          )}
          <CustomButton
            title="Fechar"
            color={COLORS.danger}
            style={styles.closeCameraButton}
            onPress={() => setCameraVisible(false)}
          />
        </View>
      </Modal>
    </View>
  );
}
