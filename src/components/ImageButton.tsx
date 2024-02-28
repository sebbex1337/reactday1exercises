interface ImageButtonProps {
    image: string;
    onClick: () => void;
}

export default function ImageButton({ image, onClick }: ImageButtonProps) {
    return (
        <button onClick={onClick} className="imageButton">
            <img src={image} alt="Button" width="100" height="100" />
        </button>
    );
}
