interface IIContactItemImageProps {
    imageUrl: string;
}

function ContactItemImage({ imageUrl }: IIContactItemImageProps) {
    return (
        <img
            className="w-16 rounded-full"
            src={imageUrl}
            alt="contact avatar"
        />
    );
}

export default ContactItemImage;
