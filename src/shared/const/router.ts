export enum AppRoutes {
    MAIN = 'main',
    NOT_FOUND = 'notfound',
}

export const getRouteMain = () => '/';

export const AppRouteByPathPattern: Record<string, AppRoutes> = {
    [getRouteMain()]: AppRoutes.MAIN,
};
