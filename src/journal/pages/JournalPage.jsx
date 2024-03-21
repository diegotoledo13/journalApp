import { useDispatch } from "react-redux";
import { IconButton } from "@mui/material";
import { JournalLayout } from "../layout/JournalLayout";
import { NoteView } from "../views";
import NothingSelectedView from "../views/NothingSelectedView";
import { AddOutlined } from "@mui/icons-material";
import { startNewNote } from "../../store/journal";

export const JournalPage = () => {
  const dispatch = useDispatch();
  const onClickNewNotes = () => {
    dispatch(startNewNote());
  };
  return (
    <JournalLayout>
      <NothingSelectedView />
      {/*<NoteView />*/}
      <IconButton
        onClick={onClickNewNotes}
        size="large"
        sx={{
          color: "white",
          backgroundColor: "error.main",
          ":hover": {
            backgroundColor: "error.dark",
          },
          position: "fixed",
          right: 50,
          bottom: 50,
        }}
      >
        <AddOutlined sx={{ fontSize: 30 }} />
      </IconButton>
    </JournalLayout>
  );
};
