import en from './langs/en.json';
import fr from './langs/fr.json';

export const languages = {
  en: 'English',
  fr: 'Français',
};

export const defaultLang = 'en';

export const ui = {
  en,
  fr,
} as const;
