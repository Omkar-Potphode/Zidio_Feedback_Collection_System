import { twitter, instagram, facebook, avatar } from "../assets"

export const header = [
    {
        id: 1,
        title: 'Home',
        url: '#home',
    },
    {
        id: 2,
        title: 'Feedback Form',
        url: '#feedback-form',
    },
    {
        id: 3,
        title: 'About Us',
        url: '#about-us',
    },
    {
        id: 4,
        title: 'Contact',
        url: '#contact',
    },
    {
        id: 5,
        title: 'new account',
        url: '#singup',
        onlyMobile: true,
    },
    {
        id: 6,
        title: 'Sign in',
        url: '#login',
        onlyMobile: true,
    },
];

export const socials = [
    {
        id: 1,
        title: "Twitter",
        iconUrl: twitter,
        url: "#",
    },
    {
        id: 2,
        title: "Instagram",
        iconUrl: instagram,
        url: "#",
    },
    {
        id: 3,
        title: "Facebook",
        iconUrl: facebook,
        url: "#",
    },
];

export const team = [
    {
        id: 1,
        name: 'Siddhant Chalke',
        role: 'Developer',
        imgUrl: avatar,
    },
    {
        id: 2,
        name: 'Omkar Potphode',
        role: 'Developer',
        imgUrl: avatar,
    },
    {
        id: 3,
        name: 'Ritik Joshi',
        role: 'Developer',
        imgUrl: avatar,
    },
    {
        id: 4,
        name: 'Sameer Ahamed S',
        role: 'Developer',
        imgUrl: avatar,
    },
    {
        id: 5,
        name: 'Sweeti',
        role: 'Developer',
        imgUrl: avatar,
    },
];