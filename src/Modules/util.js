const color = ['var(--gray-00)', 'var(--blue-00)', 'var(--cyan-00)', 'var(--green-00)', 'var(--yellow-00)', 'var(--orange-00)', 'var(--red-00)', 'var(--violet-00)'];

export const trimString = str => str.toLowerCase().replace(/(\s*)/g, "").replace(/[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/gi,'');
export const getFloatFixed = (value, fixed) => value >= 10 ? 10 : parseFloat(Math.round(value * 100) / 100).toFixed(fixed);
export const getRangeText = (min, max) => min == max ? min : `${min} ~ ${max}`;
export const getColorRating = rating => {
    if(rating >= 9) {
        return color[1];
    }
    else if(rating >= 8) {
        return color[2];
    }
    else if(rating >= 7) {
        return color[3];
    }
    else if(rating >= 6) {
        return color[4];
    }
    else if(rating >= 4) {
        return color[5];
    }
    else {
        return color[6];
    }
}
export const getColorWeight = weight => color[weight];
export const getTextWeight = weight => ['입문', '초보', '중수', '고수', '초고수', '전문가'][weight - 1];
export const getDateText = (year, month, day, hour, minute) => `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")} ${String(hour).padStart(2, "0")}:${String(minute).padStart(2, "0")}`;
export const getGradeText = grade => ['마스터', '매니저', '일반 회원'][grade];
export const compareDate = (a, b) => {
    const [yearA, monthA, dayA, hourA, minuteA] = a;
    const [yearB, monthB, dayB, hourB, minuteB] = b;
    if(yearA > yearB) return -1;
    else if(yearA < yearB) return 1;
    if(monthA > monthB) return -1;
    else if(monthA < monthB) return 1;
    if(dayA > dayB) return -1;
    else if(dayA < dayB) return 1;
    if(hourA > hourB) return -1;
    else if(hourA < hourB) return 1;
    if(minuteA > minuteB) return -1;
    else if(minuteA < minuteB) return 1;
    return 0;
}
export const preventScroll = () => {
    const currentScrollY = window.scrollY;
    document.body.style.position = 'fixed';
    document.body.style.width = '100%';
    document.body.style.top = `-${currentScrollY}px`;
    document.body.style.overflowY = 'scroll';
    return currentScrollY;
};
export const allowScroll = prevScrollY => {
    document.body.style.position = '';
    document.body.style.width = '';
    document.body.style.top = '';
    document.body.style.overflowY = '';
    window.scrollTo(0, prevScrollY);
};