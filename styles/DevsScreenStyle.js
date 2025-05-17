import { StyleSheet } from 'react-native';

const COLORS = {
  bg: "#f7f5ef",
  card: "#fff",
  green: "#9baf8b",
  brown: "#d6895f",
  border: "#e0d6c3",
  text: "#463c27",
  subtitle: "#7e6651",
  white: "#fff",
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.bg,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: COLORS.brown,
    marginBottom: 30,
    textAlign: "center"
  },
  devBox: {
    backgroundColor: COLORS.card,
    alignItems: "center",
    borderRadius: 18,
    padding: 24,
    marginBottom: 24,
    width: 260,
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowOffset: { width: 0, height: 4 },
    elevation: 1,
    borderWidth: 1,
    borderColor: COLORS.border
  },
  devImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 14,
    borderWidth: 2,
    borderColor: COLORS.green,
  },
  devName: {
    fontSize: 16,
    fontWeight: "bold",
    color: COLORS.text,
    textAlign: "center"
  },
  devRm: {
    fontSize: 15,
    color: COLORS.subtitle,
    marginBottom: 2,
    textAlign: "center"
  }
});

export { styles, COLORS };
