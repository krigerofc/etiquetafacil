export default function LoadingScreen() {
  return (
    <div className="flex items-center justify-center h-screen bg-white bg-opacity-80">
      <div className="flex flex-col items-center space-y-4">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-red-500"></div>
        <p className="text-gray-800 text-lg font-semibold">Carregando...</p>
      </div>
    </div>
  );
}