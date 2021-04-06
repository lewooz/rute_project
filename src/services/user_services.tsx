import { db } from '../firebase_config';
import UserModel from '../models/user/user_model';


class UserServices {

    async saveApplicationInDb(user: UserModel) {
        user.generalInfo = Object.setPrototypeOf(user.generalInfo, Object.prototype)
        user.personalInfo = Object.setPrototypeOf(user.personalInfo, Object.prototype)
        user.questionsInfo = Object.setPrototypeOf(user.questionsInfo, Object.prototype)
        await db.collection("applications").doc(user.generalInfo.mail).set(Object.setPrototypeOf(user, Object.prototype))
    }

}

export default UserServices



