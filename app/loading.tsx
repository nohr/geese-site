import {FaHatCowboy} from "react-icons/fa";

export default function Loading() {
  return <div className="flex flex-col w-full h-full items-center text-4xl font-serif justify-center">
  <FaHatCowboy className="animate-bounce" />
  <h1> Loading... </h1>
  </div>;
}
