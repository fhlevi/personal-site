import { Mail } from 'lucide-react';
import { Button } from './common/button';
import React from 'react';

export const ContactInput = () => {
    const [message, setMessage] = React.useState<string>('');

    const onInputMessage = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setMessage(value);
    }

    const onSendMessage = () => {
        if (!message.trim()) {
            // Jangan kirim jika pesan kosong
            return;
        }

        // Nomor WhatsApp tujuan (gunakan format internasional tanpa + dan -)
        // Contoh: 628123456789 untuk nomor Indonesia
        const phoneNumber = '6285156589457'; // Ganti dengan nomor tujuan
        
        // Encode pesan untuk URL
        const encodedMessage = encodeURIComponent(message);
        
        // Buat URL WhatsApp
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
        
        // Buka WhatsApp di tab/window baru
        window.open(whatsappUrl, '_blank');
        
        // Optional: Reset pesan setelah dikirim
        setMessage('');
    }
    return (
        <div className="p-3.5 bg-white border space-x-3 border-[#E4E7EC] w-full h-[66px] md:h-[86px] rounded-[50px] flex items-center justify-between">
            <div className="w-16 h-10 md:w-20 md:h-14 bg-orange-200 text-orange-500 rounded-5.5xl flex items-center justify-center">
                <Mail />
            </div>
            <div className="w-full h-full">
                <input 
                    type="text"
                    placeholder="Enter Message"
                    className="h-full w-full focus:ring-0 focus:border-none focus:outline-none text-xl placeholder:text-gray-800"
                    onChange={onInputMessage}
                    required
                />
            </div>
            <Button className="w-[100px] md:w-[126px] h-full" onClick={onSendMessage}>
                Send
            </Button>
        </div>
    )
}