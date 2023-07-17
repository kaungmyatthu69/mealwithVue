import {createI18n} from "vue-i18n";
import en from "@/locales/en.json";
import ch from "@/locales/ch.json";
function loadLocaleMessages(){
    const locales =[{en:en},{ch:ch}]
    const messages = {};
    locales.forEach(lang=>{
        const key = Object.keys(lang)
        messages[key]= lang[key]
    })
    return messages
}

export default  createI18n({
    locale:'ch',
    fallbackLocale: 'en',
    messages:loadLocaleMessages()
})