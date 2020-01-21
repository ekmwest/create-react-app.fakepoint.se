const monthNames = ['january', 'february', 'mars', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];
const shortMonthNames = monthNames.map(m => m.slice(0, 3));

const dayNames = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
const shortDayNames = dayNames.map(d => d.slice(0, 3));

exports.date = timestamp => {
    const date = new Date(timestamp);

    const weekday = this.capitalize(shortDayNames[date.getDay()]);
    const monthday = date.getDate();
    const year = date.getFullYear();
    const monthName = this.capitalize(shortMonthNames[date.getMonth()]);

    return `${weekday} ${monthday} ${monthName} ${year}`;
};

exports.datetime = timestamp => {
    const date = new Date(timestamp);

    const hour = date.getHours().toString().padStart(2, '0');
    const minute = date.getMinutes().toString().padStart(2, '0');

    return this.date(timestamp) + `, ${hour}.${minute}`;
}

exports.capitalize = s => s.charAt(0).toUpperCase() + s.slice(1);
