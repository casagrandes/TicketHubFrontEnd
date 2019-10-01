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
  Typography,
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

const TicketTable = props => {
  const { className, tickets, ...rest } = props;
  // console.log(tickets)

  const classes = useStyles();

  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [page, setPage] = useState(0);

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  const handleRowsPerPageChange = event => {
    setRowsPerPage(event.target.value);
  };

  // const emptyRows = rowsPerPage - Math.min(rowsPerPage, tickets.length - page * rowsPerPage);
  // console.log(tickets[0])
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
                  <TableCell>Ticket Number</TableCell>
                  <TableCell>Summary</TableCell>
                  <TableCell>Contact Name</TableCell>
                  <TableCell>Phone</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Urgency</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {tickets.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((ticket, index) => (
                  <TableRow
                    className={classes.tableRow}
                    hover
                    key={ticket.id}
                  >
                    <TableCell>
                      <div className={classes.idContainer}>
                        {ticket.id}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className={classes.nameContainer}>
                        <Typography variant="body1">{ticket.summary}</Typography>
                      </div>
                    </TableCell>
                    <TableCell>{`${ticket.contact.firstName} ${ticket.contact.lastName}`}</TableCell>
                    <TableCell>{ticket.contact.phone}</TableCell>
                    <TableCell>{ticket.status}</TableCell>
                    <TableCell>{ticket.Urgency.name}</TableCell>
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
          count={tickets.length}
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

TicketTable.propTypes = {
  className: PropTypes.string,
  tickets: PropTypes.array.isRequired
};

export default TicketTable;