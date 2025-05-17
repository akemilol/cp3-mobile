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
  danger: "#ce6656"
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.bg,
    padding: 18,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: COLORS.text,
    marginBottom: 14,
    textAlign: "center"
  },
  label: {
    fontSize: 16,
    color: COLORS.text,
    marginTop: 8,
    marginBottom: 2,
    fontWeight: "500"
  },
  input: {
    backgroundColor: COLORS.card,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 10,
    padding: 12,
    marginBottom: 8,
    fontSize: 15,
    color: COLORS.text,
    marginTop: 2
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  scanButton: {
    backgroundColor: COLORS.green,
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 10,
    marginLeft: 10,
    justifyContent: "center"
  },
  scanButtonText: {
    color: COLORS.white,
    fontWeight: "bold",
    fontSize: 15
  },
  picker: {
    backgroundColor: COLORS.card,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 10,
    padding: 8,
    fontSize: 15,
    color: COLORS.text,
    marginBottom: 14,
    marginTop: 2
  },
  mainButton: {
    backgroundColor: COLORS.green,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 14,
    marginTop: 8,
    marginBottom: 8
  },
  mainButtonText: {
    color: COLORS.white,
    fontWeight: "bold",
    fontSize: 16
  },
  cancelButton: {
    backgroundColor: COLORS.danger,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 14,
    marginBottom: 20
  },
  cancelButtonText: {
    color: COLORS.white,
    fontWeight: "bold",
    fontSize: 16
  },
  modalContainer: {
    flex: 1,
    backgroundColor: COLORS.bg
  },
  closeCameraButton: {
    backgroundColor: COLORS.danger,
    alignSelf: "center",
    margin: 18,
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 22
  },
  closeCameraButtonText: {
    color: COLORS.white,
    fontWeight: "bold",
    fontSize: 16
  }
});

export { styles, COLORS };
