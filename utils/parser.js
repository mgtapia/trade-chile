function toLocaleDate(values) {
	return `${values.year}/${('0' + values.month).slice(-2)}/${('0' + values.day).slice(-2)}`;
}

function toDateTime(timestamp) {
	if (!timestamp) return;
	return (
		new Date(timestamp)
		.toLocaleString()
		.replace(',', '')
		.slice(0, -3)
	);
}

function toReadablePhone(number) {
	const phone = number?.toString();
	return phone ? `+${phone?.slice(0, 3)} ${phone?.slice(3, 7)} ${phone?.slice(7, 11)}` : '-';
}

function getWhatsappURL(number) {
	return `https://wa.me/${number}`;
}

export default {
	toDateTime,
	toLocaleDate,
	toReadablePhone,
	getWhatsappURL
}