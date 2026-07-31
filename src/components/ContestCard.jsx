export const ContestCard = ({item , idx}) => {
  return (
    <div
      key={idx}
      className="card glass w-full lg:w-[40%] shrink-0 rounded-2xl p-4 space-y-8"
    >
      <div className="relative overflow-hidden h-52">
        {item.banner != "" ? (
          <img
            src={item.banner}
            alt={item.contest_name}
            className="h-full w-full object-cover rounded-2xl"
          />
        ) : (
          <div className="glass h-full rounded-2xl"></div>
        )}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <h3 className="text-white text-xl md:text-3xl font-bold text-center px-4">
            {item.contest_name}
          </h3>
        </div>
        {item.banner != "" ? (
          <div className="absolute rounded-2xl inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
        ) : null}
      </div>
      <div className="h-px bg-gradient-to-r from-muted-foreground/80 via-muted-foreground/50 to-transparent" />
      <div className="tracking-widest  text-base lg:text-lg space-y-4">
        <div className="flex justify-between">
          <span>Rank </span>
          <span className="text-green-400 font-bold">{item.rank}</span>
        </div>
        <div className="flex justify-between">
          <span>Team </span>
          <span className="text-orange-400 font-bold">{item.team}</span>
        </div>
        <div className="flex justify-between">
          <span>Solved </span>
          <span className="text-purple-400 font-bold">
            {item.solved}{" "}
            <span className="text-red-400">(penalty : {item.penalty})</span>
          </span>
        </div>
      </div>
      <div className="grid lg:grid-cols-2 gap-4">
        <div className="text-base lg:text-lg glass px-4 py-2 text-center rounded-2xl border border-primary/60 tracking-widest">
          Certificate
        </div>
        <div
          onClick={() => window.open(item.standing_link, "_blank")}
          className="text-base lg:text-lg glass px-4 py-2 text-center rounded-2xl border border-primary/60 tracking-widest cursor-pointer hover:border-primary"
        >
          Standing
        </div>
      </div>
    </div>
  );
};
