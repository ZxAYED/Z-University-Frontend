export const sessionData = [
    { value: "01", label: "Autumn" },
    { value: "02", label: "Summer" },
    { value: "03", label: "Fall" },
];
const currentYear = new Date().getFullYear();
export const yearOptions = [0, 1, 2, 3, 4, 5].map((i) => ({
    value: String(currentYear + i),
    label: String(currentYear + i),
}));
export const yearOptionsForFilter = [0, 1, 2, 3, 4, 5].map((i) => ({
    text: String(currentYear + i),
    value: String(currentYear + i),
}));
export const months = [
    { label: "January", value: "January" },
    { label: "February", value: "February" },
    { label: "March", value: "March" },
    { label: "April", value: "April" },
    { label: "May", value: "May" },
    { label: "June", value: "June" },
    { label: "July", value: "July" },
    { label: "August", value: "August" },
    { label: "September", value: "September" },
    { label: "October", value: "October" },
    { label: "November", value: "November" },
    { label: "December", value: "December" },
];
export const monthsForFilter = [
    { text: "January", value: "January" },
    { text: "February", value: "February" },
    { text: "March", value: "March" },
    { text: "April", value: "April" },
    { text: "May", value: "May" },
    { text: "June", value: "June" },
    { text: "July", value: "July" },
    { text: "August", value: "August" },
    { text: "September", value: "September" },
    { text: "October", value: "October" },
    { text: "November", value: "November" },
    { text: "December", value: "December" },
];