export default function Tooltip(params) {
    const { title, body, width } = params
    return (
        <div style={{ width: width ? width : 'auto' }} className="mx-auto container max-w-[228px] top-0 left-1 translate-y-n-full px-3 py-2 -mt-1 bg-main rounded absolute text-white border border-main-light">
            <p className="text-sm font-semibold leading-none text-gray-800">{title}</p>
            <p className=" text-xs leading-none text-gray-600 pt-2 pb-2">{body}</p>
            {/* <svg className="absolute z-10 text-main-light bottom-[-10px]" width={16} height={10} viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 10L0 0L16 1.41326e-06L8 10Z" className="fill-current" />
            </svg> */}
        </div>
    )
}