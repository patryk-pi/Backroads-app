import tour1 from './images/tour-1.jpeg';
import tour2 from './images/tour-2.jpeg';
import tour3 from './images/tour-3.jpeg';
import tour4 from './images/tour-4.jpeg';
import tour5 from './images/tour-5.jpeg';
import tour6 from './images/tour-6.jpeg';



export const pageLinks = [
    {
        id: 1,
        href: '#home',
        text: 'home'
    },
    {
        id: 2,
        href: '#about',
        text: 'about'
    },
    {
        id: 3,
        href: '#services',
        text: 'services'
    },
    {
        id: 4,
        href: '#tours',
        text: 'tours'
    },
];

export const socialLinks = [
    {
        id: 1,
        href: 'https://www.facebook.com',
        icon: 'fab fa-facebook',
    },
    {
        id: 2,
        href: 'https://www.twitter.com',
        icon: 'fab fa-twitter',
    },
    {
        id: 3,
        href: 'https://www.squarespace.com',
        icon: 'fab fa-squarespace',
    }
];

export const services = [
    {
        id: 1,
        icon: 'as fa-wallet fa-fw',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.',
        title: 'Saving Money'
    },
    {
        id: 2,
        icon: 'fas fa-tree fa-fw',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.',
        title: 'Endless Hiking'
    },
    {
        id: 3,
        icon: 'fas fa-socks fa-fw',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.',
        title: 'Amazing Comfort'
    },

];

export const tours = [
    {
        id: 1,
        image: tour1,
        date: 'August 26th, 2020',
        title: 'Tibet Adventure',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
        location: 'China',
        duration: '6 days',
        price: 2100,
    },
    {
        id: 2,
        image: tour2,
        date: 'October 1th, 20200',
        title: 'Best Of Java',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
        location: 'Indonesia',
        duration: '11 days',
        price: 1400,
    },
    {
        id: 3,
        image: tour3,
        date: 'September 15th, 2020',
        title: 'Explore Hong Kong',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
        location: 'Hong Kong',
        duration: '8 days',
        price: 5000,
    },
    {
        id: 4,
        image: tour4,
        date: 'December 5th, 2019',
        title: 'Kenya Highlights',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
        location: 'Kenya',
        duration: '20',
        price: 3300,
    },
]
