import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';

import { AssetToolbar, AssetTable } from './components';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  content: {
    marginTop: theme.spacing(2)
  }
}));

const AssetList = () => {
  const classes = useStyles();
  const [hasError, setErrors] = useState(false);

  const [assets, setAssets] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("http://127.0.0.1:5000/api/assets");
      res
        .json()
        .then(res => setAssets(res))
        .catch(err => setErrors(err));
    }

    fetchData();
  },[]);

  if(hasError) console.error(hasError);

  return (
    <div className={classes.root}>
      <AssetToolbar />
      <div className={classes.content}>
        <AssetTable assets={assets} />
      </div>
    </div>
  );
};

export default AssetList;