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
  produtoCard: {
    backgroundColor: COLORS.card,
    borderRadius: 18,
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
    shadowColor: "#000",
    shadowOpacity: 0.07,
    shadowOffset: { width: 0, height: 3 },
    elevation: 2,
    borderWidth: 1,
    borderColor: COLORS.border
  },
  produtoTitulo: {
    fontSize: 18,
    fontWeight: "700",
    color: COLORS.text,
    marginBottom: 6
  },
  produtoSub: {
    fontSize: 15,
    color: COLORS.subtitle,
    marginBottom: 2
  },
  produtoDestaque: {
    color: COLORS.green,
    fontWeight: "600"
  },
  deleteButton: {
    marginLeft: 16,
    backgroundColor: COLORS.danger,
    paddingHorizontal: 18,
    paddingVertical: 9,
    borderRadius: 8,
    alignSelf: "center"
  },
footer: {
    position: 'absolute',
    left: 0, right: 0, bottom: 0,
    backgroundColor: COLORS.bg,
    paddingHorizontal: 18,
    paddingVertical: 18,
    borderTopWidth: 1,
    borderTopColor: COLORS.border
},
footerButton: {
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: "center",
    justifyContent: "center"
},
footerButtonText: {
    color: COLORS.white,
    fontWeight: "bold",
    fontSize: 16,
    letterSpacing: 0.5
}
});

export { styles, COLORS };
