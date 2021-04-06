import firebase from 'firebase';
import { uuid } from 'uuidv4';

import { storageRef } from '../firebase_config';


class FileServices {

    async uploadFileToStorage(file: File): Promise<string> {
        var uploadTask = storageRef.child(`Profile_photos/${uuid()}`).put(file)
        return (await uploadTask).ref.getDownloadURL()
    }

}

export default FileServices

