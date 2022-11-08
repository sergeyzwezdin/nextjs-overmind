export type State = {
    list: {
        mode: 'cards' | 'list';
        pageSize: number;
    };

};

export const state: State = {
    list: {
        mode: 'cards',
        pageSize: 24
    }
};