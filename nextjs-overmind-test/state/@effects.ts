import Router from 'next/router';

export const router = {
    initialize: (routes: { [url: string]: Function }) => {
        // Router.ready(() => {
        //     const processed: string[] = [];
        //     const processUrl = (currentUrl: string, routes: { [url: string]: Function }) => {
        //         const url = currentUrl.toLowerCase();
        //         if (processed.indexOf(url) === -1) {
        //             const callback = routes[url];
        //             if (callback) {
        //                 callback();
        //             }
        //
        //             processed.push(url);
        //         }
        //     };
        //     Router.events.on('routeChangeStart', (url) => processUrl(url, routes));
        //     processUrl(Router.pathname, routes);
        // });
    }
};
