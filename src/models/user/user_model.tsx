import { makeAutoObservable } from "mobx"
import { uuid } from 'uuidv4';
import UserGeneralInfoModel from "./user_general_info";
import UserPersonalInfoModel from "./user_personal_info";
import UserQuestionsModel from "./user_questions";

export default class UserModel {
    id: string
    contestIds: Array<string>
    generalInfo: UserGeneralInfoModel
    personalInfo: UserPersonalInfoModel
    questionsInfo: UserQuestionsModel

    constructor(
        id: string = uuid(),
        contestIds: Array<string> = [],
        generalInfo: UserGeneralInfoModel = new UserGeneralInfoModel(),
        personalInfo: UserPersonalInfoModel = new UserPersonalInfoModel(),
        questionsInfo: UserQuestionsModel = new UserQuestionsModel()
    ) {
        this.id = id
        this.contestIds = contestIds
        this.generalInfo = generalInfo
        this.personalInfo = personalInfo
        this.questionsInfo = questionsInfo
        makeAutoObservable(this)
    }

    static from(json: any) {
        return Object.assign(new UserModel(), json);
    }
}