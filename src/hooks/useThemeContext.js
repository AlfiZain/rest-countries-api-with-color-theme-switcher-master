import { useContext } from 'react';
import ThemeContext from '../contexts/ThemeContext';

export default function useThemeContext() {
  return useContext(ThemeContext);
}
