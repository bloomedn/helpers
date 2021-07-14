export default function dateFormat(dtime) {
    const offDtime = new Date(dtime);
    return `${offDtime.toDateString()}`;
}
