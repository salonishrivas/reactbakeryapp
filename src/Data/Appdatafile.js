import login from './../Components/Images/loginsignup.png'
import order from './../Components/Images/order.png'
import checkout from './../Components/Images/checkout.png'

const appdata = [
    {
        "id": 1,
        'image': login,
        'appdetails': {
            'topheadline': 'Create an account',
            'description': 'Create/login to an existing account to get started',
            'detail': 'An account is created with your email and a desired password',
            "order": ["order1", "order2"],
        }


    },
    {
        "id": 2,
        'image': order,
        'appdetails':
        {
            'topheadline': 'Explore varieties',
            'description': 'Shop for your favorites meal as e dey hot.',
            'detail': 'Shop for your favorite meals or drinks and enjoy while doing it.',
            order: ["order2", "order1"],
        }
    },
    {
        "id": 3,
        'image': checkout,
        'appdetails':
        {
            'topheadline': 'Checkout',
            'description': 'When you done check out and get it delivered.',
            'detail': 'When you done check out and get it delivered with ease.',
            order: ["order1", "order2"],
        }

    }

]

export default appdata;