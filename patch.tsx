import { ContactInput } from '../contact-input';

export const FooterSubscription = () => {
    return (
        <div className="max-w-[19rem] lg:max-w-md w-full space-y-4 lg:space-y-7">
            <div className="text-xl font-semibold text-orange-400">Get the latest information</div>
            <ContactInput />
        </div>
    );
};
