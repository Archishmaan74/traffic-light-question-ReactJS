import { styled } from "@mui/material/styles";

const StyledTrafficLight = styled("div")(() => ({
  display: "flex",
  justifyContent: "center",
  marginTop: 40,

  "& .box": {
    width: 220,
    padding: 28,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    borderRadius: 12,
  },

  "& .signals": {
    marginTop: 20,
    background: "#111",
    padding: 20,
    borderRadius: 10,
    display: "flex",
    flexDirection: "column",
    gap: 20,
    alignItems: "center",
  },

  "& .circle": {
    width: 85,
    height: 85,
    borderRadius: "50%",
    background: "#333",
  },

  "& .on-red": {
    background: "red",
  },
  "& .on-yellow": {
    background: "yellow",
  },
  "& .on-green": {
    background: "green",
  },
}));

export default StyledTrafficLight;
