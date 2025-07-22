type LayoutPageH3Props = {
  heading: string;
};

export default function LayoutPageH3({ heading }: LayoutPageH3Props) {
  return (
    <h3
      className="sm:pb-6 rounded-md sm:text-lg lg:text-xl font-semibold pt-[165px] -mt-[140px] px-4 sm:px-0"
      id={heading}
    >
      {heading}
    </h3>
  );
}
