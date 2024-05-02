import { twitter, instagram, facebook } from "../assets"

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