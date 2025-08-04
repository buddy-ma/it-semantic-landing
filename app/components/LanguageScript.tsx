'use client';

interface LanguageScriptProps {
  storageKey?: string;
  defaultLanguage?: string;
}

export function LanguageScript({ 
  storageKey = 'it-semantic-language',
  defaultLanguage = 'de'
}: LanguageScriptProps) {
  const script = `
    (function() {
      try {
        var language = localStorage.getItem('${storageKey}') || '${defaultLanguage}';
        if (language === 'de' || language === 'en') {
          document.documentElement.lang = language;
        } else {
          document.documentElement.lang = '${defaultLanguage}';
        }
      } catch (error) {
        document.documentElement.lang = '${defaultLanguage}';
      }
    })();
  `;

  return (
    <script
      dangerouslySetInnerHTML={{ __html: script }}
    />
  );
}