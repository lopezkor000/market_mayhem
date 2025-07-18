export default function Home() {
  return (
    <div className="flex flex-col w-1/4 self-center gap-12 mt-5">
      <a
        href="/host"
        className="text-3xl bg-blue-500 rounded font-bold hover:text-white p-3 cursor-pointer"
      >
        Host Game
      </a>
      <a
        href="/join"
        className="text-3xl bg-blue-500 rounded font-bold hover:text-white p-3 cursor-pointer"
      >
        Join Game
      </a>
    </div>
  );
}
