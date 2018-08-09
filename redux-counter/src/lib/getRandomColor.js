export const getRandomColor = () => {
    const colors = [
        '#495057',
        '#f03e3e',
        '#d6336c',
        '#ae3ec9',
        '#7048e8',
        '#4263eb',
        '#1c7cb6',
        '#1098ad',
        '#0ca678',
        '#37b24b',
        '#74b816',
        '#f59f00',
        '#f76707'
    ]
    const random = Math.floor(Math.random() * 13);
    return colors[random];
}