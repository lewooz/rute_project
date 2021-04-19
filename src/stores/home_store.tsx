import { makeAutoObservable } from "mobx";
import Platform from "../enums/platform";
import SelectedLanguage from "../enums/selected_language";
import disableScroll from "../functions/disable_scroll";
import { RootStore } from "./root_store/root_store";

export default class HomeStore {

    private rootStore: RootStore

    currentPlatform: Platform

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
        this.openingVideoAnimationPlayed = status;
    }
    setCurrentPlatform(platform: Platform) {
        this.currentPlatform = platform
    }

    ///MOBILE_ONLY
    isSocialLinksOpen: boolean = false

    toggleSocialLinks() {
        this.isSocialLinksOpen = !this.isSocialLinksOpen
        disableScroll(this.isSocialLinksOpen ? true : false)
    }
}