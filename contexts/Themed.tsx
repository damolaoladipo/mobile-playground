import { Text as DefaultText, View as DefaultView, TextProps as RNTextProps, ViewProps as RNViewProps } from 'react-native';
import useThemeColors from '@/constants/Colors';

type TextProps = RNTextProps & {
  colorKey?: keyof ReturnType<typeof useThemeColors>; // Optional key like 'icon', 'bg', etc.
};

type ViewProps = RNViewProps & {
  bgKey?: keyof ReturnType<typeof useThemeColors>; // Optional key for background color
};

export function Text(props: TextProps) {
  const { style, colorKey = 'icon', ...otherProps } = props;
  const colors = useThemeColors();
  const colorValue = Array.isArray(colors[colorKey]) ? colors[colorKey][0] : colors[colorKey];

  return <DefaultText style={[{ color: colorValue }, style]} {...otherProps} />;
}

export function View(props: ViewProps) {
  const { style, bgKey = 'bg', ...otherProps } = props;
  const colors = useThemeColors();
  const backgroundColor = Array.isArray(colors[bgKey]) ? colors[bgKey][0] : colors[bgKey];

  return <DefaultView style={[{ backgroundColor }, style]} {...otherProps} />;
}
