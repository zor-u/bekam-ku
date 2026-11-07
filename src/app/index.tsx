import { useRouter } from "expo-router";
import { useState } from "react";
import {
  Animated,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const router = useRouter();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [drawerPosition] = useState(() => new Animated.Value(1));

  const openDrawer = () => {
    setIsDrawerOpen(true);
    Animated.timing(drawerPosition, {
      toValue: 0,
      duration: 220,
      useNativeDriver: true,
    }).start();
  };

  const closeDrawer = () => {
    Animated.timing(drawerPosition, {
      toValue: 1,
      duration: 180,
      useNativeDriver: true,
    }).start(({ finished }) => {
      if (finished) setIsDrawerOpen(false);
    });
  };

  const handleLogout = () => {
    // TODO: Clear auth token from SecureStore once auth is wired
    closeDrawer();
    router.replace("/login");
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.navbar}>
        <Text style={styles.brand}>bekamKu</Text>

        <TouchableOpacity
          accessibilityLabel="Open menu"
          accessibilityRole="button"
          style={styles.menuButton}
          onPress={openDrawer}
        >
          <View style={styles.menuIconBar} />
          <View style={styles.menuIconBar} />
          <View style={styles.menuIconBar} />
        </TouchableOpacity>
      </View>

      <View style={styles.container}>
        <Text style={styles.title}>Main Menu</Text>
        <Text style={styles.subtitle}>Pick a section to get started</Text>

        {/* TODO: Add real menu content */}
        <View style={styles.placeholder}>
          <Text style={styles.placeholderText}>Menu items go here</Text>
        </View>

        <TouchableOpacity style={styles.button} onPress={handleLogout}>
          <Text style={styles.buttonText}>Log Out</Text>
        </TouchableOpacity>
      </View>

      <Modal
        animationType="none"
        transparent
        visible={isDrawerOpen}
        onRequestClose={closeDrawer}
      >
        <View style={styles.drawerOverlay}>
          <Pressable
            accessibilityLabel="Close menu"
            accessibilityRole="button"
            style={styles.backdrop}
            onPress={closeDrawer}
          />

          <Animated.View
            style={[
              styles.drawer,
              {
                transform: [
                  {
                    translateX: drawerPosition.interpolate({
                      inputRange: [0, 1],
                      outputRange: [0, 340],
                    }),
                  },
                ],
              },
            ]}
          >
            <View style={styles.drawerHeader}>
              <Text style={styles.drawerTitle}>Account</Text>
              <TouchableOpacity
                accessibilityLabel="Close menu"
                accessibilityRole="button"
                onPress={closeDrawer}
              >
                <Text style={styles.closeButton}>Close</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.userCard}>
              <View style={styles.avatar}>
                <Text style={styles.avatarText}>A</Text>
              </View>
              <View style={styles.userDetails}>
                <Text style={styles.userName}>Alif</Text>
                <Text style={styles.userEmail}>alif@gmail.com</Text>
              </View>
            </View>

            <View style={styles.menuSection}>
              <Text style={styles.menuSectionTitle}>Menu</Text>

              <TouchableOpacity
                accessibilityRole="button"
                style={styles.menuItem}
                onPress={closeDrawer}
              >
                <Text style={styles.menuItemText}>Client</Text>
              </TouchableOpacity>
              <TouchableOpacity
                accessibilityRole="button"
                style={styles.menuItem}
                onPress={closeDrawer}
              >
                <Text style={styles.menuItemText}>History</Text>
              </TouchableOpacity>
              <TouchableOpacity
                accessibilityRole="button"
                style={styles.menuItem}
                onPress={closeDrawer}
              >
                <Text style={styles.menuItemText}>Schedule</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              accessibilityRole="button"
              style={styles.drawerLogout}
              onPress={handleLogout}
            >
              <Text style={styles.drawerLogoutText}>Log Out</Text>
            </TouchableOpacity>
          </Animated.View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#F9FAFB",
  },
  navbar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#FFFFFF",
    borderBottomWidth: 1,
    borderBottomColor: "#E5E7EB",
    paddingHorizontal: 24,
    paddingVertical: 12,
  },
  brand: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#111827",
  },
  menuButton: {
    width: 44,
    height: 44,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  menuIconBar: {
    width: 22,
    height: 2,
    borderRadius: 1,
    backgroundColor: "#374151",
    marginVertical: 2.5,
  },
  container: {
    flex: 1,
    backgroundColor: "#F9FAFB",
    paddingHorizontal: 24,
    paddingTop: 32,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#111827",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: "#6B7280",
    marginBottom: 24,
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
    marginBottom: 24,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },
  drawerOverlay: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "rgba(17, 24, 39, 0.35)",
  },
  backdrop: {
    flex: 1,
  },
  drawer: {
    width: "82%",
    maxWidth: 360,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 20,
    paddingTop: 56,
    paddingBottom: 24,
    shadowColor: "#111827",
    shadowOffset: { width: -4, height: 0 },
    shadowOpacity: 0.16,
    shadowRadius: 12,
    elevation: 8,
  },
  drawerHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 24,
  },
  drawerTitle: {
    color: "#111827",
    fontSize: 22,
    fontWeight: "700",
  },
  closeButton: {
    color: "#6B7280",
    fontSize: 14,
    fontWeight: "600",
  },
  userCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F9FAFB",
    borderColor: "#E5E7EB",
    borderRadius: 14,
    borderWidth: 1,
    padding: 14,
  },
  avatar: {
    alignItems: "center",
    backgroundColor: "#E0E7FF",
    borderRadius: 22,
    height: 44,
    justifyContent: "center",
    width: 44,
  },
  avatarText: {
    color: "#4338CA",
    fontSize: 18,
    fontWeight: "700",
  },
  userDetails: {
    flex: 1,
    marginLeft: 12,
  },
  userName: {
    color: "#111827",
    fontSize: 16,
    fontWeight: "700",
    marginBottom: 3,
  },
  userEmail: {
    color: "#6B7280",
    fontSize: 13,
  },
  menuSection: {
    marginTop: 36,
  },
  menuSectionTitle: {
    color: "#9CA3AF",
    fontSize: 12,
    fontWeight: "700",
    letterSpacing: 0.8,
    marginBottom: 10,
    textTransform: "uppercase",
  },
  menuItem: {
    borderRadius: 10,
    minHeight: 48,
    justifyContent: "center",
    paddingHorizontal: 12,
  },
  menuItemText: {
    color: "#374151",
    fontSize: 16,
    fontWeight: "600",
  },
  drawerLogout: {
    borderColor: "#FECACA",
    borderRadius: 10,
    borderWidth: 1,
    marginTop: "auto",
    minHeight: 48,
    justifyContent: "center",
    alignItems: "center",
  },
  drawerLogoutText: {
    color: "#DC2626",
    fontSize: 15,
    fontWeight: "700",
  },
});
