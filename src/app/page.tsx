export default function Page() {
  return (
    <div className="sm:mr-[16px] lg:mr-0 flex-1 flex flex-col items-center justify-center min-h-[720px] sm:min-h-[820px] lg:min-h-[900px] p-2 rounded-md gap-2 bg-neutral-50 mx-6 sm:mx-0 mt-6">
      <h2 className="font-semibold text-lg sm:text-2xl lg:text-3xl">
        Welcome to Personal Logs
      </h2>
      <p className="text-sm sm:text-[15px] lg:text-base text-gray-100 max-w-xl pl-4">
        This is the little corner of the web, where I keep track of the books
        I&apos;ve read and, perhaps, more things in the future. Feel free to
        browse around—you might find something interesting!
        <br />
        <br />
        If you enjoy the site and want to support it, you can{" "}
        <strong>buy me a coffee ☕</strong>.
      </p>
    </div>
  );
}
