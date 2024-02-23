function PillarCard({
  title,
  content,
  iconUrl,
}: {
  title: string;
  content: string;
  iconUrl: string;
}) {
  return (
    <div className="flex w-full flex-col z-30 justify-center md:mt-0 bg-gradient-to-bl from-slate-500/30 to-[#1A161D] rounded-3xl backdrop-blur-3xl h-full p-10 rounded-br-3xl">
      <div className="flex flex-col items-start gap-10 h-full justify-between">
        <img src={iconUrl} className="w-[40px]" />
        <div className="flex flex-col lg:flex-row items-center gap-10">
          <div className="flex flex-col text-left items-start justify-start">
            <div className=" text-white text-3xl mb-2 max-w-[450px] font-quicksand font-extrabold pr-20">
              {title}
            </div>
            <div className=" text-white/50 text-base max-w-[450px] font-quicksand fontm-edium pr-10">
              {content}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PillarCard;
