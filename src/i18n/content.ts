import es from '../translation/es/global.json';
import en from '../translation/en/global.json';
export const locales = ['es', 'en'] as const;
export type Locale = typeof locales[number];
export const messages = { es, en };
export function getLocale(value: string | undefined): Locale { return value === 'en' ? 'en' : 'es'; }
