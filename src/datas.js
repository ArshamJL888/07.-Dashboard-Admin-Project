let xAxisData = [
    {
        "name": 'January',
        "sale": 125_000
    },
    {
        "name": 'Ferbruary',
        "sale": 66_970
    },
    {
        "name": 'March',
        "sale": 112_750
    },
    {
        "name": 'April',
        "sale": 48_640
    },
    {
        "name": 'May',
        "sale": 140_500
    },
    {
        "name": 'June',
        "sale": 102_430
    },
    {
        "name": 'July',
        "sale": 59_880
    },
    {
        "name": 'August',
        "sale": 104_120
    },
    {
        "name": 'September',
        "sale": 63_870
    },
    {
        "name": 'October',
        "sale": 97_275
    },
    {
        "name": 'November',
        "sale": 110_650
    },
    {
        "name": 'December',
        "sale": 159_990
    }
]

let transactionData = [
    {
        id: 2274,
        user: {
            id: 11,
            img: './images/member1.jpg',
            username: 'James Smith',
            userTitle: 'System Security Engineer'
        },

        amount: 199.95,
        date: 'December 28 2022',
        status: 'Approved'
    },
    {
        id: 2275,
        user: {
            id: 11,
            img: './images/member1.jpg',
            username: 'James Smith',
            userTitle: 'System Security Engineer'
        },

        amount: 396.50,
        date: 'January 8 2023',
        status: 'Approved'
    },
    {
        id: 2276,
        user: {
            id: 13,
            img: './images/member3.jpg',
            username: 'Maria Garcia',
            userTitle: 'Web Designer'
        },

        amount: 56.09,
        date: 'January 18 2023',
        status: 'Declined'
    },
    {
        id: 2277,
        user: {
            id: 4,
            img: './images/user4.jpg',
            username: 'Elizabeth Hall',
            userTitle: 'Back-End Developer',
        },

        amount: 997.39,
        date: 'January 23 2023',
        status: 'Approved'
    },
    {
        id: 2278,
        user: {
            id: 15,
            img: './images/member5.jpg',
            username: 'Violet Zellweger',
            userTitle: 'Front-End Developer'
        },

        amount: 1250.49,
        date: 'January 27 2023',
        status: 'Declined'
    },
    {
        id: 2279,
        user: {
            id: 12,
            img: './images/member2.jpg',
            username: 'Lewis Neill',
            userTitle: 'SEO Engineer'
        },

        amount: 1999.59,
        date: 'January 15 2023',
        status: 'Approved'
    },
    {
        id: 2280,
        user: {
            id: 14,
            img: './images/member4.jpg',
            username: 'Christopher Anderson',
            userTitle: 'Full-Stack Developer'
        },

        amount: 750.50,
        date: 'Febrary 29 2023',
        status: 'Approved'
    },
    {
        id: 2281,
        user: {
            id: 14,
            img: './images/member4.jpg',
            username: 'Christopher Anderson',
            userTitle: 'Full-Stack Developer'
        },

        amount: 495.25,
        date: 'March 3 2023',
        status: 'Approved'
    },
    {
        id: 2282,
        user: {
            id: 13,
            img: './images/member3.jpg',
            username: 'Maria Garcia',
            userTitle: 'Web Designer'
        },
        amount: 899.99,
        date: 'March 12 2023',
        status: 'Declined'
    },
    {
        id: 2283,
        user: {
            id: 11,
            img: './images/member1.jpg',
            username: 'James Smith',
            userTitle: 'System Security Engineer'
        },

        amount: 1299.99,
        date: 'March 16 2023',
        status: 'Approved'
    },
    {
        id: 2284,
        user: {
            id: 12,
            img: './images/member2.jpg',
            username: 'Lewis Neill',
            userTitle: 'SEO Engineer'
        },

        amount: 639.43,
        date: 'March 17 2023',
        status: 'Pending'
    },
    {
        id: 2285,
        user: {
            id: 14,
            img: './images/member4.jpg',
            username: 'Christopher Anderson',
            userTitle: 'Full-Stack Developer'
        },

        amount: 1499.59,
        date: 'March 17 2023',
        status: 'Pending'
    },
    {
        id: 2286,
        user: {
            id: 1,
            img: './images/user1.jpg',
            username: 'Gabriel Pollando',
            userTitle: 'Software Engineer',
        },

        amount: 647.79,
        date: 'March 17 2023',
        status: 'Approved'
    }
]

let newMembersData = [
    {
        id: 11,
        img: './images/member1.jpg',
        username: 'James Smith',
        userTitle: 'System Security Engineer',
        status: "active",
        transactions: 1860.44,
        email: 'James.Smith_Sec@gmail.com'

    },
    {
        id: 12,
        img: './images/member2.jpg',
        username: 'Lewis Neill',
        userTitle: 'SEO Engineer',
        status: "active",
        transactions: 2639.02,
        email: 'Neill_Lewis@yahoo.com'
    },
    {
        id: 13,
        img: './images/member3.jpg',
        username: 'Maria Garcia',
        userTitle: 'Web Designer',
        status: "active",
        transactions: 956.08,
        email: 'MariaFront@gmail.com'
    },
    {
        id: 14,
        img: './images/member4.jpg',
        username: 'Christopher Anderson',
        userTitle: 'Full-Stack Developer',
        status: "active",
        transactions: 2745.34,
        email: 'Chris.Anderson_dev@gmail.com'
    },
    {
        id: 15,
        img: './images/member5.jpg',
        username: 'Violet Zellweger',
        userTitle: 'Front-End Developer',
        status: "active",
        transactions: 1250.49,
        email: 'Violet.zl_566@gmail.com'
    }
]


let allUsers = [
    {
        id: 1,
        img: './images/user1.jpg',
        username: 'Gabriel Pollando',
        userTitle: 'Software Engineer',
        status: "active",
        transactions: 2647.79,
        email: 'Gabriel_Pl@gmail.com'

    },
    {
        id: 2,
        img: './images/user2.jpg',
        username: 'Lisa	Mitchell',
        userTitle: 'Senior Security Engineer',
        status: "active",
        transactions: 982.98,
        email: 'Lisa.Mt99@gmail.com'

    },
    {
        id: 3,
        img: './images/user3.jpg',
        username: 'Ronald Clark',
        userTitle: 'Java Developer',
        status: "non-active",
        transactions: 124.09,
        email: 'Clark.java44@gmail.com'

    },
    {
        id: 4,
        img: './images/user4.jpg',
        username: 'Elizabeth Hall',
        userTitle: 'Back-End Developer',
        status: "active",
        transactions: 764.59,
        email: 'LizyHall.Dev@gmail.com'

    },
    {
        id: 5,
        img: './images/user5.jpg',
        username: 'Daniel Rodriguez',
        userTitle: 'SEO Engineer',
        status: "non-active",
        transactions: 99.52,
        email: 'Dan_Rodriguez_SEO@gmail.com'

    },
    {
        id: 6,
        img: './images/user6.jfif',
        username: 'Robert Lewis',
        userTitle: 'Flutter & Mobile Developer',
        status: "active",
        transactions: 456.44,
        email: 'Lewis77@gmail.com'

    },
    {
        id: 7,
        img: './images/user7.jpg',
        username: 'Nancy Williams',
        userTitle: 'Network Engineer',
        status: "active",
        transactions: 1125.56,
        email: 'NW.Network@gmail.com'

    },
    {
        id: 8,
        img: './images/user8.jpg',
        username: 'Kevin Roberts',
        userTitle: 'DevOps Engineer',
        status: "active",
        transactions: 489.74,
        email: 'K.Roberts@gmail.com'

    },
    {
        id: 9,
        img: './images/user9.jpg',
        username: 'Laura Jackson',
        userTitle: 'Data Scientist',
        status: "active",
        transactions: 2802.81,
        email: 'Laura.jackson999@yahoo.com'

    },
    {
        id: 10,
        img: './images/user10.jpg',
        username: 'George Thompson',
        userTitle: 'AI Engineer',
        status: "active",
        transactions: 953.49,
        email: 'Thompson_AI_2023@gmail.com'

    },
    {
        id: 11,
        img: './images/member1.jpg',
        username: 'James Smith',
        userTitle: 'System Security Engineer',
        status: "active",
        transactions: 1860.44,
        email: 'James.Smith_Sec@gmail.com'

    },
    {
        id: 12,
        img: './images/member2.jpg',
        username: 'Lewis Neill',
        userTitle: 'SEO Engineer',
        status: "active",
        transactions: 2639.02,
        email: 'Neill_Lewis@yahoo.com'
    },
    {
        id: 13,
        img: './images/member3.jpg',
        username: 'Maria Garcia',
        userTitle: 'Web Designer',
        status: "active",
        transactions: 956.08,
        email: 'MariaFront@gmail.com'
    },
    {
        id: 14,
        img: './images/member4.jpg',
        username: 'Christopher Anderson',
        userTitle: 'Full-Stack Developer',
        status: "active",
        transactions: 2745.34,
        email: 'Chris.Anderson_dev@gmail.com'
    },
    {
        id: 15,
        img: './images/member5.jpg',
        username: 'Violet Zellweger',
        userTitle: 'Front-End Developer',
        status: "active",
        transactions: 1250.49,
        email: 'Violet.zl_566@gmail.com'
    }
]

let allProducts = [
    {
        id: 1,
        img: './images/product1.jpg',
        name: 'Iphone 14 pro max',
        status: 'available',
        price: 1499.99,
        report: [
            {
                name: 'January',
                sale: 14999.90
            },
            {
                name: 'February',
                sale: 7499.95
            },
            {
                name: 'March',
                sale: 10499.93
            }
        ]
    },
    {
        id: 2,
        img: './images/product2.png',
        name: 'Album 1',
        status: 'available',
        price: 17.99,
        report: [
            {
                name: 'January',
                sale: 215.88
            },
            {
                name: 'February',
                sale: 107.94
            },
            {
                name: 'March',
                sale: 179.90
            }
        ]
    },
    {
        id: 3,
        img: './images/product3.jpg',
        name: 'Eminem New Album',
        status: 'available',
        price: 49.99,
        report: [
            {
                name: 'January',
                sale: 999.80
            },
            {
                name: 'February',
                sale: 749.85
            },
            {
                name: 'March',
                sale: 899.82
            }
        ]
    },
    {
        id: 4,
        img: './images/product4.png',
        name: 'Poster',
        status: 'not-available',
        price: 19.99,
        report: [
            {
                name: 'January',
                sale: 199.90
            },
            {
                name: 'February',
                sale: 99.95
            },
            {
                name: 'March',
                sale: 59.97
            }
        ]
    },
    {
        id: 5,
        img: './images/product5.jpg',
        name: 'Iphone 13',
        status: 'available',
        price: 1299.99,
        report: [
            {
                name: 'January',
                sale: 15599.88
            },
            {
                name: 'February',
                sale: 23399.82
            },
            {
                name: 'March',
                sale: 11699.91
            }
        ]
    },
    {
        id: 6,
        img: './images/product6.png',
        name: 'Poster2',
        status: 'not-available',
        price: 16.99,
        report: [
            {
                name: 'January',
                sale: 203.88
            },
            {
                name: 'February',
                sale: 101.94
            },
            {
                name: 'March',
                sale: 50.97
            }
        ]
    },
    {
        id: 7,
        img: './images/product7.jpg',
        name: 'Iwatch 8 Series',
        status: 'available',
        price: 699.99,
        report: [
            {
                name: 'January',
                sale: 5599.92
            },
            {
                name: 'February',
                sale: 9799.86
            },
            {
                name: 'March',
                sale: 11199.84
            }
        ]
    },
    {
        id: 8,
        img: './images/product8.png',
        name: 'Metal Album',
        status: 'not-available',
        price: 9.49,
        report: [
            {
                name: 'January',
                sale: 94.90
            },
            {
                name: 'February',
                sale: 189.80
            },
            {
                name: 'March',
                sale: 66.43
            }
        ]
    },
    {
        id: 9,
        img: './images/product9.jpg',
        name: 'Gaming Laptop',
        status: 'available',
        price: 2499.99,
        report: [
            {
                name: 'January',
                sale: 7499.97
            },
            {
                name: 'February',
                sale: 12499.95
            },
            {
                name: 'March',
                sale: 12499.95
            }
        ]
    },
    {
        id: 10,
        img: './images/product10.png',
        name: 'Cup',
        status: 'available',
        price: 8.59,
        report: [
            {
                name: 'January',
                sale: 343.6
            },
            {
                name: 'February',
                sale: 317.83
            },
            {
                name: 'March',
                sale: 274.88
            }
        ]
    },
    {
        id: 11,
        img: './images/product11.jpg',
        name: 'Dior Sauvage',
        status: 'available',
        price: 299.99,
        report: [
            {
                name: 'January',
                sale: 5999.80
            },
            {
                name: 'February',
                sale: 5099.83
            },
            {
                name: 'March',
                sale: 4199.86
            }
        ]
    },
    {
        id: 12,
        img: './images/product12.png',
        name: 'LandScape',
        status: 'available',
        price: 12.49,
        report: [
            {
                name: 'January',
                sale: 62.45
            },
            {
                name: 'February',
                sale: 74.94
            },
            {
                name: 'March',
                sale: 62.45
            }
        ]
    }
]

export { transactionData, xAxisData, newMembersData, allUsers, allProducts };
