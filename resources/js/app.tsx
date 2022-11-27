// import './bootstrap';
import '../css/app.css';

import React from 'react';
import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/inertia-react';
import { InertiaProgress } from '@inertiajs/progress';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import Layout from './Layout';
import AppContext from './Contexts/AppContext';
import { Inertia } from '@inertiajs/inertia';
// import './sass/index.scss'
const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: async (name) => {
        const res: any = await (resolvePageComponent(`./Pages/${name}.tsx`, import.meta.glob('./Pages/**/*.tsx')) as any)
        const page = res.default;
        page.layout = (page: any) => <Layout children={page} />
        return page;
    },
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(
            <AppContext>
                <App {...props} />
            </AppContext>
        );
    },
});

InertiaProgress.init({ color: '#4B5563',includeCSS: true, showSpinner: true, });
