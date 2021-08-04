export default function dateFormat(dtime) {
    const offDtime = new Date(dtime);
    return `${offDtime.toDateString()}`;
}

export function last50Years() {
    const thisYear = new Date().getFullYear();
    let beginningYear = thisYear - 50;
    let years = [];
    for (let i = thisYear; i >= beginningYear; i = i - 1) {
        years.push(i);
    }
    return years;
}
