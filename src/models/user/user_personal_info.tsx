import { makeAutoObservable } from "mobx"

export default class UserPersonalInfoModel {
    length: string
    weight: string
    chest: string
    waist: string
    hip: string
    body: string
    shoeNumber: string
    hairColor: string
    eyeColor: string

    constructor(
        length: string = "",
        weight: string = "",
        chest: string = "",
        waist: string = "",
        hip: string = "",
        body: string = "",
        shoeNumber: string = "",
        hairColor: string = "",
        eyeColor: string = "",
    ) {
        this.length = length
        this.weight = weight
        this.chest = chest
        this.waist = waist
        this.hip = hip
        this.body = body
        this.shoeNumber = shoeNumber
        this.hairColor = hairColor
        this.eyeColor = eyeColor
        makeAutoObservable(this)
    }

    static from(json: any) {
        return Object.assign(new UserPersonalInfoModel(), json);
    }
}