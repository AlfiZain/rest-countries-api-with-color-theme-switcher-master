export default function DetailPageSkeleton() {
  return (
    <div className="grid grid-cols-1 gap-y-8 md:grid-cols-2 md:items-center md:gap-x-16">
      <div className="h-[32rem] w-full animate-pulse bg-gray-300"></div>

      <div className="flex flex-col gap-y-12">
        <div className="h-4 w-5/8 animate-pulse rounded bg-gray-300"></div>

        <div className="flex flex-col gap-y-8 lg:flex-row lg:justify-between lg:gap-x-12">
          <div className="w-full space-y-4">
            <div className="h-4 w-6/8 animate-pulse rounded bg-gray-300"></div>
            <div className="h-4 w-3/5 animate-pulse rounded bg-gray-300"></div>
            <div className="h-4 w-2/5 animate-pulse rounded bg-gray-300"></div>
            <div className="h-4 w-7/8 animate-pulse rounded bg-gray-300"></div>
            <div className="h-4 w-3/5 animate-pulse rounded bg-gray-300"></div>
          </div>

          <div className="w-full space-y-4">
            <div className="h-4 w-3/5 animate-pulse rounded bg-gray-300"></div>
            <div className="h-4 w-1/3 animate-pulse rounded bg-gray-300"></div>
            <div className="h-4 w-7/8 animate-pulse rounded bg-gray-300"></div>
          </div>
        </div>

        <div className="flex flex-col gap-4 xl:flex-row">
          <div className="h-4 w-3/5 animate-pulse rounded bg-gray-300"></div>
          <div className="flex w-full flex-wrap items-center gap-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className="h-4 w-[25%] animate-pulse rounded bg-gray-300"
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
