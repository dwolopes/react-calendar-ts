import moment from 'moment';
import isSafeInteger from 'lodash/isSafeInteger';


export const getDaysBetweenMonths = (referenceMonth: number, referenceYear: number, holidays: []) => {
	/**
	 * conferir se são inteiros válidos, caso não, pegar a data do dia
	 */

	/**
	 * pegar o current period, onde vc deve pegar o domingo até o último dia do mês
	 */

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


const getCurrentPeriod = () => {};

const getDaysBetweenDates = () => {};




export const months = [
	'Jan',
	'Fev',
	'Mar',
	'Abril',
	'Jun',
	'Jul',
	'Ago',
	'Set',
	'Out',
	'Nov',
	'Dez',
];

export const daysOfTheweek = [
    'Domingo',
    'Segunda',
    'Terça',
    'Quarta',
    'Quinta',
    'Sexta',
    'Sábado'
]