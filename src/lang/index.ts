import VueI18n from 'vue-i18n'
import Vue from 'vue'
import { getLanguage } from '@/utils/cookies'

import elementEnLocale from 'element-ui/lib/locale/lang/en'
import elementZhLocale from 'element-ui/lib/locale/lang/zh-CN'

import zhLocale from './zh'
import enLocale from './en'

Vue.use(VueI18n)

const messages = {
    zh : {
        ...zhLocale,  // 自定义文件中的
        ...elementZhLocale // element-ui 内部支持中文的组件
    },
    en : {
        ...enLocale,  // 自定义文件中的
        ...elementEnLocale // element-ui 内部支持中文的组件
    }
}


export const getLocale = ()=>{
    const getCookieLanguage = getLanguage()
    if(getCookieLanguage){
        return getCookieLanguage
    }

    const language = navigator.language.toLowerCase()
    const locales = Object.keys(messages)
    for (const locale of locales) {
        if(language.indexOf(locale) > -1){
            return locale
        }
    }

    return 'en'
}

const i18n = new VueI18n({
    locale:getLocale(),
    messages
})

export default i18n