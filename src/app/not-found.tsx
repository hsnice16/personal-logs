export default function NotFound() {
  return (
    <div className="sm:mr-[16px] lg:mr-0 flex-1 flex flex-col items-center justify-center min-h-[720px] sm:min-h-[820px] lg:min-h-[900px] p-2 rounded-md gap-2 bg-neutral-50 mx-6 sm:mx-0 mt-6">
      <h2 className="font-semibold text-lg sm:text-2xl lg:text-3xl">
        Page doesn&apos;t exist
      </h2>
      <p className="text-sm sm:text-[15px] lg:text-base text-gray-100 max-w-xl pl-4">
        The page you are looking for does not exist.
      </p>
    </div>
  );
}
