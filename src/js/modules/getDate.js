import moment from 'moment';

export function getDate() {
    return moment().format("dddd, MMMM Do YYYY");
}