import moment from 'moment';
import isSafeInteger from 'lodash/isSafeInteger';

export const getDaysBetweenMonths = (date: string, holidays: []) => {
	/**
	 * conferir se são inteiros válidos, caso não, pegar a data do dia
	 */
	let referenceMonth = moment(date).get('month');
	let referenceYear = moment(date).get('year');

	if (!isSafeInteger(referenceMonth) || !isSafeInteger(referenceYear)) {
		referenceMonth = moment().get('month');
		referenceYear = moment().get('year');
	}
	/**
	 * pegar o current period, onde vc deve pegar o domingo até o último dia do mês
	 */
	const period = getCurrentPeriod(date);
	const { startDate, endDate } = period;
	const daysDetailedArray = getDaysBetweenDates(startDate, endDate, holidays);
	
	const returnObject = {
		startDate,
		endDate,
		detailedDaysArray: getDaysBetweenDates(startDate, endDate, holidays),
	}

	return returnObject;

	/**
	 * getCurrentPeriod()
	 * retornar um objeto com days de um mês
	 * a data inicial do período
	 * a data final do período
	 * e um array com detalhes em cada dia
	 */

	/**
	 * getDaysBetweenDates
	 * Fazer uma função onde vc rece a data inicial e data final e holidays e percorra dentro de cada um cada data e flag se é um perído válido ou não e se é feriado
	 */
};

const getCurrentPeriod = (date: string) => {
	const baseDate = moment(date); // YYYY-MM-DD

	const weekDay = baseDate.startOf('month').isoWeekday();

	const startDate = baseDate
		.clone()
		.startOf('month')
		.subtract(weekDay !== 7 ? weekDay : 0, 'days');

	return {
		startDate,
		endDate: baseDate.clone().endOf('month'),
	};
};

const getDaysBetweenDates = (date: moment.Moment, endDate: moment.Moment, holidays: []) => {
	const dateArray = [];
	while (date <= endDate) {
		dateArray.push({
			weekDay: moment(date).isoWeekday(),
			date: moment(date).format('YYYY-MM-DD'),
			formatedDate: moment(date).get('date'),
			holiday: holidays.find((holiday: { date: string }) => holiday.date === moment(date).format('YYYY-MM-DD')),
			disabled: !moment(endDate)
				.startOf('month')
				.isSameOrBefore(moment(date)),
		});
		date = moment(date).add(1, 'days');
	}
	return dateArray;
};

export const months = ['Jan', 'Fev', 'Mar', 'Abril', 'Maio' ,'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];

export const daysOfTheweek = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
