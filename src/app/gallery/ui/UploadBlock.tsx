'use client'
import { useState } from 'react'
import { UploadButton } from '@/ui/Button/UploadButton'
import { UploadPopup } from '@/components/UploadPopup'

const UploadBlock = () => {
  const [isActive, setActive] = useState(false)
  return (
    <div>
      <UploadButton click={() => setActive(true)} />
      <UploadPopup active={isActive} setActive={setActive} />
    </div>
  )
}

export default UploadBlock
