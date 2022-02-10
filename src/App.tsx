import React, { useEffect, useState } from 'react';
import BusinessService from './services/Business';
import { Employee } from './interfaces/Business';
import { Box, Container, Grid } from '@material-ui/core';
import SearchInput from './components/SearchInput';
import EmployeeItem from './components/EmployeeItem';
import { grey, red } from '@material-ui/core/colors';
import { createStyles, makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(createStyles({
  root: {
    backgroundColor: grey[100]
  },
  alert: {
    color: "#fff",
    backgroundColor: red[800],
    borderRadius: 4,
    padding: 8,
    marginBottom: 8,
  }
}));

function App() {
  const classes = useStyles();
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [error, setError] = useState("")

  const handleSearch = (s: string) => {
    setError("")
    if (s.trim() !== "") {
      BusinessService.getEmployee(s).then(data => {
        setEmployees([data])
      }).catch(() => {
        setError("Error: Input a valid Employee ID!")
      })
    } else {
      BusinessService.getEmployees().then(data => {
        setEmployees(data);
      }).catch(() => {
        setError("Error: No response from the server!")
      });
    }
  }

  useEffect(() => {
    setError("")
    BusinessService.getEmployees().then(data => {
      setEmployees(data);
    }).catch(() => {
      setError("Error: No response from the server!")
    });
  }, [])

  return (
    <Container className={classes.root}>
      <SearchInput onSubmit={handleSearch} />
      {(error !== "") && (
        <Box className={classes.alert}>
          {error}
        </Box>
      )}
      <Grid container spacing={2} alignItems="center" justifyContent="center">
        {employees.map(e => (
          <Grid item key={e.id as React.Key} lg={3} md={4} sm={6} xs={12}>
            <EmployeeItem name={e.employee_name} age={e.employee_age} anualSalary={e.employee_annual_salary} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default App;
