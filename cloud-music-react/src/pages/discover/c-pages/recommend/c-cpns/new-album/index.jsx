import React, { memo } from 'react';

import { NewAlbumWrapped } from './style';
import HeaderRCM from '@/components/header-rcm';

const NewAlbum = memo(() => {
  return (
    <NewAlbumWrapped>
      <HeaderRCM title="新碟上架" more />
    </NewAlbumWrapped>
  )
})

export default NewAlbum;