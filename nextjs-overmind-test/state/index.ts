import { IContext, createOvermind, createOvermindSSR } from 'overmind';
import { createActionsHook, createStateHook } from 'overmind-react';

import { config } from './config';

export type Context = IContext<{
    state: typeof config.state;
    actions: typeof config.actions;
    effects: typeof config.effects;
}>;

export const overmind = (typeof window !== 'undefined' ? createOvermind : createOvermindSSR)(config, {
    devtools: false
});

export const useAppState = createStateHook<Context>();

export const useActions = createActionsHook<Context>();
