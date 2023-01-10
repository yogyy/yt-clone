import { Box } from "@mui/material";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { Videos, ChannelCard } from "../component";
import { fetchFromAPI } from "../utils/fetchFromAPI";

export default function ChannelDetail() {
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);
  const { id } = useParams();
  console.log(channelDetail, videos);
  useEffect(() => {
    fetchFromAPI(`channels?.part=snippet&id=${id}`).then((data) =>
      setChannelDetail(data?.items[0])
    );
    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then(
      (data) => setVideos(data?.items)
    );
  }, [id]);

  return (
    <Box minHeight="90vh">
      <Box>
        <div
          style={{
            background:
              "linear-gradient(34deg, rgba(0,255,132,1) 17%, rgba(38,23,255,1) 59%, rgba(0,212,255,1) 85%)",
            zIndex: 10,
            height: "300px",
          }}
        />
        <ChannelCard channelDetail={channelDetail} marginTop="-110px" />
      </Box>
      <Box p="2" justifyContent="center">
        <Box />
        <Videos videos={videos} />
      </Box>
    </Box>
  );
}
