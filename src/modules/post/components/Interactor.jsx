function PostInteractor(props) {
  const { interactorLeftTools, sliderControlTools, interactorRightTools } = props;
  
  return (
    <div
      id="post-interactors"
      className="flex items-center justify-between px-4 py-3"
    >
      <div
        id="post-interactor-external"
        className="flex-1 flex items-center justify-start gap-2"
      >
        {interactorLeftTools}
      </div>

      <div
        id="post-interactor-control"
        className="flex-1 flex items-center justify-center gap-1.5"
      >
        {sliderControlTools}
      </div>

      <div
        id="post-interactor-internal"
        className="flex-1 flex items-center justify-end gap-2"
      >
        {interactorRightTools}
      </div>
    </div>
  );
}

export default PostInteractor;
