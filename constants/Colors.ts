import { useTheme } from "@/contexts/ThemeContext";


export const useThemeColors = () => {
  const { isDark } = useTheme();

  return {
    icon: isDark ? 'white' : 'black',
    bg: isDark ? '#171717' : '#ffffff',
    invert: isDark ? '#000000' : '#ffffff',
    secondary: isDark ? '#323232' : '#F5F5F5',
    gradient: isDark ? ['#222', '#444'] : ['#efefef', '#ffffff'],
  };
};

export default useThemeColors;