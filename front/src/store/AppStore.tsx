import ConstantsStore from './ConstantsStore'
import PreferenceStore from './PreferenceStore'
import UserStore from './UserStore'


export class AppStore {

    constantsStore: ConstantsStore;
    preferenceStore: PreferenceStore;
    userStore: UserStore;


    constructor() {
        this.constantsStore = new ConstantsStore()
        this.preferenceStore = new PreferenceStore()
        this.userStore = new UserStore()
    }
}