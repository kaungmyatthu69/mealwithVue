// @ts-ignore
import { createI18n } from 'vue-i18n';
// @ts-ignore
import type { App, InjectionKey, Plugin } from 'vue';

// Define the injection key
export const i18nKey: InjectionKey<Plugin> = Symbol('i18n');

// @ts-ignore
import en from "@/locales/en";
// @ts-ignore
import ch from "@/locales/ch";
// function loadLocaleMessages():LocaleMessages<VueMessageType>{
//     const locales =[{en:en},{ch:ch}]
//     const messages:LocaleMessages<VueMessageType> = {};
//     locales.forEach(lang=>{
//         const key = Object.keys(lang)
//         messages[key[0]]= lang[key[0]]
//     })
//     return messages
// }

export const i18n=  createI18n({
    legacy: false,
    locale:'ch',
    fallbackLocale: 'en',
    messages:{en,ch}
})
export function setupI18n(app: App) {
    app.use(i18n);
    app.provide(i18nKey, i18n);
}
