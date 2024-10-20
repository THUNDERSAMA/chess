import Skeleton from "../../components/skeleton";
import Border_horizontal from "../../components/border";
import Border_vertical from "../../components/borderver";
import Image from "next/image";
export default function Home() {
  return (
    <div className="items-center justify-items-center min-h-screen pt-4 p-8 pb-20 flex flex-col">
      <div className="flex flex-row">
        <div>
          <Border_vertical></Border_vertical>
        </div>
        <div className="chess">
          <Skeleton></Skeleton>
          <Border_horizontal></Border_horizontal>
        </div>
        <div></div>
      </div>
      <Image
        src={`/icons/boat.svg`} // Dynamic src
        alt="My Icon"
        width={24}
        height={24}
      />
    </div>
  );
}
