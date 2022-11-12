export const isValidLP = (lp: string): boolean => {
    let parsed = parseInt(lp).toString()
    console.log(parsed);
    console.log(typeof parsed);

    return parsed.length === 7 || parsed.length === 8
}