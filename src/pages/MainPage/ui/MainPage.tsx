import { AppLink } from '@/shared/ui/AppLink';
import { Button } from '@/shared/ui/Button';

const MainPage = () => {
    return (
        <>
            <div>Главная страница</div>
            <Button
                size="s"
                color="light-gray"
                variant="filled"
                radius="mRadius"
            >
                обсудить
            </Button>
            <AppLink to={'/search'}>Поиск</AppLink>
        </>
    );
};

export default MainPage;
