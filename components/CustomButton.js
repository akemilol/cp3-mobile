import { TouchableOpacity, Text } from 'react-native';

export default function CustomButton({ title, onPress, color, style, textStyle }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        {
          backgroundColor: color || '#9baf8b',
          borderRadius: 10,
          alignItems: 'center',
          justifyContent: 'center',
          paddingVertical: 14,
          marginVertical: 8,
        },
        style
      ]}
      activeOpacity={0.85}
    >
      <Text style={[
        {
          color: '#fff',
          fontWeight: 'bold',
          fontSize: 16,
          letterSpacing: 0.5
        },
        textStyle
      ]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}
