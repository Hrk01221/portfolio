import { useEffect, useState } from "react";

export const FlipCard = ({item , idx}) => {
  const [isMobile, setIsMobile] = useState(false);
  const [flipped, setFlipped] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div
      className="card group w-full lg:w-1/2 h-80 lg:h-100 aspect-video [perspective:1000px]"
      onClick={isMobile ? () => setFlipped((prev) => !prev) : undefined}
    >
      <div
        className={`
          relative h-full w-full transition-transform duration-700
          [transform-style:preserve-3d]
          ${
            isMobile
              ? flipped
                ? "[transform:rotateY(180deg)]"
                : ""
              : "group-hover:[transform:rotateY(180deg)]"
          }
        `}
      >
        {/* Front */}
        <div className="absolute inset-0 rounded-2xl overflow-hidden border border-border/50 [backface-visibility:hidden]">
          <img
            src={item.img}
            alt="ac1"
            className="w-full h-full object-cover object-left"
          />

          {isMobile && (
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-black/60 px-3 py-1 text-xs text-white">
              Tap to view details
            </div>
          )}
          {!isMobile && (
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-black/60 px-3 py-1 text-xs text-white">
              Hover to view details
            </div>
          )}
        </div>

        {/* Back */}
        <div className="overflow-y-scroll hide-scrollbar absolute inset-0 rounded-2xl border border-border/50 bg-card p-6 [transform:rotateY(180deg)] [backface-visibility:hidden] flex items-center justify-center">
          <div className="flex flex-col">
            <span className="text-sm text-muted-foreground">
              {item.type}
            </span>

            <h3 className="mt-1 text-lg font-bold">
              {item.name}
            </h3>

            <div className="mt-4 space-y-2 text-sm">
              <p>
                🏅 <span className="font-semibold">Achievement:</span> {item.rank}
              </p>

              <p>
                👥 <span className="font-semibold">Team:</span> {item.team}
              </p>

              <p>
                🧩 <span className="font-semibold">Solved:</span> {item.solved}
              </p>

              <p>
                🌍 <span className="font-semibold">Participants:</span> {item.totTeams}
                Teams
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
