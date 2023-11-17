export const setLocalData = (code, value) =>{
    sessionStorage.setItem(code, JSON.stringify(value))
}
export const getLocalData = (code) =>{
    return JSON.parse(sessionStorage.getItem(code))
}