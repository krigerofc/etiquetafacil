export default function Feedback({ message, type }) {
  if (!message) return null;

  return (
    <div
      className={`fixed right-6 bottom-6 z-50 px-6 py-3 rounded-lg shadow-lg text-sm max-w-xs w-full animate-fadeIn
        ${type === "success"
          ? "bg-green-100 border border-green-400 text-green-700"
          : "bg-red-100 border border-red-400 text-red-700"
        }`}
    >
      {message}
      <style jsx>{`
        @keyframes fadeIn {
          0% { opacity: 0; transform: translateY(10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.7s ease-out forwards;
        }
      `}</style>
    </div>
  );
}