const generateRandomID = (length) => {
    let result = '';
    const lowerCharacters = 'abcdefghijklmnopqrstuvwxyz';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    // Starting with lower case character
    result += lowerCharacters.charAt(Math.floor(Math.random() * lowerCharacters.length));

    for (let i = 1; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
};

export  default generateRandomID;