export default function Page() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center min-h-[800px] p-2 rounded-md gap-2 bg-neutral-50 mt-6">
      <h2 className="font-semibold text-3xl">Welcome to Personal Log</h2>
      <p className="text-gray-100 max-w-xl pl-4">
        This is my little corner of the web, where I keep track of the books
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
