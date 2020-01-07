import Cookies from 'js-cookie'

// 设置侧边栏状态
const SiderBarStatusKey = 'siderbar_status'
export const getSidebarStatus = () => Cookies.get(SiderBarStatusKey)
export const setSidebarStatus = (siderbarStatus:string) => Cookies.set(SiderBarStatusKey,siderbarStatus) 

// 设置语言
const LanguageKey = 'language'
export const getLanguage = () => Cookies.get(LanguageKey)
export const setLanguage = (Language:string) => Cookies.set(LanguageKey,Language)

const sizeKey = 'size'
export const getSize = () => Cookies.get(sizeKey)
export const setSize = (size:string) => Cookies.set(sizeKey,size)