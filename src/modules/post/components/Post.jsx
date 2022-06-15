import React, { useState } from "react";

import PostHeader from "./Header";
import PostImage from "./Image";

import BookmarkButton from "./interactor/BookmarkButton";
import CommentButton from "./interactor/CommentButton";
import ForwardButton from "./interactor/ForwardButton";
import LikeButton from "./interactor/LikeButton";
import SlideController from "./interactor/SlideController";
import PostLikes from "./caption/Likes";
import PostInteractor from "./Interactor";
import PostCaption from "./Caption";
import Avatar from "../../../libs/components/Avatar";

function Post(props) {
  const { profile, post } = props;
  const [galleryIndex] = useState(0);

  return (
    <article id="post-article">
      <PostHeader account={post.account} />

      <figure id="post-gallery">
        <div id="post-gallery" className="flex items-center overflow-auto">
          {post.galleries.map((gallery) => (
            <PostImage
              key={gallery.id}
              aspectRatio={gallery.aspectRatio}
              src={gallery.src}
            />
          ))}
        </div>

        <PostInteractor
          interactorRightTools={<BookmarkButton />}
          interactorLeftTools={
            <React.Fragment>
              <LikeButton />
              <CommentButton />
              <ForwardButton />
            </React.Fragment>
          }
          sliderControlTools={
            post.galleries.length > 1 && (
              <React.Fragment>
                {Array(post.galleries.length)
                  .fill(null)
                  .map((_, index) => (
                    <SlideController
                      key={index}
                      isActive={galleryIndex === index}
                    />
                  ))}
              </React.Fragment>
            )
          }
        />
      </figure>

      <figcaption id="post-caption" className="px-4">
        <PostLikes likesCount={post.likes_count} />
        <PostCaption username={post.account.username} caption={post.caption} />
      </figcaption>

      <section className="flex items-center justify-between gap-4 p-4">
        <div className="flex items-center gap-2">
          <Avatar
            alternate={profile.username}
            src={profile.avatar}
            size="xs"
            useBorder={false}
          />

          <input
            className="font-light text-xs placeholder-[#999999] bg-transparent"
            disabled
            type="text"
            placeholder="Add comment..."
          />
        </div>

        <div className="flex items-center gap-1.5">
          <button> 😭 </button>
          <button> 😍 </button>
          <button className="w-3.5 h-3.5 flex items-center justify-center text-[#999999] text-[10px] border border-[#999999] rounded-full">
            <span className="relative -translate-y-[0.5px] translate-x-[0.2px]">+</span>
          </button>
        </div>
      </section>
    </article>
  );
}

export default Post;
