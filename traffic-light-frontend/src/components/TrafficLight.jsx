import { Box, Paper, Typography } from "@mui/material";
import StyledTrafficLight from "./TrafficLightStyles";
import { useEffect, useState } from "react";

const TrafficLight = () => {
  const [lightColor, setLightColor] = useState("red");

  useEffect(() => {
    const durations = { red: 4000, yellow: 500, green: 3000 };
    const nextColor = { red: "green", yellow: "red", green: "yellow" };

    const t = setTimeout(() => {
      setLightColor(nextColor[lightColor]);
    }, durations[lightColor]);

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
