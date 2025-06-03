export default function LoadingUI() {
  return (
    <div className="flex-1 pr-2 pb-4 mt-6 animate-pulse">
      <div className="flex flex-col">
        <div className="h-6 rounded-md bg-neutral-100 w-[128px] mb-6 mt-2" />

        <div className="flex gap-4">
          {new Array(2).fill("0").map((value, index) => {
            return (
              <div
                className="rounded-md border-[2px] border-neutral-100 p-1 w-[240px] h-[240px] flex justify-center items-center"
                key={index + value}
              >
                <div className="bg-neutral-100 w-[200px] h-[200px]"></div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex flex-col">
        <div className="h-6 rounded-md bg-neutral-100 w-[128px] mb-6 mt-8" />

        <div className="flex gap-4 flex-wrap">
          {new Array(3).fill("0").map((value, index) => {
            return (
              <div
                className="rounded-md border-[2px] border-neutral-100 p-1 w-[240px] h-[240px] flex justify-center items-center"
                key={index + value}
              >
                <div className="bg-neutral-100 w-[200px] h-[200px]"></div>
              </div>
            );
          })}
        </div>

        <div className="rounded-md border-[2px] border-neutral-100 p-1 w-[240px] h-[240px] flex justify-center items-center mt-4">
          <div className="bg-neutral-100 w-[200px] h-[200px]"></div>
        </div>
      </div>
    </div>
  );
}
