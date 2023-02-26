export const getInitialValue = (key, initialValue) => {
const contacts = JSON.parse(localStorage.getItem(key));
    if (contacts?.length) {
    return contacts || initialValue
    }
}
