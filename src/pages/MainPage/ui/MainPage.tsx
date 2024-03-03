import { AppLink } from '@/shared/ui/AppLink';

const MainPage = () => {
    return (
        <>
            <div>Главная страница</div>
            <AppLink to={'/search'}>Поиск</AppLink>
        </>
    );
};

export default MainPage;
