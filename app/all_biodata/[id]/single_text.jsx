export default function Text({ text, value }) {
  return (
    <div>
      <p className="font-semibold text-gray-800 text-xl mb-2">{text}:</p>
      <p className="text-gray-800 text-xl">{value}</p>
    </div>
  );
}
