import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardActions,
  CardContent,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TablePagination
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {},
  content: {
    padding: 0
  },
  inner: {
    minWidth: 1050
  },
  nameContainer: {
    display: 'flex',
    alignItems: 'center'
  },
  avatar: {
    marginRight: theme.spacing(2)
  },
  actions: {
    justifyContent: 'flex-end'
  }
}));

const ContactTable = props => {
  const { className, contacts, ...rest } = props;

  const classes = useStyles();

  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [page, setPage] = useState(0);

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  const handleRowsPerPageChange = event => {
    setRowsPerPage(event.target.value);
  };

  const handleIsActive = (contact) => {
    if(contact.active) return "Active"
    else { return "Inactive"}
  }

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardContent className={classes.content}>
        <PerfectScrollbar>
          <div className={classes.inner}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Contact Name</TableCell>
                  <TableCell>Phone</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Department</TableCell>
                  <TableCell>Active</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                 {contacts.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(contact => (
                  <TableRow
                    className={classes.tableRow}
                    hover
                    key={contact.id}
                  >
                    <TableCell>{`${contact.firstName} ${contact.lastName}`}</TableCell>
                    <TableCell>{contact.phone}</TableCell>
                    <TableCell>{contact.email}</TableCell>
                    <TableCell>{contact.department}</TableCell>
                    <TableCell>{handleIsActive(contact)}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </PerfectScrollbar>
      </CardContent>
      <CardActions className={classes.actions}>
        <TablePagination
          component="div"
          count={contacts.length}
          onChangePage={handlePageChange}
          onChangeRowsPerPage={handleRowsPerPageChange}
          page={page}
          rowsPerPage={rowsPerPage}
          rowsPerPageOptions={[5, 10, 25]}
        />
      </CardActions>
    </Card>
  );
};
 ContactTable.propTypes = {
  className: PropTypes.string
};

export default ContactTable;