import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "14\" Palette | Digital Creatives" },
    { name: "description", content: "Digital creatives, making the world vibrant" },
  ];
}

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-dvh">
      <h1 className="bg-gradient-to-r from-cyan-400 via-blue-400 to-blue-600 text-transparent bg-clip-text text-6xl font-bold">14" Palette</h1>
      <p className="my-4 text-neutral-100 text-lg">
        Digital creatives, making the world <span className="bg-gradient-to-br from-purple-500 to-pink-500 text-transparent bg-clip-text font-medium">vibrant</span>
      </p>
    </div>
  );
}
