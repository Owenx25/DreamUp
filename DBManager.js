export default class DBManager {
    static db = null;
    static getInstance() {
        if (DBManager.db == null) {
            Datastore = require('react-native-local-mongodb')
            DBManager.db = new Datastore({ filename: 'asycStorageKey', autoload: true });
            console.log('DB set up');
        }

        return this.db;
    }

    static dateToId(date){
        if (date != null)
            return date.getDate().toString() + date.getMonth().toString() + date.getFullYear().toString();
        return '';
    }
}