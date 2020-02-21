import React from 'react';
import { List, Datagrid, TextField, EmailField, Edit, SimpleForm, TextInput, Filter } from 'react-admin';
import MyUrlField from './customFields/MyUrlField';

export const UserList = props => (
    <List filters={<UserFilter />} {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="name" />
            <EmailField source="email" />
            <TextField source="phone" />
            <MyUrlField source="website" />
            <TextField source="company.name" />
        </Datagrid>
    </List>
);


export const UserEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput source="name" />
            <TextInput source="phone" />
            <TextInput label="Email Address" source="email" type="email" />
            <TextInput source="website" type="url" />
        </SimpleForm>
    </Edit>
);

const UserFilter = (props) => (
    <Filter {...props} >
        <TextInput label="Search" source="q" alwaysOn />
        <TextInput label="Phone Filter" source="phone" />
    </Filter>
)