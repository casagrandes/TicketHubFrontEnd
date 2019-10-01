import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Button } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import MenuItem from '@material-ui/core/MenuItem';


import { Formik, Field, Form } from 'formik';
import { TextField } from 'formik-material-ui';

const useStyles = makeStyles(theme => ({
  root: {},
  content: {
    padding: 0
  },
  form: {
    paddingLeft: 100,
    paddingRight: 100,
    display: 'flex',
    flexDirection: 'column'
  },
  textField: {
    marginTop: theme.spacing(2),
    marginLeft: theme.spacing(2),
    width: 200
  },
  dropDown: {
    paddingLeft: 100,
    float: "right"
  }
}));

const urgencies =[
  {
    value: 'low',
    label: 'Low',
  },
  {
    value: 'medium',
    label: 'Medium',
  },
  {
    value: 'high',
    label: 'High',
  },
]

const NewTicketForm = props => {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
 
  return (
    <div>
      <Button color="primary" variant="contained" onClick={handleClickOpen}>
        Create Ticket
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">New Ticket</DialogTitle>
        <DialogContent>
          <Formik
            initialValues={{summary: '', contactName: '', phone: '', urgency: 'low'}}
            validate={values => {
              let errors = {};
              if (!values.summary) {
                errors.summary = 'Required';
              }
              return errors;
            }}
            onSubmit={(values, {setSubmitting}) => {
              //do submit things
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
              }, 400);
            }}
        >
          {({ isSubmittting }) => (
            <Form className={classes.form}>
              <Field className={classes.textField} type="text" name="summary" label="Summary" component={TextField} />
              <Field className={classes.textField} type="text" name="contactName" label="Contact Name" component={TextField} />
              <Field className={classes.textField} type="text" name="phone" label="Phone Number" component={TextField}  />
              <Field
                type="text"
                name="urgency"
                className={classes.textField}
                select
                helperText="Select Urgency"
                label="Urgency"
                component={TextField}
              >
                {urgencies.map(option => (
                  <MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>
                ))}
                
                
              </Field>
            </Form>
          )}

          </Formik>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">Cancel</Button>
          <Button onClick={handleClose} color="primary">Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default NewTicketForm;