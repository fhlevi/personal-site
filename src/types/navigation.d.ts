export type INavigation = {
    name: string;
    href: string;
    image?: string;
}

export type INavigationList = INavigation[];
export type INavigationGroup = INavigationList[];