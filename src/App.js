import React from 'react';
import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { UserList, UserEdit } from './components/users';
import { PostList, PostEdit, PostCreate } from './components/posts';
import DashBoard from './components/dashboard'
import authProvider from './authProvider'

import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';

const dataProvider = jsonServerProvider('http://jsonplaceholder.typicode.com');
const App = () => (
    <Admin dashboard={DashBoard} authProvider={authProvider} dataProvider={dataProvider}>
        <Resource name="users" list={UserList} icon={UserIcon} edit={UserEdit} />
        <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon} />
    </Admin>
);

export default App;