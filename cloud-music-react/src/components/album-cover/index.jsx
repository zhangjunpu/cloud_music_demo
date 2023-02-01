import React, { Fragment, memo } from 'react';

import { formatImageUrlSize } from '@/utils/format'

import { AlbumCoverWrapped } from './style'

/**
 * 唱片封面 Item
 * size: 三种尺寸
 *  small 118x100
 *  normal 153x130
 *  large 209x177
 * 
 * @author junpu
 * @date 2023-02-01 15:12
 */
const AlbumCover = memo((props) => {
  const { info: { picUrl, name, artist }, size = "normal" } = props;
  const isLarge = size === "large";

  const renderCover = () => {
    if (isLarge) {
      return <i href="todu" className="img sprite_cover"></i>
    } else {
      return (
        <Fragment>
          <a href="todu" className="img sprite_cover"></a>
          <a href="todu" className="play sprite_iconall"></a>
        </Fragment>
      )
    }
  }

  const renderInfo = () => {
    if (isLarge) {
      return null;
    }
    return (
      <div className="info">
        <a href="todu" className="title text_nowrap">{name}</a>
        <a href="todu" className="artist text_nowrap">{artist && artist.name}</a>
      </div>
    )
  }

  return (
    <AlbumCoverWrapped className="sprite_02" info={getInfoBySize(size)}>
      <div className="cover">
        <img src={formatImageUrlSize(picUrl, size)} alt={name} />
        {renderCover()}
      </div>
      {renderInfo()}
    </AlbumCoverWrapped>
  )
})

function getInfoBySize(size) {
  switch (size) {
    case "small":
      return typeInfo.small;
    case "normal":
      return typeInfo.normal;
    case "large":
      return typeInfo.large;
    default:
      return typeInfo.normal;
  }
}

const typeInfo = {
  small: {
    image_size: 100,
    width: "118px",
    height: "150px",
    size: "100px",
    bgp: "-570px",
    play: "-85px",
    play_sel: "-110px",
    play_size: "22px",
    title_font_size: "12px",
  },
  normal: {
    image_size: 130,
    width: "153px",
    height: "178px",
    size: "130px",
    bgp: "-845px",
    play: "-140px",
    play_sel: "-170px",
    play_size: "28px",
    title_font_size: "14px",
  },
  large: {
    image_size: 177,
    width: "209px",
    height: "177px",
    size: "177px",
    bgp: "-986px",
  }
}

export default AlbumCover