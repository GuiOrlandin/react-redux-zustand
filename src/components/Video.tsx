import ReactPlayer from "react-player";
import { next, useCurrentLesson } from "../store/slice/Player";
import { useAppDispatch } from "../store";

export function Video() {
  const dispatch = useAppDispatch();

  const { currentLesson } = useCurrentLesson();

  function handlePlatNext() {
    dispatch(next());
  }

  return (
    <div className="w-full bg-zinc-950 aspect-video">
      <ReactPlayer
        width="100%"
        height="100%"
        playing
        onEnded={handlePlatNext}
        controls
        url={`https://www.youtube.com/watch?v=${currentLesson?.id}`}
      />
    </div>
  );
}
