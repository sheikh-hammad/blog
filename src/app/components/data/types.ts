interface navLinks {
    path: string,
    name: string
}

export const links: navLinks[] = [{
        name: "Blog",
        path: "/"
    },
    {
        name: "About",
        path: "/about"
    },
    {
        name: "Privacy Policy",
        path: "/privacy"
    },
    {
        name: "Authors",
        path: "/authors"
    },
];

export type Blog = {
    id: number,
    src: string,
    title: string,
    heading: string,
    date: string,
    desc: string
}

export const blogPost:Blog[] = [{
        id: 1,
        src: '/utils/BlogPost1.png',
        title: '8 Rules of Travelling In Sea You Need To Know',
        heading: 'Travel',
        date: '13 March 2023',
        desc: 'Travelling in sea has many advantages. Some of the advantages of transporting goods by sea include: you can ship large volumes at costs '
    },
    {
        id: 2,
        src: '/utils/BlogPost2.jpg',
        date: '11March 2023',
        heading: 'development',
        title: 'How to build strong portfolio and get a Job in UI/UX',
        desc: 'Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from '
    },
    {
        id: 3,
        src: '/utils/BlogPost3.png',
        date: '11March 2023',
        heading: 'Sports',
        title: 'How to Be a Professional Footballer in 2023',
        desc: 'Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment. survival strategies to ensure proactive'

    }, {
        id: 4,
        src: '/utils/BlogPost1.png',
        title: '8 Rules of Travelling In Sea You Need To Know',
        heading: 'Travel',
        date: '13 March 2023',
        desc: 'Travelling in sea has many advantages. Some of the advantages of transporting goods by sea include: you can ship large volumes at costs '
    },
    {
        id: 5,
        src: '/utils/BlogPost2.jpg',
        date: '11March 2023',
        heading: 'development',
        title: 'How to build strong portfolio and get a Job in UI/UX',
        desc: 'Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from '
    },
    {
        id: 6,
        src: '/utils/BlogPost3.png',
        date: '11March 2023',
        heading: 'Sports',
        title: 'How to Be a Professional Footballer in 2023',
        desc: 'Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment. survival strategies to ensure proactive'

    }
]

export interface socialLinkTypes {
    path: string,
    name: string
}

export const socialLinks:socialLinkTypes[] = [{
    path: '/contact',
    name: 'FB'
},
{
    path: '/contact',
    name: 'IG'
},
{
    path: '/contact',
    name: 'LN'
},
{
    path: '/contact',
    name: 'YT'
},]