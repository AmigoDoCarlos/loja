import Image from "next/image";
import './Slideshow.style.css';

interface slideProps {
    sequence: any[];
    className: string;
    invert?: boolean;
    period?: string;
}

export default function Slideshow({sequence, className, invert, period}: slideProps){

    return (
        <div className={className}>
            {sequence.map((picture, index) => (
                <Image
                    key={index}
                    src={picture}
                    alt={`imagem ${index + 1} da intro`}
                    className={`slidePicture ${invert? 'inverted' : 'straight'}`}            
                    style={{animationDuration: (period)? period : '4s'}}
                />
            ))}
        </div>
    )
}