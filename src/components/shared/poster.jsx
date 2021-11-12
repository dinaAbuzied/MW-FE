

export default function Poster ({poster, name, dark}) {
    return (
        <div className="aspect-h-9 aspect-w-6 w-full">{
            poster ? 
            (<img src={poster} alt={name} />) : 
            (<div className={`${dark ? 'text-main border-main' : 'text-main-light border-main-light'} border-2 border-dashed w-full h-full px-2 rounded leading-none flex items-center justify-center text-center`}>No Image Available</div>)
        }</div>
    )
}