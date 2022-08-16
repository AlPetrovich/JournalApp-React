import { JournalLayout } from "../layout/JournalLayout";
import { NoteView, NothingSelectedView } from "../view";



export const JournalPage = () => {
  return (
    <JournalLayout>

      {/* <Typography>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam magni aliquid illum? Quae ipsa a rem repellendus exercitationem neque? Nostrum quibusdam a aliquam illum recusandae reprehenderit. Quia perspiciatis mollitia molestias?</Typography> */}
      
      {/* <NothingSelectedView /> */}
      {/* NothinSelected */}
      <NoteView />

      
    </JournalLayout>
  )
}
