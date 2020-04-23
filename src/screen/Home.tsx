import React from "react";
import PersonForm from "components/PersonForm";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { useSelector } from "react-redux";

import { RootState } from "index";

export const Home: React.FC = () => {
  const profile = useSelector((state: RootState) => state.profile);
  return (
    <Container>
      {!profile && <Button variant="contained">Create Profile</Button>}
      <PersonForm />
      {profile && <Typography variant="h4">Current Profile</Typography>}
    </Container>
  );
};

export default Home;
