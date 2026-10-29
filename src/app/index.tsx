import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useRouter } from "expo-router";

export default function Index() {
  const router = useRouter();

  const handleLogout = () => {
    // TODO: Clear auth token from SecureStore once auth is wired
    router.replace("/login");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>bekamKu</Text>
      <Text style={styles.subtitle}>Main Menu</Text>

      {/* TODO: Add real menu content */}
      <View style={styles.placeholder}>
        <Text style={styles.placeholderText}>Menu items go here</Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleLogout}>
        <Text style={styles.buttonText}>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F9FAFB",
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#111827",
    textAlign: "center",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: "#6B7280",
    textAlign: "center",
    marginBottom: 40,
  },
  placeholder: {
    flex: 1,
    width: "100%",
    borderWidth: 1,
    borderStyle: "dashed",
    borderColor: "#D1D5DB",
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 40,
  },
  placeholderText: {
    fontSize: 14,
    color: "#9CA3AF",
  },
  button: {
    backgroundColor: "#4F46E5",
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: "center",
    alignSelf: "stretch",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },
});
