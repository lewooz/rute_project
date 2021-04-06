import { makeAutoObservable } from "mobx"

export default class UserQuestionsModel {
    contests: Array<string>
    joinedAnotherContestBefore: boolean
    didModelingBefore: boolean
    connectedToAnAgent: boolean
    profilePhoto: string
    isTermsAggreed: boolean

    constructor(
        contests: Array<string> = [],
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