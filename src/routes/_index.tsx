import { IonIcon } from "@ionic/react";
import { logoGithub } from "ionicons/icons";

export default function Index() {
  return (
    <div className="w-full h-dvh bg-neutral-900 flex flex-col items-center justify-center">
      <h1 className="bg-gradient-to-r from-cyan-400 via-blue-400 to-blue-600 text-transparent bg-clip-text text-5xl md:text-6xl font-extrabold text-shadow-lg text-shadow-blue-500/10">
        14" Palette
      </h1>
      <p className="my-4 text-neutral-100 text-base md:text-lg">
        Digital creatives, making the world&nbsp;
        <span className="bg-gradient-to-br from-purple-500 to-pink-500 text-transparent bg-clip-text font-medium text-shadow-lg text-shadow-pink-500/10">
          vibrant
        </span>
      </p>
      <a
        href="https://github.com/14palette"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 px-6 py-3 bg-neutral-800 hover:bg-neutral-700 text-neutral-100 font-medium rounded-lg transition-colors duration-200 border border-neutral-700 hover:border-neutral-600 flex items-center gap-2"
      >
        <IonIcon icon={logoGithub} className="size-5" />
        GitHub
      </a>
    </div>
  );
}
