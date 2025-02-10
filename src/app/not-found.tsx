export default function NotFound() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center gap-2 p-2 min-h-[800px] bg-neutral-50 rounded-md mt-6">
      <h2 className="font-semibold text-3xl">Page doesn't exist</h2>
      <p className="text-gray-100">
        The page you are looking for does not exist.
      </p>
    </div>
  );
}
