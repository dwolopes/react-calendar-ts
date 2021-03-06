import createRematchPersist from '@rematch/persist';
import createLoadingPlugin from '@rematch/loading';
import storageSession from 'redux-persist/lib/storage/session';

export const loading = createLoadingPlugin({
    whitelist: ['calendar/getHolidaysAsync']
});

export const persistPlugin = createRematchPersist({
    whitelist: ['calendar'],
    storage: storageSession,
    version: 1 
});
