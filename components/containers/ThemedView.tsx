import useThemeColors from "@/constants/Colors";
import { View, type ViewProps } from "react-native";

export type ThemedViewProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
  invert?: boolean;
};

export function ThemedView({
  style,
  lightColor,
  darkColor,
  invert,
  ...otherProps
}: ThemedViewProps) {
  const themeColors = useThemeColors();

  const backgroundColor =
    lightColor && darkColor
      ? themeColors.bg // you can build logic here if needed
      : invert
      ? themeColors.secondary
      : themeColors.bg;

  return <View style={[{ backgroundColor }, style]} {...otherProps} />;
}
