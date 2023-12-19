import colorsData from '../../../utils/colorsData'

export interface IBestAuthors {
    id: number
    author: { avatar: string; name: string; country: string }
    conv: number
    chart: {
        color: string
    }
}

export const internetBestAuthor: IBestAuthors[] = [
    {
        id: 0,
        author: {
            avatar: 'images/avatars/001.png',
            name: 'محمد صادق قاسم نژاد',
            country: 'ایران',
        },
        conv: 26.7,
        chart: {
            color: colorsData.red[500],
        },
    },
    {
        id: 1,
        author: {
            avatar: 'images/avatars/002.png',
            name: 'رضا نوری',
            country: 'ایران',
        },
        conv: 85.7,
        chart: {
            color: colorsData.green[500],
        },
    },
    {
        id: 2,
        author: {
            avatar: 'images/avatars/004.png',
            name: 'محمد عبداللهی',
            country: 'ایران',
        },
        conv: 43.7,
        chart: {
            color: colorsData.green[500],
        },
    },
    {
        id: 3,
        author: {
            avatar: 'images/avatars/005.png',
            name: 'مهسا امینی',
            country: 'ایران',
        },
        conv: 86.2,
        chart: {
            color: colorsData.red[500],
        },
    },
]
export const natureBestAuthor: IBestAuthors[] = [
    {
        id: 0,
        author: {
            avatar: 'images/avatars/002.png',
            name: 'رضا نوری',
            country: 'ایران',
        },
        conv: 85.7,
        chart: {
            color: colorsData.green[500],
        },
    },
    {
        id: 1,
        author: {
            avatar: 'images/avatars/001.png',
            name: 'محمد صادق قاسم نژاد',
            country: 'ایران',
        },
        conv: 26.7,
        chart: {
            color: colorsData.red[500],
        },
    },
    {
        id: 2,
        author: {
            avatar: 'images/avatars/005.png',
            name: 'مهسا امینی',
            country: 'ایران',
        },
        conv: 86.2,
        chart: {
            color: colorsData.red[500],
        },
    },
    {
        id: 3,
        author: {
            avatar: 'images/avatars/004.png',
            name: 'محمد عبداللهی',
            country: 'ایران',
        },
        conv: 43.7,
        chart: {
            color: colorsData.green[500],
        },
    },
]
export const cryptoBestAuthor: IBestAuthors[] = [
    {
        id: 0,
        author: {
            avatar: 'images/avatars/001.png',
            name: 'محمد صادق قاسم نژاد',
            country: 'ایران',
        },
        conv: 26.7,
        chart: {
            color: colorsData.red[500],
        },
    },
]
export const socialBestAuthor: IBestAuthors[] = [
    {
        id: 0,
        author: {
            avatar: 'images/avatars/001.png',
            name: 'محمد صادق قاسم نژاد',
            country: 'ایران',
        },
        conv: 26.7,
        chart: {
            color: colorsData.red[500],
        },
    },
]
export const othersBestAuthor: IBestAuthors[] = [
    {
        id: 0,
        author: {
            avatar: 'images/avatars/001.png',
            name: 'محمد صادق قاسم نژاد',
            country: 'ایران',
        },
        conv: 26.7,
        chart: {
            color: colorsData.red[500],
        },
    },
]
