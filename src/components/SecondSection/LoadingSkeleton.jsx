import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const LoadingSkeleton = () => {
  return (
    <div className="my-1 cursor-pointer bg-white flex flex-col items-center hover:shadow-md hover:scale-[1.01] h-[120px] md:h-[150px] w-[90px] md:w-[130px] focus:outline-0 rounded-md p-1 lg:p-0">
      <div className="h-[full] w-[90%] flex flex-col items-center justify-center">
        <Skeleton
          circle
          className="h-[90px] w-[80px] md:h-[120px]  md:w-[120px]"
        />
      </div>

      <Skeleton className="w-[80px] md:w-[100px] h-[10px]" />
    </div>
  );
};

export default LoadingSkeleton;
