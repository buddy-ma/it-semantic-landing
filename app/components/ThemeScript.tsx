/**
 * Theme Script Component
 * 
 * This component injects a script to prevent flash of unstyled content (FOUC)
 * by applying the theme class before React hydrates.
 * 
 * Should be placed in the <head> of your document.
 */
export function ThemeScript({ storageKey = 'it-semantic-theme' }: { storageKey?: string }) {
  const script = `
    (function() {
      try {
        var theme = localStorage.getItem('${storageKey}') || 'system';
        var root = document.documentElement;
        
        root.classList.remove('light', 'dark');
        
        if (theme === 'system') {
          var systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
          root.classList.add(systemTheme);
        } else {
          root.classList.add(theme);
        }
      } catch (e) {
        // Fallback to light theme if there's an error
        document.documentElement.classList.add('light');
      }
    })();
  `;

  return <script dangerouslySetInnerHTML={{ __html: script }} />;
}