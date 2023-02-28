export const getInitialValue = (key, initialValue) => {
const contacts = JSON.parse(localStorage.getItem(key));
    if (contacts) { return contacts } else { return initialValue 
    }
}
