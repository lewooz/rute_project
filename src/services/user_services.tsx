import { toJS } from 'mobx';
import { db } from '../firebase_config';
import UserModel from '../models/user/user_model';


class UserServices {

    async saveApplicationInDb(user: UserModel) {
        await db.collection("applications").doc(user.generalInfo.mail).set(JSON.parse(JSON.stringify(user)))
    }

}

export default UserServices



