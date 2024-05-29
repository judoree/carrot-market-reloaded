export default function Home() {
  return (
    <main className="bg-gray-300 h-screen flex items-center justify-center p-5">
      <div className="bg-white shadow-lg p-5 w-full rounded-2xl">
        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <span className="text-gray-800 -mb-1 font-semibold">In transit</span>
            <span className="text-4xl font-semibold">Coolblue</span>
          </div>
          <div className="size-12 bg-orange-300 rounded-full" />
        </div>
        <div className="my-2 flex items-center gap-2">
          <span className="bg-green-500 text-white uppercase px-2 py-1 text-xs font-medium rounded-full">Today</span>
          <span>9:30~10:30</span>
        </div>
        <div className="relative">
          <div className="bg-gray-500 absolute rounded-full w-full h-2" />
          <div className="bg-green-500 absolute rounded-full w-2/3 h-2" />
        </div>
        <div className="flex justify-between text-gray-500 mt-5 items-center">
          <span>Expected</span>
          <span>Sorting center</span>
          <span>In transit</span>
          <span className="text-gray-300">Delivered</span>
        </div>
      </div>
    </main>
  );
}
