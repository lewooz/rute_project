import ApplicationFormStore from "../application_form_store"
import HomeStore from "../home_store"

export class RootStore {
    homeStore: HomeStore
    applicationFormStore: ApplicationFormStore

    constructor() {
        this.homeStore = new HomeStore(this)
        this.applicationFormStore = new ApplicationFormStore(this)
    }
}