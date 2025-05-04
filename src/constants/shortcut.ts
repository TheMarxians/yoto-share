import { usePlatformDetect } from '@/composables/usePlatformDetect';
import type { ModifierKeyString } from '@/types/shortcut';

const { isMacOS } = usePlatformDetect();

// Shortcut string separator
export const SHORTCUT_STRING_SEPARATOR = '+';

/**
 * Map of modifier keys to their string representations
 */
export const modifierKeyStringMap: ModifierKeyString = {
  ctrl: isMacOS ? '⌘' : 'Ctrl',
  control: isMacOS ? '⌘' : 'Ctrl',
  alt: isMacOS ? '⌥' : 'Alt',
  shift: isMacOS ? '⇧' : 'Shift',
  meta: isMacOS ? '⌘' : 'Meta',
  cmd: isMacOS ? '⌘' : 'Cmd',
  command: isMacOS ? '⌘' : 'Command',
};
