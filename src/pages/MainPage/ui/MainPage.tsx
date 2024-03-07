import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './MainPage.module.scss';
import BannerImg from '@/shared/assets/images/main/banner.png';
import LogoImg from '@/shared/assets/images/main/logo.png';
import AdsImg from '@/shared/assets/images/main/adsBg.png';
import CatalogImg from '@/shared/assets/images/main/catalog.png';
import { Text } from '@/shared/ui/Text';
import { VStack } from '@/shared/ui/Stack';

const MainPage = () => {
    return (
        <div className={cls.wrapper}>
            <div className={cls.layout}>
                <div className={cls.contentLeft}>
                    <div className={classNames(cls.banner, {}, [cls.block])}>
                        <Text
                            title={'Недвижимость'}
                            text={'по доступной цене'}
                            className={cls.title}
                            size="l"
                            upper
                        />
                        <img src={LogoImg} alt="house" className={cls.logo} />
                        <img
                            src={BannerImg}
                            alt="banner"
                            className={cls.bannerBG}
                        />
                    </div>
                    <div className={classNames(cls.ads, {}, [cls.block])}>
                        <img src={AdsImg} alt="ads" />
                        <div className={cls.adsDescription}>
                            <h2>С нами работают более 1 000 риелторов</h2>
                            <p>
                                С нами работают более 1 000 риелторов из разных
                                регионов России. Они помогут провести просмотры,
                                соберут и проверят документы, будут общаться
                                со второй стороной сделки и отстаивать ваши
                                интересы на каждом этапе
                            </p>
                        </div>
                    </div>
                </div>
                <div className={cls.contentRight}>
                    <div
                        className={classNames(cls.form, {}, [cls.block])}
                    ></div>
                    <div className={classNames(cls.catalog, {}, [cls.block])}>
                        <VStack
                            className={cls.catalogDescription}
                            align="center"
                        >
                            <h2>500+</h2>
                            <p>вариантов использования</p>
                        </VStack>
                        <img src={CatalogImg} alt="catalog" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainPage;
