function removeAllExtraSpaces (str: string): string {
    const newString = str.replace(/\s+/g,' ').trim();
    return newString
}

export {removeAllExtraSpaces}