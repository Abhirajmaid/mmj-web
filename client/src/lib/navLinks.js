import { LayoutDashboard, UserRound, TrendingUp, UsersRound } from "lucide-react";

export const navLinks = [
    {
        id: 1,
        linkText: "Diamond",
        url: "/jewellery/diamond",
        subLinks: [
            {
                id: 11,
                linkText: "Rings",
                url: "/jewellery/diamond?product_type=rings",
            },
            {
                id: 12,
                linkText: "Earrings",
                url: "/jewellery/diamond?product_type=earrings",
            },
            {
                id: 13,
                linkText: "Pendants",
                url: "/jewellery/diamond?product_type=pendants",
            },
            {
                id: 14,
                linkText: "Bangles",
                url: "/jewellery/diamond?product_type=bangles",
            },
            {
                id: 15,
                linkText: "Necklaces",
                url: "/jewellery/diamond?product_type=necklaces",
            },
            {
                id: 16,
                linkText: "Mangalsutras",
                url: "/jewellery/diamond?product_type=mangalsutras",
            },
            {
                id: 17,
                linkText: "Nosepins",
                url: "/jewellery/diamond?product_type=nosepins",
            },
            {
                id: 18,
                linkText: "Accessories",
                url: "/jewellery/diamond?product_type=accessories",
            },
        ],
    },
    {
        id: 2,
        linkText: "Gold",
        url: "/jewellery/gold",
        subLinks: [
            {
                id: 21,
                linkText: "Rings",
                url: "/jewellery/gold?product_type=rings",
            },
            {
                id: 23,
                linkText: "Earrings",
                url: "/jewellery/gold?product_type=earrings",
            },
            {
                id: 24,
                linkText: "Pendants",
                url: "/jewellery/gold?product_type=pendants",
            },
            {
                id: 25,
                linkText: "Chains",
                url: "/jewellery/gold?product_type=chains",
            },
            {
                id: 26,
                linkText: "Bangles",
                url: "/jewellery/gold?product_type=bangles",
            },
            {
                id: 27,
                linkText: "Necklaces",
                url: "/jewellery/gold?product_type=necklaces",
            },
            {
                id: 28,
                linkText: "Mangalsutras",
                url: "/jewellery/gold?product_type=mangalsutras",
            },
            {
                id: 29,
                linkText: "Nosepins",
                url: "/jewellery/gold?product_type=nosepins",
            },
            {
                id: 30,
                linkText: "Accessories",
                url: "/jewellery/gold?product_type=accessories",
            },
        ],
    },
    {
        id: 3,
        linkText: "Silver",
        url: "/jewellery/silver",
        subLinks: [
            {
                id: 31,
                linkText: "Silver Articles",
                url: "/jewellery/silver?product_type=silver_articles",
            },
            {
                id: 32,
                linkText: "Rings",
                url: "/jewellery/silver?product_type=rings",
            },
            {
                id: 33,
                linkText: "Chains",
                url: "/jewellery/silver?product_type=chains",
            },
            {
                id: 34,
                linkText: "Painjans",
                url: "/jewellery/silver?product_type=painjans",
            },
            {
                id: 35,
                linkText: "Pendants",
                url: "/jewellery/silver?product_type=pendants",
            },

        ],
    },
    {
        id: 4,
        linkText: "Bullions",
        url: "/jewellery/bullions",
        subLinks: [
            {
                id: 41,
                linkText: "Fine Gold",
                url: "/jewellery/bullions?product_type=fine_gold",
            },
            {
                id: 42,
                linkText: "Gold Vedha",
                url: "/jewellery/bullions?product_type=gold_vedha",
            },
            {
                id: 43,
                linkText: "Fine Silver",
                url: "/jewellery/bullions?product_type=fine_silver",
            },
        ],
    },
    {
        id: 5,
        linkText: "Mens",
        url: "/jewellery/jewellery_mens",
        subLinks: [
            {
                id: 51,
                linkText: "Gold Vedha",
                url: "/jewellery/bullions?product_type=gold_vedha",
            },
            {
                id: 52,
                linkText: "Chains",
                url: "/jewellery/jewellery_mens?product_type=chains",
            },
            {
                id: 53,
                linkText: "Rings",
                url: "/jewellery/jewellery_mens?product_type=rings",
            },
            {
                id: 54,
                linkText: "Pendants",
                url: "/jewellery/jewellery_mens?product_type=pendants",
            },
            {
                id: 55,
                linkText: "Gold Kada",
                url: "/jewellery/jewellery_mens?product_type=gold_kada",
            },
            {
                id: 56,
                linkText: "Silver Jewellery",
                url: "/jewellery/jewellery_mens?product_type=silver",
            },
        ],
    },
    {
        id: 6,
        linkText: "Collections",
        url: "/collections",
        target: "_blank"
    },
];

export const customerLinks = [
    {
        id: 1,
        linkText: "FAQ",
        url: "/faqs",
        target: "_blank"
    },
    {
        id: 2,
        linkText: "Policies",
        url: "/privacy-policies",
        target: "_blank"
    },
    {
        id: 3,
        linkText: "About us",
        url: "/about-us",
        target: "_blank"
    },
    {
        id: 4,
        linkText: "Contact us",
        url: "/contact-us",
        target: "_blank"
    },
    {
        id: 5,
        linkText: "Blogs",
        url: "/blogs",
        target: "_blank"
    },
];

export const jewelleryCatLinks = [
    {
        id: 1,
        linkText: "Diamond",
        url: "/jewellery/diamond",
    },
    {
        id: 2,
        linkText: "Gold",
        url: "/jewellery/gold",
    },
    {
        id: 3,
        linkText: "Silver",
        url: "/jewellery/silver",
    },
    {
        id: 4,
        linkText: "Bullions",
        url: "/jewellery/bullions",
    },
    {
        id: 5,
        linkText: "Mens Jewellery",
        url: "/jewellery/jewellery_mens",
    },
];

export const adminNavLinks = [
    {
        title: "Overview",
        icon: "lucide:layout-dashboard",
        href: "/dashboard",
    },
    {
        title: "Metal Rate",
        icon: "lucide:trending-up",

        href: "/dashboard/metal-rates",
    },
    {
        title: "Users",
        icon: "lucide:users-round",
        href: "/dashboard/users",
    },
];

export const userAccLinks = [
    {
        title: "Profile",
        icon: "lucide:user-round",
        href: "/profile",
    },
    {
        title: "Favorites",
        icon: "lucide:heart",
        href: "/profile/favorites",
    },
    {
        title: "Contact Us",
        icon: "lucide:phone",
        href: "/contact-us",
    },
];