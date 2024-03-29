import React from "react";
import { Grid, Typography } from "@mui/material";
import { StarOutline } from "@mui/icons-material";

const NothingSelectedView = () => {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{
        minHeight: "100vh",
        backgroundColor: "primary.main",
        borderRadius: 3,
      }}
      className="animate__animated animate__fadeIn animate__faster"
    >
      <Grid item xs={12}>
        <StarOutline sx={{ fontSize: 100, color: "white" }} />
      </Grid>
      <Grid item xs={12}>
        <Typography color="white" variant="h5">
          Crea una entrada!
        </Typography>
      </Grid>
    </Grid>
  );
};

export default NothingSelectedView;
