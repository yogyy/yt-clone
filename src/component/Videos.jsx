import { Box, Stack } from "@mui/material";
import React from "react";
import { VideoCard, ChannelCard, Loader } from "../component";

export default function Videos({ videos, direction }) {
  if (!videos?.length) return <Loader />;
  return (
    <Stack
      direction={direction || "row"}
      flexWrap="wrap"
      justifyContent="center"
      alignItems="flex-start"
      gap={2}
    >
      {videos.map((item, idx) => (
        <Box key={idx}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
    </Stack>
  );
}

/*
display="flex"
      direction="row"
      flexWrap="wrap"
      justifyContent="center" // default start
      gap={2}
      marginTop="20px"
*/
