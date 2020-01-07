import { VuexModule, Module, Mutation, Action, getModule } from 'vuex-module-decorators'
import { getSidebarStatus, getSize, setSidebarStatus, setLanguage, setSize } from '@/utils/cookies'
import { getLocale } from '@/lang'
import store from '@/store'

export enum DeviceType { // 自适应
    Mobile, // 手机型号
    Desktop, // 笔记本
  }

export interface AppState {
    device: DeviceType
    sidebar: {
      opened: boolean
      withoutAnimation: boolean
    }
    language: string
    size: string
  }

@Module({dynamic:true,store,name:'app'})
class App extends VuexModule implements AppState{
    public sidebar = {
        opened: getSidebarStatus() !== 'closed',
        withoutAnimation: false
    }
    public device = DeviceType.Desktop
    public language = getLocale()
    public size = getSize() || 'medium'
}
export const AppModule = getModule(App)