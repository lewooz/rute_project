import { makeAutoObservable } from "mobx";
import SelectedLanguage from "../enums/selected_language";
import disableScroll from "../functions/disable_scroll";
import UserModel from "../models/user_model";
import { RootStore } from "./root_store/root_store";

export default class ApplicationStore {

    private rootStore: RootStore

    applyingUser: UserModel = new UserModel()

    constructor(rootStore: RootStore) {
        this.rootStore = rootStore
        makeAutoObservable(this)
    }

    editUserModel(key: string, value: any) {
        this.applyingUser[key] = value
    }



}