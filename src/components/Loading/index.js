import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const LoadingItem = () => (
  <div className="col-6 col-md-4 col-xl-3 pt-3 pb-3">
    <SkeletonTheme>
        <Skeleton count={1} height={200} />
    </SkeletonTheme>
  </div>
);

const Loading = (props) => {
  const itemLoad = props.item ? props.item : 12;
  const ListItemLoading = () => {
      let i = 0, htmlLoading = [];
      while(i < itemLoad){
        htmlLoading.push(<LoadingItem key={i}/>);
        i++;
      }
      return htmlLoading;
  }

  return (
    <div className="container">
      <div className="row">
          <ListItemLoading/>
      </div>
    </div>
  );
};

export default Loading;
