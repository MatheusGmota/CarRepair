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
    bodyText?: string[],
    description?: string,
    type: 'primary' | 'secondary'
    hrefGit?: string,
    hrefInsta?: string,
    hrefLkdin?: string,
}