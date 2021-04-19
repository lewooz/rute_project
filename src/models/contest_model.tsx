import { makeAutoObservable } from "mobx"

export default class ContestModel {
    contestId: string
    contestName: string
    contestEntryPrice: number
    contestDescription: string
    contestImage: string

    constructor(
        contestId: string = "",
        contestName: string = "",
        contestEntryPrice: number = 0,
        contestDescription: string = "",
        contestImage: string = ""
    ) {
        this.contestId = contestId
        this.contestName = contestName
        this.contestEntryPrice = contestEntryPrice
        this.contestDescription = contestDescription
        this.contestImage = contestImage
        makeAutoObservable(this)
    }

    static from(json: any) {
        return Object.assign(new ContestModel(), json);
    }
}