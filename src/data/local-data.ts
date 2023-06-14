let contacts = [
    {
        id: 1,
        name: 'Dimas Saputra',
        tag: 'dimasmds',
        imageUrl: '/images/dimasmds.jpeg',
    },
    {
        id: 2,
        name: 'Arif Faizin',
        tag: 'arifaizin',
        imageUrl: '/images/arifaizin.jpeg',
    },
    {
        id: 5,
        name: 'Bambang',
        tag: 'susilo',
        imageUrl: '/images/arifaizin.jpeg',
    },
    {
        id: 3,
        name: 'Rahmat Fajri',
        tag: 'rfajri27',
        imageUrl: '/images/rfajri27.jpeg',
    },
];

interface IAddContactParameter {
    name: string;
    tag: string;
}

interface IEditContactParameter {
    id: number;
    name: string;
    tag: string;
}

export function getAllContacts() {
    return contacts;
}

export function getContact(id: number) {
    const foundedContact = contacts.find((contact) => contact.id === id);
    return foundedContact;
}

export function addContact({ name, tag }: IAddContactParameter) {
    contacts = [
        ...contacts,
        {
            id: new Date().getTime(),
            name: name,
            tag: tag,
            imageUrl: '/images/default.jpg',
        },
    ];
}

export function deleteContact(id: number) {
    contacts = contacts.filter((contact) => contact.id !== id);
}



export function editContact({ id, name, tag }: IEditContactParameter) {
    const contactToEdit = contacts.find((contact) => contact.id === id);
    contactToEdit?.name = name;
    contactToEdit?.tag = tag;

    contacts = contacts.map((contact) => {
        if (contact.id === id) {
            return contact;
        }
        return contact;
    });
}
