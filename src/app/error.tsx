"use client";

export default function Error() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center min-h-[800px] p-2 rounded-md gap-2 bg-neutral-50 mt-6">
      <h2 className="font-semibold text-3xl">Something went wrong</h2>
      <p className="text-gray-100">
        It seems like something went wrong. Please refresh and try again.
      </p>
    </div>
  );
}
