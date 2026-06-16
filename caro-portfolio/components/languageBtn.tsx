export default function LanguageBtn() {
  return (
    <div className="absolute top-0 right-0">
      <div className="pt-10 pr-10 font-roboto-mono text-13 space-x-1">
        <button className="cursor-pointer hover:font-bold transition-all duration-300 ease-in-out">
          ESP
        </button>
        <span>|</span>
        <button className="cursor-pointer hover:font-bold transition-all duration-300 ease-in-out">
          ENG
        </button>
      </div>
    </div>
  );
}
