export function timeStampToDate (stamp) {
    const t = new Date(stamp);
    return t.toLocaleString();
}