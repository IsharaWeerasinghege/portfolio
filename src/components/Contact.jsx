import React, {useState} from 'react';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()

    }
    return (
        <div className="h-full w-full overflow-y-scroll">
            <div className="px-1 md:px-12 animate-slide-left">
                <h3 className="mt-5 text-neutral-500 bg-neutral-800 p-2 w-[90px] text-center bg-white bg-opacity-5 ">Contact</h3>
                <h3 className="mt-5 text-3xl font-bold text-white mb-5">Get in Touch</h3>
                <div className="mt-12 w-full">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126743.58585975565!2d79.7861644205213!3d6.92200394625182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae253d10f7a7003%3A0x320b2e4d32d3838d!2sColombo!5e0!3m2!1sen!2slk!4v1673400694366!5m2!1sen!2slk"
                        height="450" className="w-full" allowFullScreen="" loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    >
                    </iframe>
                </div>

                <form onSubmit={handleSubmit} className="mt-10">
                    <div className="w-full my-7">
                        <input
                            type="text"
                            name="name"
                            value={name}
                            onChange={(e) => e.target.value}
                            placeholder="Name"
                            className="w-full p-2 bg-neutral-800 border-neutral-300 border"
                        />
                    </div>

                    <div className="w-full my-7">
                        <input
                            type="email"
                            name="email"
                            value={email}
                            onChange={(e) => e.target.value}
                            placeholder="Email"
                            className="w-full p-2 bg-neutral-800 border-neutral-300 border"
                        />
                    </div>

                    <div className="w-full my-7">
                        <textarea
                            name="message"
                            value={message}
                            onChange={(e) => e.target.value}
                            placeholder="Message"
                            className="w-full h-36 p-2 bg-neutral-800 border-neutral-300 border"
                        >
                        </textarea>
                    </div>
                    <div className="w-full my-7">
                        <button className="p-3 bg-neutral-100 w-44">Send Message</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact