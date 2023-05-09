import { useEffect, useState } from "react";

export default function Debug() {
  const [error, setError] = useState<any>(null);
  const [warn, setWarn] = useState<any>(null);
  const [info, setInfo] = useState<any>(null);

  const onErr = (err: any) => {
    setError(err);
  };

  const onWarn = (warn: any) => {
    setWarn(warn);
  };

  const onInfo = (info: any) => {
    setInfo(info);
  };

  useEffect(() => {
    window.onerror = onErr;
    //   window.on
    //     window.oninfo = onInfo;
  }, []);

  return (
    <div className=" absolute z-50 h-screen w-screen bg-gray-300 bg-opacity-60 text-black">
      <div className="flex h-full w-full flex-col items-center justify-center">
        <div className="h-1/2 w-1/2 rounded-lg bg-white p-4 shadow-lg">
          <h1 className="text-2xl font-bold">Error</h1>
          <p className="text-lg font-semibold">{error?.toString?.()}</p>
        </div>
      </div>
    </div>
  );
}
