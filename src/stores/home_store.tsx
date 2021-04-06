import { makeAutoObservable } from "mobx";
import SelectedLanguage from "../enums/selected_language";
import disableScroll from "../functions/disable_scroll";
import { RootStore } from "./root_store/root_store";

export default class HomeStore {

    private rootStore: RootStore

    isDrawerOpen: boolean = false
    openingVideoAnimationPlayed: boolean = false
    selectedLanguage: SelectedLanguage = SelectedLanguage.TR

    constructor(rootStore: RootStore) {
        this.rootStore = rootStore
        makeAutoObservable(this)
    }

    toggleDrawer() {
        this.isDrawerOpen = !this.isDrawerOpen
        disableScroll(this.isDrawerOpen ? true : false)
    }

    setSelectedLanguage(language: SelectedLanguage) {
        this.selectedLanguage = language
    }
    setOpeningAnimationVideoPlayStatus(status: boolean) {
        setTimeout(() => {
            this.openingVideoAnimationPlayed = status;
        }, 6000);
    }


}