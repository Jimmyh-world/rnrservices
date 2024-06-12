export default (textEnglish, textSwedish = null) => {
    switch (localStorage.getItem('preferred-language') ?? 'en') {
        case 'sv':
            return textSwedish ?? textEnglish;
        case 'en':
        default:
            return textEnglish;
    }
};