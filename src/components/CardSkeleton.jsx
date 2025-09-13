export default function CardSkeleton() {
  return (
    <div className="flex animate-pulse flex-col rounded-md border p-4 shadow">
      <div className="mb-4 h-28 w-full rounded bg-gray-300"></div>
      <div className="mb-4 h-4 w-7/10 rounded bg-gray-300"></div>
      <div className="mb-2 h-3 w-full rounded bg-gray-300"></div>
      <div className="mb-2 h-3 w-2/5 rounded bg-gray-300"></div>
      <div className="h-3 w-4/6 rounded bg-gray-300"></div>
    </div>
  );
}
