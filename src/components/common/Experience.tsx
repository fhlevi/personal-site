export const Experience = ({ years }: { years: number }) => (
    <div className="flex flex-col space-y-1">
        <div className="text-[47px] font-bold">{years} Years</div>
        <div className="text-xl text-right">Experience</div>
    </div>
);
