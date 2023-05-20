interface IContactItemBody {
    name: string;
    tag: string;
}

function ContactItemBody({ name, tag }: IContactItemBody) {
    return (
        <div className="flex-1 ml-2 pl-2 border-l-[1px] border-solid border-[#aaa]">
            <h3 className="text-lg font-bold py-1 px-0">{name}</h3>
            <p className="text-base font-light">{`@${tag}`}</p>
        </div>
    );
}

export default ContactItemBody;
