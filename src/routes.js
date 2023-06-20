import Home from './Pages/Home/Home'
import UserList from './Pages/Users/UserList';
import NewUser from './Pages/NewUser/NewUser';
import Products from './Pages/Products/Products';
import Product from './Pages/Product/Product';
import Transactions from './Pages/Transactions/Transactions';

let routes = [
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/users',
        element: <UserList />
    },
    {
        path: '/new-user',
        element: <NewUser />
    },
    {
        path: '/products',
        element: <Products />
    },
    {
        path: '/product/:productID',
        element: <Product />
    },
    {
        path: '/transactions',
        element: <Transactions />
    }
]

export default routes;