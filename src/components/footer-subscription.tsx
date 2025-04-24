import { SendHorizontal } from 'lucide-react';

export const FooterSubscription = () => {
    return (
        <div className="max-w-[19rem] w-full space-y-7">
            <div className="text-xl font-semibold text-orange-400">Get the latest information</div>
            <div className="flex flex-row h-[3.19rem] w-full">
                <input
                    className="h-full w-full bg-white rounded-l-xl px-4 focus:ring-0 focus:outline-0 focus:border-0"
                    placeholder="Email Address"
                />
                <button
                    type="button"
                    aria-label="send-email-footer"
                    className="h-full w-12 bg-orange-400 rounded-r-xl items-center justify-center flex"
                >
                    <SendHorizontal className="text-white" />
                </button>
            </div>
        </div>
    );
};
