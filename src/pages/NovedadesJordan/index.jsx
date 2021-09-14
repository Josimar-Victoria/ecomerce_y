import { CardContent, Collapse, Container, IconButton, Typography } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";
import { AddShoppingCart, ExpandMore } from "@material-ui/icons";
import { useState } from "react";
import clsx from 'clsx';
export default function NovedadesJordan({ products:{nombre, precio,imagen1, rank, subDescrition } }) {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const classes = useStyles();

  return (
    <Container>
      <div className={classes.root}>
        <div className={classes.info}>
          <p className={classes.nombre}>{nombre}</p>
          <h2 className={classes.precio}>$ {precio}</h2>
        </div>
        <img className={classes.img} src={imagen1} alt="" />
        <div className={classes.cart__action}>
          <IconButton aria-label="add to favorites">
            <AddShoppingCart />
          </IconButton>
          {Array(rank).fill().map((_, i) => (
            <p>&#11088;</p>
          ))}

          <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMore/>
        </IconButton>
        </div>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
            {subDescrition}
          </Typography>
        </CardContent>
      </Collapse>
        <hr />
      </div>
    </Container>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#fff",
    border: "none",
    borderRadius: "5px",
    maxWidth: "782px",
    minWidth: "640",
  },
  info: {
    display: "flex",
    alignItems: "center",
  },
  precio: {
    marginLeft: "8rem",
  },
  img: {
    width: "100%",
  },
  cart__action:{
    display: "flex",
    alignItems: "center",
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
}));
