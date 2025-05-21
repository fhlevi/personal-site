import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

export const Testimonial = ({ text }: { text: string }) => (
    <div className="flex flex-col space-y-7 items-start justify-start">
        <FontAwesomeIcon icon={faQuoteLeft} className="text-4xl" />
        <p className="w-[20.5rem]">{text}</p>
    </div>
);
