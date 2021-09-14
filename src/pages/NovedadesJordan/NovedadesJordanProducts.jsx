import { Grid, makeStyles } from "@material-ui/core";
import React from "react";
import NovedadesJordan from ".";
import products from "../../util/novedadesJordan.json";
export default function NovedadesJordanProducts() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        {products.map((products) => (
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <NovedadesJordan key={products.id} products={products} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));
