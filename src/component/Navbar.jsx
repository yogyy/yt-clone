import { Stack } from "@mui/system";
import { Link } from "react-router-dom";
import { logo } from "../utils/constants";
import SearchBar from "./SearchBar";

export default function Navbar() {
  return (
    <Stack
      direction="row"
      alignItems="center"
      p={1}
      sx={{
        position: "sticky",
        background: "#1e1e1e",
        top: "0",
        justifyContent: "space-between",
      }}
    >
      <Link to="/" style={{ display: "flex", alignItems: "center" }}>
        <h1 style={{ marginLeft: 40, color: "red" }}>{logo}</h1>
      </Link>
      <SearchBar />
    </Stack>
  );
}
