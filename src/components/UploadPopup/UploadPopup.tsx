import './UploadPopup.styles.scss'
import { MouseEvent } from 'react'

type PopupProps = {
  active: boolean
  setActive: (b: boolean) => void
}

const UploadPopup = ({ active, setActive }: PopupProps) => {
  return (
    <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
      <div
        className={active ? 'modal_content active' : 'modal_content'}
        onClick={(event: MouseEvent<HTMLDivElement>) => event.stopPropagation()}
      >
        <div>
          <h4 className='modal_title'>Upload a .jpg or .png Cat Image</h4>
          <div className='modal_subtitle'>
            Any uploads must comply with the{' '}
            <span className='modal_highlighted'>upload guidelines </span> or face deletion.
          </div>
        </div>
        <div className='upload_space'>
          <div className='upload_space_text'>
            <span className='upload_space_strong'> Drag here</span> your file or{' '}
            <span className='upload_space_strong'> Click here </span> to upload
          </div>
        </div>
        <div className='file_text'>No file selected</div>
      </div>
    </div>
  )
}

export { UploadPopup }
