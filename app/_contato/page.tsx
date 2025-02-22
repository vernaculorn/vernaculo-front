import Form from "../ui/contact/Form";

export default function Action() {
    return (
        <div className='bg-[url("/images/homepage/1.jpg")] bg-no-repeat bg-center p-1 bg-cover min-h-screen w-full flex justify-center items-center relative'>
            <div className="absolute w-full min-h-screen h-full bg-gray-950/60"></div>
            <div className="w-96 flex">
                <div className="relative p-5 bg-slate-100/60 rounded-lg backdrop-blur-sm w-full">
                    <Form />
                </div>
            </div>
        </div>
    );
}
