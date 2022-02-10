import { Card, Chip, Theme, Typography, Grid } from '@material-ui/core';
import React from 'react'
import { createStyles, makeStyles } from '@material-ui/styles';

interface EmployeeItemInterface {
    name: String;
    age: Number;
    anualSalary: Number;
}

const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        padding: 8
    },
    head: {
        margin: 8
    }
}))

const EmployeeItem: React.FC<EmployeeItemInterface> = ({ name, age, anualSalary }) => {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <Grid container alignItems="center" className={classes.head}>
                <Grid item md={6} sm={12} xs={6}>
                    <Typography variant="body1">{name}</Typography>
                </Grid>
                <Grid item md={6} sm={12} xs={6}>
                    <Chip color="primary" label={`Age: ${age} years`} variant="outlined" size="small" />
                </Grid>
            </Grid>
            <Typography variant="caption" color="primary">Salario Anual: {anualSalary.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")} $</Typography>
        </Card>
    )
}

export default EmployeeItem;
