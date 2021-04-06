import { makeAutoObservable } from "mobx"
import FieldStatus from "../../enums/field_status"

export default class UserPersonalInfoStatus {
    lengthValid: FieldStatus
    weightValid: FieldStatus
    chestValid: FieldStatus
    waistValid: FieldStatus
    hipValid: FieldStatus
    bodyValid: FieldStatus
    shoeNumberValid: FieldStatus
    hairColorValid: FieldStatus
    eyeColorValid: FieldStatus

    constructor(
        lengthValid: FieldStatus = FieldStatus.IDLE,
        weightValid: FieldStatus = FieldStatus.IDLE,
        chestValid: FieldStatus = FieldStatus.IDLE,
        waistValid: FieldStatus = FieldStatus.IDLE,
        hipValid: FieldStatus = FieldStatus.IDLE,
        bodyValid: FieldStatus = FieldStatus.IDLE,
        shoeNumberValid: FieldStatus = FieldStatus.IDLE,
        hairColorValid: FieldStatus = FieldStatus.IDLE,
        eyeColorValid: FieldStatus = FieldStatus.IDLE,
    ) {
        this.lengthValid = lengthValid
        this.weightValid = weightValid
        this.chestValid = chestValid
        this.waistValid = waistValid
        this.hipValid = hipValid
        this.bodyValid = bodyValid
        this.shoeNumberValid = shoeNumberValid
        this.hairColorValid = hairColorValid
        this.eyeColorValid = eyeColorValid
        makeAutoObservable(this)
    }

    static from(json: any) {
        return Object.assign(new UserPersonalInfoStatus(), json);
    }
}