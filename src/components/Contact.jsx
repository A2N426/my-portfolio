import { AiOutlineMail } from 'react-icons/ai';
import { RiMessengerLine } from 'react-icons/ri';

const Contact = () => {
    return (
        <div id='contact' className="lg:px-24 px-6 pt-10 bg-[rgb(23,23,23)] pb-20 lg:pt-20">
            <h1 className="text-[#f3004b] text-4xl  font-semibold">Contact me</h1>
            <div className='lg:flex justify-between gap-10 pt-10 lg:max-w-4xl mx-auto'>
                <div className='lg:mb-0 mb-10'>
                    <div className='text-center lg:w-[330px] h-[150px] rounded-sm text-white bg-black py-6 font-semibold mb-5'>
                        <AiOutlineMail className='text-2xl mx-auto' />
                        <p>Email</p>
                        <p>mohammadapon11@gmail.com</p>
                        <a href='mailto:mohammadapon11@gmail.com' className='text-[#f3004b] '>Send A Message</a>
                    </div>
                    <div className='text-center lg:w-[330px] h-[150px] rounded-sm text-white bg-black py-5 font-semibold'>
                        <RiMessengerLine className='text-3xl mx-auto' />
                        <p>Messenger</p>
                        <p>Mohammad Apon</p>
                        <a href='https://web.facebook.com/mohammad.apon.426/' className='text-[#f3004b] '>Send A Message</a>
                    </div>
                </div>
                <form className='lg:w-2/3 flex flex-col gap-6'>
                    <input type="text" placeholder="Your Name" className="input bg-black border-2 border-[#f3004b] text-white w-full max-w-xl" />
                    <input type="email" placeholder="Your Email" className="input bg-black border-2 border-[#f3004b] text-white w-full max-w-xl" />
                    <textarea className="textarea border-2 border-[#f3004b] w-full max-w-xl bg-black text-white textarea-lg" placeholder="Your Message"></textarea>
                    <input className='bg-[#f3004b] text-white font-semibold w-2/3 lg:ml-24 ml-16 cursor-pointer rounded-full py-1' type="submit" value="SEND" />
                </form>
            </div>
        </div>
    );
};

export default Contact;