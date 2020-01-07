import Vue from 'vue'
import Vuex from 'vuex'
import { AppState } from './modules/app'

Vue.use(Vuex)

export interface RootState {
  app: AppState // 关于应用方法的模块
  // user: IUserState
  // tagsView: ITagsViewState
  // errorLog: IErrorLogState
  // permission: IPermissionState
  // settings: ISettingsState
}

export default new Vuex.Store<RootState>({})
