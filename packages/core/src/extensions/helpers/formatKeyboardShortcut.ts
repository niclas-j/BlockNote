const isAppleOS = () =>
  /Mac/.test(navigator.platform) ||
  (/AppleWebKit/.test(navigator.userAgent) &&
    /Mobile\/\w+/.test(navigator.userAgent));

export default function formatKeyboardShortcut(shortcut: string) {
  if (isAppleOS()) {
    return shortcut.replace("Mod", "⌘");
  } else {
    return shortcut.replace("Mod", "Ctrl");
  }
}
