export default function Home() {
  return (
    <main className="bg-gray-400 h-screen flex items-center justify-center p-5 sm:bg-red-200  md:bg-green-200 lg:bg-cyan-300 xl:bg-orange-300">
      <div className="bg-white shadow-lg p-5 w-full rounded-3xl max-w-screen-sm flex flex-col md:flex-row gap-2">
        <input
          className="w-full bg-gray-500 rounded-full py-3 pl-5 outline-none ring ring-transparent transition-shadow focus:ring-offset-2 focus:ring-teal-400 "
          type="text"
          placeholder="Serch here"
        />
        <button className="bg-black text-white rounded-full py-2 bg-opacity-50 outline-none focus:scale-90  transition-transform font-medium md:px-10">
          Secch
        </button>
      </div>
    </main>
  );
}
