import React from 'react';
import { SendHorizontal } from 'lucide-react';

export const FooterSubscription = () => {
    const [message, setMessage] = React.useState<string>('');

    const onInputMessage = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setMessage(value);
    }

    const onSendMessage = () => {
        if (!message.trim()) {
            return;
        }

        const phoneNumber = '6285156589457'; // Nomor tujuan yang sama dengan ContactInput
        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
        
        window.open(whatsappUrl, '_blank');
        setMessage('');
    }

    return (
        <div className="max-w-[19rem] w-full space-y-4 lg:space-y-7">
            <div className="text-xl font-semibold text-orange-400">Get the latest information</div>
            <div className="flex flex-row h-[3.19rem] w-full">
                <input
                    type="text"
                    className="h-full w-full bg-white rounded-l-xl px-4 focus:ring-0 focus:outline-0 focus:border-0"
                    placeholder="Enter Message"
                    value={message}
                    onChange={onInputMessage}
                    onKeyDown={(e) => e.key === 'Enter' && onSendMessage()}
                />
                <button
                    type="button"
                    aria-label="send-message-footer"
                    className="h-full w-12 bg-orange-400 rounded-r-xl items-center justify-center flex hover:bg-orange-500 transition-colors cursor-pointer"
                    onClick={onSendMessage}
                >
                    <SendHorizontal className="text-white" />
                </button>
            </div>
        </div>
    );
};
