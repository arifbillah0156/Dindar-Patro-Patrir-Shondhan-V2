export default function Text({ text, value }) {
  return (
    <div className="flex text-start">
      <p className="min-w-[40%] font-semibold px-1 border-gray-300 py-3  pb-4 md:text-lg">
        {text}{" "}
      </p>
      <p className="min-w-[60%] px-1 pl-2 py-3  border-gray-300  pb-4  md:text-lg">
        {"↔ "} {value}{" "}
      </p>
    </div>
  );
}
