import React, { useEffect } from "react";
import PersonForm from "components/PersonForm";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { useSelector, useDispatch } from "react-redux";
import { getRandomJoke } from "ducks/chuck-norris/actions"

export const Home: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    debugger;
    dispatch(getRandomJoke())
  }, [dispatch])
  const profile = useSelector<any>((state) => state.profile);
  return (
    <Container>
      {!profile && <Button variant="contained">Create Profile</Button>}
      <PersonForm />
      {profile && <Typography variant="h4">Current Profile</Typography>}
    </Container>
  );
};

export default Home;
