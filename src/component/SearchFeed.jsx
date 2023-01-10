import { Typography, Box } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Videos } from "../component";
import { fetchFromAPI } from "../utils/fetchFromAPI";

export default function SearchFeed() {
  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams();
  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) =>
      setVideos(data.items)
    );
  }, [searchTerm]);

  return (
    <Box p={2} sx={{ overflowX: "auto", height: "90vh", flex: 2 }}>
      <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
        Serch Result for :
        <span style={{ color: "#FC1503" }}> {searchTerm}</span>
      </Typography>
      <Videos videos={videos} />
    </Box>
  );
}
