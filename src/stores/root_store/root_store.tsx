import HomeStore from "../home_store"

export class RootStore {
    homeStore: HomeStore

    constructor() {
        this.homeStore = new HomeStore(this)
    }
}