import * as effects from './@effects';
import { state } from './@state';

import { setProductsDisplayMode } from './setProductsDisplayMode';

const actions = {
    setProductsDisplayMode,

    init: async () => {},

    forms: {}
};

export { state, actions, effects };
