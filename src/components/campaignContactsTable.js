import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TablePagination from '@material-ui/core/TablePagination';
import { DataGrid } from '@material-ui/data-grid';


const columns = [
    { field: 'first_name', headerName: 'First Name', editable: true, width: 150 },
    { field: 'full_name', headerName: 'Full Name', editable: false, width: 150 },
    {
        field: 'company',
        headerName: 'Company',
        // type: 'date',
        // width: 180,
        editable: true,
        width: 150
    },
    {
        field: 'title',
        headerName: 'Title',
        // type: 'dateTime',
        // width: 220,
        editable: false,
        width: 150
    },
    {
        field: 'location',
        headerName: 'Location',
        // type: 'dateTime',
        // width: 220,
        editable: false,
        width: 150
    },
    {
        field: 'email',
        headerName: 'Email',
        // type: 'dateTime',
        // width: 220,
        editable: false,
        width: 150
    },
    {
        field: 'suppEmail',
        headerName: 'Supp. Email',
        // type: 'dateTime',
        // width: 220,
        editable: true,
        width: 150
    },
    {
        field: 'phone',
        headerName: 'Phone',
        // type: 'dateTime',
        // width: 220,
        editable: false,
        width: 150
    },
    {
        field: 'suppPhone',
        headerName: 'Supp. Phone',
        // type: 'dateTime',
        // width: 220,
        editable: true,
        width: 150
    },
];
  
// const rows = [
//     {
//         id: 1,
//         firstName: "Name",
//         fullName: "Name",
//         company: "company",
//         title: "title",
//         location: "location",
//         email: "email",
//         suppEmail: "supp email",
//         phone: "123-456-7891",
//         suppPhone: "012-345-6789"
//     },
//     {
//         id: 2,
//         firstName: "Name",
//         fullName: "Name",
//         company: "company",
//         title: "title",
//         location: "location",
//         email: "email",
//         suppEmail: "supp email",
//         phone: "123-456-7891",
//         suppPhone: "012-345-6789"
//     },
//     {
//         id: 3,
//         firstName: "Name",
//         fullName: "Name",
//         company: "company",
//         title: "title",
//         location: "location",
//         email: "email",
//         suppEmail: "supp email",
//         phone: "123-456-7891",
//         suppPhone: "012-345-6789"
//     },
//     {
//         id: 4,
//         firstName: "Name",
//         fullName: "Name",
//         company: "company",
//         title: "title",
//         location: "location",
//         email: "email",
//         suppEmail: "supp email",
//         phone: "123-456-7891",
//         suppPhone: "012-345-6789"
//     },
//     {
//         id: 5,
//         firstName: "AName",
//         fullName: "Name",
//         company: "company",
//         title: "title",
//         location: "location",
//         email: "email",
//         suppEmail: "supp email",
//         phone: "123-456-7891",
//         suppPhone: "012-345-6789"
//     },
//     {
//         id: 6,
//         firstName: "Name",
//         fullName: "Name",
//         company: "company",
//         title: "title",
//         location: "location",
//         email: "email",
//         suppEmail: "supp email",
//         phone: "123-456-7891",
//         suppPhone: "012-345-6789"
//     },
//     {
//         id: 7,
//         firstName: "Name",
//         fullName: "Name",
//         company: "company",
//         title: "title",
//         location: "location",
//         email: "email",
//         suppEmail: "supp email",
//         phone: "123-456-7891",
//         suppPhone: "012-345-6789"
//     },
//     {
//         id: 8,
        
//         fullName: "Name",
//         firstName: "fName",
//         company: "company",
//         title: "title",
//         location: "location",
//         email: "email",
//         suppEmail: "supp email",
//         phone: "123-456-7891",
//         suppPhone: "112-345-6789"
//     },
// ];

export default function CampaignContactsTable(props) {
    props.contactsData.forEach((item, i) => {
        item.id = i + 1;
    });

    const [pageSize, setPageSize] = React.useState(25);
    const handlePageSizeChange = (params) => {
        setPageSize(params.pageSize);
      };

    const rows = props.contactsData;
    return (
        <div className="mt-5 mx-3" style={{ height:'100%', width: '100%' }}>
            <DataGrid onPageSizeChange={handlePageSizeChange} rowsPerPageOptions={[25, 50, 100]} pageSize={pageSize} pagination autoHeight={true} rows={rows} columns={columns} style={{ background: "#FFF" }} className="tableBoxShadow" />
        </div>
    );
}
