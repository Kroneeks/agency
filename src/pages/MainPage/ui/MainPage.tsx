import { AppLink } from '@/shared/ui/AppLink';
import { Button } from '@/shared/ui/Button';

const MainPage = () => {
    return (
        <>
            <div>Главная страница</div>
            <Button
                size="m"
                gap="mGap"
                color="normal"
                radius="smRadius"
                variant="filled"
            >
                Войти
            </Button>
            <AppLink to={'/search'}>Поиск</AppLink>
        </>
    );
};

export default MainPage;
