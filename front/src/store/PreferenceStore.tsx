import { autorun, action, observable } from 'mobx'

export type Theme = 'dark' | 'light'

export default class PreferenceStore {
    @observable theme: Theme = window.matchMedia(`(prefers-color-scheme: dark)`)
        .matches
        ? 'dark'
        : 'light'

    constructor() {
        this.load()
        autorun(this.save)
    }

    @action
    changeTheme = (theme: Theme) => {
        this.theme = theme
    }

    private save = () => {
        window.localStorage.setItem(
            PreferenceStore.name,
            JSON.stringify({
                theme: this.theme
            })
        )
    }

    @action
    private load = () => {
        Object.assign(this, JSON.parse(window.localStorage.getItem(PreferenceStore.name) || '{}'))
    }
}
