import ApplicationStore from "../application_store"
import HomeStore from "../home_store"

export class RootStore {
    homeStore: HomeStore
    applicationStore: ApplicationStore

    constructor() {
        this.homeStore = new HomeStore(this)
        this.applicationStore = new ApplicationStore(this)
    }
}