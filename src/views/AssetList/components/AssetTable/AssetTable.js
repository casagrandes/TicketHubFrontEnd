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

const AssetTable = props => {
  const { className, assets, ...rest } = props;

  const classes = useStyles();

  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [page, setPage] = useState(0);

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  const handleRowsPerPageChange = event => {
    setRowsPerPage(event.target.value);
  };

  const handleStatus = (asset) => {
    if(asset.status) return "Active"
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
                  <TableCell>Asset Name</TableCell>
                  <TableCell>Asset Type</TableCell>
                  <TableCell>Location</TableCell>
                  <TableCell>Serial Number</TableCell>
                  <TableCell>Tag Number</TableCell>
                  <TableCell>Contact/User</TableCell>
                  <TableCell>Status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {assets.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(asset => (
                  <TableRow
                    className={classes.tableRow}
                    hover
                    key={asset.id}
                  >
                    <TableCell>
                      <div className={classes.idContainer}>
                        {asset.name}
                      </div>
                    </TableCell>
                    <TableCell>{asset.type}</TableCell>
                    <TableCell>{asset.location}</TableCell>
                    <TableCell>{asset.serialNumber}</TableCell>
                    <TableCell>{asset.tagNumber}</TableCell>
                    <TableCell>{`${asset.contact.firstName} ${asset.contact.lastName}`}</TableCell>
                    <TableCell>{handleStatus(asset)}</TableCell>
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
          count={assets.length}
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

AssetTable.propTypes = {
  className: PropTypes.string,
  assets: PropTypes.array.isRequired
};

export default AssetTable;