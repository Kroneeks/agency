import { Suspense, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { AppRouter } from './providers/router';
import { classNames } from '@/shared/lib/classNames/classNames';
import { MainLayout } from '@/shared/layouts/MainLayout';

const App = memo(() => {
    const { t } = useTranslation();

    return (
        <div id="app" className={classNames('app', {}, [])}>
            <Suspense fallback="">
                <MainLayout
                    content={<AppRouter />}
                    header={<></>}
                    sidebar={<></>}
                    toolbar={<></> /* toolbar */}
                />
            </Suspense>
        </div>
    );
});

App.displayName = 'App';

export default App;
