import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export const Rating = ({ stars }: { stars: number }) => (
    <div className="flex flex-row w-40 items-end justify-end">
        {[...Array(stars)].map((_, index) => (
            <FontAwesomeIcon icon={faStar} className="text-[27px] h-8 text-orange-400" key={index} />
        ))}
    </div>
);
