import * as repository from './repository';
import { toast } from 'react-toastify';

import { key } from '../../../utils/constants';
import { dispatch } from 'rxjs/internal/observable/pairs';

export const calendar = {
    state: {
        holidays: {},
    },
    reducers: {
        holidays(state: any, payload: any){
            return {
                ...state, // precisa ?
                holidays: {
                    ...state.holidays,
                    ...payload
                }
            }
        },
        clearStore() {
            return {}
        }
    },
    effects:(dispatch: any) =>({

    })
}