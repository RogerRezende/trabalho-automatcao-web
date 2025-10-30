export function getTimestamp() {
    return new Date().getTime();
}

export function getRandomEmail() {
    return `qa.tester-${getTimestamp()}@example.com`;
}
