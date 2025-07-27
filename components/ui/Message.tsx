import {
  StyleSheet,
  TextInput,
  View,
  TouchableOpacity,
  Pressable,
} from "react-native";
import React from "react";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import useThemeColors from "@/constants/Colors";
;

export default function MessageBox() {
  const text = useThemeColors();
  const barColor = useThemeColors();

  return (
    <View style={styles.container}>
      <View style={[styles.inputBox]}>
        <Ionicons
          name="happy-outline"
          size={24}
          color="gray"
          style={[styles.icon]}
        />
        <TextInput
          style={[styles.textInput]}
          placeholder="Type a message"
          placeholderTextColor="#888"
        />
        <TouchableOpacity>
          <Ionicons
            name="attach"
            size={24}
            color="gray"
            style={styles.iconSet}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons
            name="camera-outline"
            size={24}
            color="gray"
            style={styles.iconSet}
          />
        </TouchableOpacity>
      </View>
      <Pressable style={styles.micButton}>
        <MaterialIcons name="keyboard-voice" size={25} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "flex-end",
    padding: 8,
  },
  inputBox: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 25,
    paddingHorizontal: 10,
    marginRight: 8,
    minHeight: 48,
  },
  icon: {
    marginHorizontal: 2,
  },
  iconSet: {
    marginHorizontal: 6,
  },
  textInput: {
    flex: 1,
    minWidth: 100,
    fontSize: 16,
    paddingVertical: 8,
    paddingHorizontal: 8,
    outlineWidth: 0,
  },
  micButton: {
    backgroundColor: "#25D366",
    borderRadius: 25,
    width: 48,
    height: 48,
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 3px 3px #00000025",
  },
});
