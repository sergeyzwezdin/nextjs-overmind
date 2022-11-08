import { Context } from '@/state';

export const setProductsDisplayMode = async (
    context: Context,
    payload: {
        mode?: 'cards' | 'list';
        pageSize?: number;
    }
) => {
    if (payload.mode !== undefined) {
        context.state.products.list.mode = payload.mode;
    }

    if (payload.pageSize !== undefined) {
        context.state.products.list.pageSize = payload.pageSize;
    }
};
