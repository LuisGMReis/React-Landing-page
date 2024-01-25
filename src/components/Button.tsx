interface Props {
    title: String;
    size?:'sm'|'md' 
     
}

export const Button = ({title,size}:Props) => {
    return(
        <button className={`bg-primary text-white font-medium hover:bg-primary/80 duration-300 ${size ===
        'sm' && 'px-4 py-2 rounded-lg'} ${size === 'md' && 'px-12 py-4 rounded-2xl'}`}>{title}</button>
    )
}