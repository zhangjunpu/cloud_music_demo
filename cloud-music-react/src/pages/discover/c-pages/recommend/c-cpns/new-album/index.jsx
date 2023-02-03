import React, { memo, useEffect, useRef } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import { requestNewAlbumsAction } from "../../store/actionCreators";

import { Carousel } from "antd";
import { NewAlbumWrapped } from "./style";
import HeaderRCM from "@/components/header-rcm";
import AlbumCover from "@/components/album-cover";

/**
 * 推荐 - 新碟上架
 * @author junpu
 * @date 2023-02-01 17:50
 */
const NewAlbum = memo(() => {
  const { newAlbums } = useSelector(
    (state) => ({
      newAlbums: state.getIn(["recommend", "newAlbums"]),
    }),
    shallowEqual
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(requestNewAlbumsAction(10));
  }, [dispatch]);

  const bannerRef = useRef();

  return (
    <NewAlbumWrapped>
      <HeaderRCM title="新碟上架" more />
      <div className="out">
        <div className="inner">
          <div className="banner">
            <Carousel ref={bannerRef} dots={false}>
              {[0, 1].map((item) => {
                return (
                  <div className="list" key={item}>
                    {newAlbums.slice(item * 5, (item + 1) * 5).map((item, i) => {
                      return <AlbumCover key={item.id} info={item} size="small" />;
                    })}
                  </div>
                );
              })}
            </Carousel>
          </div>
          <button className="btn left sprite_02" onClick={(e) => bannerRef.current.prev()}></button>
          <button className="btn right sprite_02" onClick={(e) => bannerRef.current.next()}></button>
        </div>
      </div>
    </NewAlbumWrapped>
  );
});

export default NewAlbum;
