# Multilanguage Support for IT Semantic Landing Page

This project now includes comprehensive multilanguage support for German (DE) and English (EN) languages.

## Features

- **Language Switching**: Users can switch between German and English using the language toggle in the header
- **Persistent Storage**: Language preference is saved in localStorage and persists across sessions
- **Complete Coverage**: All text content is now translatable
- **SEO Friendly**: Document language attribute is automatically updated when switching languages

## Components with Multilanguage Support

### 1. Header Component
- Navigation menu items
- Call-to-action buttons
- Language toggle with dropdown

### 2. Hero Component
- Welcome message
- Main title (split into parts for better translation)
- Subtitle and descriptions
- Call-to-action buttons
- Image alt texts
- Statistics and ratings
- Testimonial content

### 3. Services Component
- Service titles and descriptions
- Feature lists for each service category
- All 6 service categories are fully translated

### 4. CTA Component
- Main CTA text
- Trust indicators (duration, commitment, response time)

### 5. Footer Component
- Company description
- Contact information
- Navigation links
- Legal links

### 6. Testimonials Component
- Customer quotes
- Author names, roles, and companies

## How to Use

### For Users
1. **Language Toggle**: Click the globe icon (🌐) in the header to open the language dropdown
2. **Select Language**: Choose between "Deutsch" (German) and "English"
3. **Automatic Switch**: The entire page content will immediately switch to the selected language
4. **Persistent**: Your language choice will be remembered for future visits

### For Developers

#### Adding New Translations
1. **Add to LanguageProvider**: Open `app/components/LanguageProvider.tsx`
2. **Add German Translation**: Add the key-value pair in the `de` section
3. **Add English Translation**: Add the corresponding key-value pair in the `en` section
4. **Use in Component**: Use `t("your.translation.key")` in your component

Example:
```typescript
// In LanguageProvider.tsx
de: {
  "new.section.title": "Neuer Abschnitt Titel",
  // ... other translations
},
en: {
  "new.section.title": "New Section Title",
  // ... other translations
}

// In your component
import { useLanguage } from "./LanguageProvider";

export default function NewComponent() {
  const { t } = useLanguage();
  
  return (
    <h2>{t("new.section.title")}</h2>
  );
}
```

#### Translation Key Naming Convention
Use dot notation with descriptive names:
- `component.section.element`: `hero.welcome`, `services.ai.title`
- `component.section.subsection.element`: `hero.stats.projects`
- `component.section.links.element`: `footer.links.home`

#### Adding New Languages
1. **Add Language Type**: Add the new language code to the `Language` type
2. **Add Translations Object**: Create a new translations object for the language
3. **Update Language Toggle**: Add the new language to the `LanguageToggle` component

## Technical Implementation

### LanguageProvider
- React Context for global language state management
- localStorage persistence
- Hydration-safe rendering
- Automatic document language attribute updates

### useLanguage Hook
```typescript
const { language, setLanguage, t } = useLanguage();

// language: current language code ("de" | "en")
// setLanguage: function to change language
// t: translation function
```

### Language Toggle Component
- Dropdown interface with flags and language names
- Hover-based interaction
- Visual feedback for current selection

## File Structure
```
app/components/
├── LanguageProvider.tsx      # Main language context and translations
├── LanguageToggle.tsx        # Language switching UI component
├── Header.tsx               # Header with language toggle
├── Hero.tsx                 # Hero section with translations
├── Services.tsx             # Services with translations
├── CTA.tsx                  # CTA section with translations
├── Footer.tsx               # Footer with translations
└── Testimonials.tsx         # Testimonials with translations
```

## Best Practices

1. **Always use translation keys**: Never hardcode text in components
2. **Consistent naming**: Follow the established naming convention
3. **Complete coverage**: Ensure both German and English translations exist
4. **Context-aware**: Provide translations that make sense in both languages
5. **Test both languages**: Verify the UI works well in both languages

## Future Enhancements

- **RTL Support**: Add support for right-to-left languages
- **Dynamic Loading**: Load translations on-demand for better performance
- **Translation Management**: External translation file management
- **Auto-detection**: Detect user's browser language automatically
- **More Languages**: Add support for additional languages

## Troubleshooting

### Common Issues
1. **Translation Key Not Found**: Ensure the key exists in both language objects
2. **Hydration Mismatch**: The LanguageProvider handles this automatically
3. **Language Not Persisting**: Check localStorage permissions and browser settings

### Debug Mode
Add console logging to see which translations are being used:
```typescript
const t = (key: TranslationKey): string => {
  const translation = translations[language][key];
  console.log(`Translation for "${key}":`, translation);
  return translation || key;
};
```

## Contributing

When adding new features or components:
1. **Plan translations first**: Design the translation structure before implementing
2. **Add both languages**: Always provide German and English translations
3. **Test thoroughly**: Verify both languages work correctly
4. **Update documentation**: Keep this README updated with new features
