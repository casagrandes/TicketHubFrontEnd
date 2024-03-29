import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';

import { SearchInput } from '../../../../components';
import NewTicketForm from '../NewTicketForm';

const useStyles = makeStyles(theme => ({
  root: {},
  row: {
    height: '42px',
    display: 'flex',
    alignItems: 'center',
    marginTop: theme.spacing(1)
  },
  spacer: {
    flexGrow: 1
  },
  importButton: {
    marginRight: theme.spacing(1)
  },
  exportButton: {
    marginRight: theme.spacing(1)
  },
  searchInput: {
    marginRight: theme.spacing(1)
  }
}));

const TicketToolbar = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  // TODO - function for handling creating a Ticket

  return ( 
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >
      <div className={classes.row}>
        <span className={classes.spacer} />
        <NewTicketForm />
        </div>
      <div className={classes.row}>
        <SearchInput
          className={classes.searchInput}
          placeholder="Search tickets"
        />
      </div>
    </div>
  );
};

TicketToolbar.propTypes = { 
  className: PropTypes.string
};

export default TicketToolbar;