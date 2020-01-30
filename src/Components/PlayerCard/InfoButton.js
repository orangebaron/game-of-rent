import React from 'react';
import InfoIcon from '@material-ui/icons/Info';
import { fontSize } from '@material-ui/system';
import Fab from '@material-ui/core/fab';
import { makeStyles } from "@material-ui/core/styles";


const InfoButton=(props)=>{
    let classes = makeStyles(theme => ({
        fab: {
          margin: theme.spacing(1)
        },
        extendedIcon: {
          marginRight: theme.spacing(1)
        }
      }));
  
    return(
        <Fab
        color="primary"
        size="small"
        aria-label="add"
        className={classes.fab}
        style={{cursor: "pointer"}}
      >
<InfoIcon>
</InfoIcon>
</Fab>
      );
  }



export default InfoButton;
