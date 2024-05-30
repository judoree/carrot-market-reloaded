export default function Home() {
  return (
    <main className="bg-gray-400 h-screen flex items-center justify-center p-5 sm:bg-red-200  md:bg-green-200 lg:bg-cyan-300 xl:bg-orange-300">
      <div className="bg-white shadow-lg p-5 rounded-3xl w-full max-w-screen-sm flex flex-col gap-4">
        <div className="group flex flex-col">
          <input className="bg-gray-100 w-full rounded-r-sexy-name mt-ktwiz " placeholder="Write Email" />
          <span className="group-focus-within:block hidden">Make sure it is a valid email....</span>
          <button>Sub mit</button>
        </div>
      </div>
    </main>
  );
}
