// import { posts } from "../../Constants";
import Postcard from "./Postcard";
import { getPosts } from "../../lib/Node/api";
import { useInfiniteQuery } from "@tanstack/react-query";
import { formatTimestamp } from "./Date";
import { InfinitySpin } from "react-loader-spinner";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export default function Homefeed(props) {
  const { ref, inView } = useInView();

  const { status, error, data, fetchNextPage } = useInfiniteQuery({
    queryKey: ["posts"],
    queryFn: ({ pageParam }) => getPosts(pageParam),
    initialPageParam: 0,
    getNextPageParam: (prevPage) => prevPage.nextId ?? undefined,
  });


  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage]);

  return (
    <div className="w-[640px] mx-auto mt-16 ">
      <h1 className="my-4 text-3xl font-bold tracking-tighter mb-8">
        Home Feed
      </h1>
      {status === "pending" ? (
        <div>
          <InfinitySpin
            visible={true}
            width="200"
            color="#877EFF"
            ariaLabel="infinity-spin-loading"
          />
        </div>
      ) : status === "error" ? (
        <div className="text-red-500">Error: {error.message}</div>
      ) : (
        data?.pages.map((page, index) => (
          <div key={index}>
            {page.posts.map((post, index) => {
              const time = formatTimestamp(post.time);
              const mediaType = post.postPhoto.imgType.split("/")[0];
              return (
                <Postcard
                  key={index}
                  userName={post.userName}
                  profileImage={post.profileImage.imgUrl}
                  time={time}
                  location={post.location}
                  caption={post.caption}
                  likes={post.likes}
                  tags={post.tags}
                  type={post.postPhoto.imgType}
                  mediaType={mediaType}
                  postPhoto={post.postPhoto.imgUrl}
                />
              );
            })}
          </div>
        ))
      )}

      <button ref={ref}>Load More...</button>
    </div>
  );
}
