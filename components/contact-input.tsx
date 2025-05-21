import { Mail } from 'lucide-react';
import { Button } from './common/button';

export const ContactInput = () => {
    return (
        <div className="p-3.5 bg-white border space-x-3 border-[#E4E7EC] w-full h-[86px] rounded-[50px] flex items-center justify-between">
            <div className="w-20 h-14 bg-orange-200 text-orange-500 rounded-5.5xl flex items-center justify-center">
                <Mail />
            </div>
            <div className="w-full h-full">
                <input 
                    placeholder="Enter Email Address"
                    className="h-full w-full focus:ring-0 focus:border-none focus:outline-none text-xl placeholder:text-gray-800" 
                />
            </div>
            <Button className="min-w-[126px] h-full">
                Send
            </Button>
        </div>
    )
}