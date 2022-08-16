import { AddOutlined } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { JournalLayout } from "../layout/JournalLayout";
import { NoteView, NothingSelectedView } from "../view";



export const JournalPage = () => {
  return (
    <JournalLayout>

      {/* <Typography>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam magni aliquid illum? Quae ipsa a rem repellendus exercitationem neque? Nostrum quibusdam a aliquam illum recusandae reprehenderit. Quia perspiciatis mollitia molestias?</Typography> */}
      
      <NothingSelectedView />
      {/* NothinSelected */}
      {/* <NoteView /> */}

      <IconButton
        size="large"
        sx={{
          color:"white",
          backgroundColor:"error.main",
          ':hover':{backgroundColor:"error.main", opacity:0.9},
          position:"fixed",
          right:50,
          bottom:50,
        }}
      >
        <AddOutlined  sx={{ fontSize: 30}}/>
      </IconButton>
      
    </JournalLayout>
  )
}
