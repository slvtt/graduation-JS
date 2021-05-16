export const loadState = () => {
    try {
        return localStorage.getItem('state') ? JSON.parse(localStorage.getItem('state')) : undefined;
    } catch (err) {
        return undefined
    }
}

export const saveState = (state) => {
    try {
        localStorage.setItem('state', JSON.stringify(state))
    } catch (err) {

    }
}