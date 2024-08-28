export interface ButtonInterface {
    text: string,
    type: 'primary'|'secondary'|'tertiary',
    href: string,
    filled?: boolean
}
export interface CardInterface {
    image?: string,
    icon?: JSX.Element,
    title: string,
    subtitle?: string,
    hrefSocialMedia?: string[],
    type: string
}