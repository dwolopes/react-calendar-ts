import Monthly from '../../components/Monthly';
// import Yearly from '../../components/Yearly';


const handler = (type: string) => {
    switch(type) {
        default:
            return Monthly;
    }
};

export default (type: string) => handler(type);