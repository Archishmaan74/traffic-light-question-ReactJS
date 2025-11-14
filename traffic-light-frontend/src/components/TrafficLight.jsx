import { Box, Paper, Typography } from "@mui/material";
import StyledTrafficLight from "./TrafficLightStyles";
import { useEffect, useState } from "react";

const TrafficLight = () => {
  const [lightColor, setLightColor] = useState("red");
  const TrafficSignals = {
    red: { nextColor: "green", duration: 4000 },
    yellow: { nextColor: "red", duration: 500 },
    green: { nextColor: "yellow", duration: 3000 },
  };

  useEffect(() => {
    const { nextColor, duration } = TrafficSignals[lightColor];

    const t = setTimeout(() => {
      setLightColor(nextColor);
    }, duration);

    return () => clearTimeout(t);
  }, [lightColor]);

  console.log("Light Color: ", lightColor);
  return (
    <>
      <StyledTrafficLight>
        <Paper className="box" elevation={2}>
          <Typography variant="subtitle2">Traffic Light</Typography>

          <Box className="signals">
            <Box className={`circle ${lightColor === "red" ? "on-red" : ""}`} />
            <Box
              className={`circle ${lightColor === "yellow" ? "on-yellow" : ""}`}
            />
            <Box
              className={`circle ${lightColor === "green" ? "on-green" : ""}`}
            />
          </Box>
        </Paper>
      </StyledTrafficLight>
    </>
  );
};

export default TrafficLight;
