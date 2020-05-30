export function readFromLS(key) {
    const preParsedList = localStorage.getItem(key);
    if (preParsedList === null) {
        return [];
    }
    else {
        return JSON.parse(preParsedList);
    }
};


export function writeToLS(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
};