type ItemPrice = {
    price: number
}

interface ProductsGroup {
    id: number;
    name: string;
    price: number;
    imageUrl: string
    items: ItemPrice[]
}

export const pizzas: ProductsGroup[] = [
    {
        name: 'Сырный цыпленок',
        price: 30,
        imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D610E8BBB248F31270BE742B4BD.avif',
        id: 1,
        items: [{price: 30}]
    },
    {
        name: 'Бургер-пицца',
        price: 44,
        imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D61698827EE9B8DB6D0AEC53410.avif',
        id: 2,
        items: [{price: 30}]
    },
    {
        name: 'Сырный цыпленок',
        price: 20,
        imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D610E8BBB248F31270BE742B4BD.avif',
        id: 3,
        items: [{price: 30}]
    },
    {
        name: 'От шефа',
        price: 50,
        imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D6101F670D6AA756B1C989E0489.avif',
        id: 4,
        items: [{price: 30}]
    },
    {
        name: 'Пепперони',
        price: 33,
        imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D610A62D78598406363A9A8AD65.avif',
        id: 5,
        items: [{price: 30}]
    },
    {
        name: 'Четыре сезона',
        price: 40,
        imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D611ADF5AAD898B8B651186E023.avif',
        id: 6,
        items: [{price: 30}]
    },

]

export const breakFasts: ProductsGroup[] = [
    {
        name: 'Омлет с беконом',
        price: 30,
        imageUrl: 'https://media.dodostatic.net/image/r:233x233/11EE7970326512C89366583FF997CA9E.avif',
        id: 1,
        items: [{price: 10}]
    },
    {
        name: 'Омлет с ветчиной ',
        price: 44,
        imageUrl: 'https://media.dodostatic.net/image/r:233x233/11EE7970321044479C1D1085457A36EB.avif',
        id: 2,
        items: [{price: 12}]
    },
    {
        name: 'Омлет с пепперони',
        price: 20,
        imageUrl: 'https://media.dodostatic.net/image/r:233x233/11EE94ECF33B0C46BA410DEC1B1DD6F8.avif',
        id: 3,
        items: [{price: 10}]
    },
    {
        name: 'Омлет сырный',
        price: 50,
        imageUrl: 'https://media.dodostatic.net/image/r:233x233/11EE797033873EB1B4B77F7E70BBA37E.avif',
        id: 4,
        items: [{price: 30}]
    },


]
