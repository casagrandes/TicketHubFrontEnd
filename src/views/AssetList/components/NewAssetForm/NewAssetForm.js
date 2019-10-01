import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Button } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import MenuItem from '@material-ui/core/MenuItem';

import { Formik, Field, Form } from 'formik';
import { TextField} from 'formik-material-ui';

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

const locations =[
  {
    value: 'main',
    label: 'Main Site',
  },
  {
    value: 'remote',
    label: 'Remote',
  },
]

const assetTypes =[
  {
    value: 'desktop',
    label: 'Desktop',
  },
  {
    value: 'laptop',
    label: 'Laptop',
  },
  {
    value: 'server',
    label: 'Server',
  },
]

const NewAssetForm = props => {
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
        Create Asset
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="newContactForm-title">New Asset</DialogTitle>
        <DialogContent>
          <Formik
            initialValues={{ assetName: '', assetType: '', location: '', serialNumber: '', tagNumber: '', contact: '' }}
            validate={values => {
              let errors = {};
              if (!values.assetName) {
                errors.assetName = 'Required';
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
              <Field className={classes.textField} type="text" name="assetName" label="Asset Name" component={TextField} />
              <Field
                type="text"
                name="assetType"
                className={classes.textField}
                select
                helperText="Select Type"
                label="Asset Type"
                component={TextField}
              >
                {assetTypes.map(option => (
                  <MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>
                ))}
              </Field>
              <Field
                type="text"
                name="location"
                className={classes.textField}
                select
                helperText="Select Location"
                label="Location"
                component={TextField}
              >
                {locations.map(option => (
                  <MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>
                ))}
              </Field>
              <Field className={classes.textField} type="text" name="serial" label="Serial Number" component={TextField} />
              <Field className={classes.textField} type="text" name="tagNumber" label="Tag Number" component={TextField} />
              <Field className={classes.textField} type="text" name="contact" label="Contact" component={TextField} />
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

export default NewAssetForm;