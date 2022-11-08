import { merge, namespaced } from 'overmind/config';

import * as effects from './@effects';

import * as products from './products';

export const config = merge(
    namespaced({
        products
    }),
    {
        actions: {

        },
        effects: { ...effects }
    }
);
