import { makeAutoObservable } from "mobx"
import ContestModel from "../contest_model"

export default class UserQuestionsModel {
    contests: Array<ContestModel>
    joinedAnotherContestBefore: boolean
    didModelingBefore: boolean
    connectedToAnAgent: boolean
    profilePhoto: string
    isTermsAggreed: boolean

    constructor(
        contests: Array<ContestModel> = [],
        joinedAnotherContestBefore: boolean = false,
        didModelingBefore: boolean = false,
        connectedToAnAgent: boolean = false,
        profilePhoto: string = "",
        isTermsAggreed: boolean = false
    ) {
        this.contests = contests
        this.joinedAnotherContestBefore = joinedAnotherContestBefore
        this.didModelingBefore = didModelingBefore
        this.connectedToAnAgent = connectedToAnAgent
        this.profilePhoto = profilePhoto
        this.isTermsAggreed = isTermsAggreed
        makeAutoObservable(this)
    }

    static from(json: any) {
        return Object.assign(new UserQuestionsModel(), json);
    }
}