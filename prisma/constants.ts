export const categories =[
    {name: "Пиццы"},
    {name: "Завтрак"},
    {name: "Закуски"},
    {name: "Коктейли"},
    {name: "Напитки"},
]

export const ingredients = [
    {
        name: 'Сырный бортик',
        price: 179,
        imageUrl:
            'https://cdn.dodostatic.net/static/Img/Ingredients/99f5cb91225b4875bd06a26d2e842106.png',
    },
    {
        name: 'Сливочная моцарелла',
        price: 79,
        imageUrl:
            'https://cdn.dodostatic.net/static/Img/Ingredients/cdea869ef287426386ed634e6099a5ba.png',
    },
    {
        name: 'Сыры чеддер и пармезан',
        price: 79,
        imageUrl:
            'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA69C1FE796',
    },
    {
        name: 'Острый перец халапеньо',
        price: 59,
        imageUrl:
            'https://cdn.dodostatic.net/static/Img/Ingredients/11ee95b6bfdf98fb88a113db92d7b3df.png',
    },
    {
        name: 'Нежный цыпленок',
        price: 79,
        imageUrl:
            'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA5B328D35A',
    },
    {
        name: 'Шампиньоны',
        price: 59,
        imageUrl:
            'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA67259A324',
    },
    {
        name: 'Бекон',
        price: 79,
        imageUrl:
            'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA637AAB68F',
    },
    {
        name: 'Ветчина',
        price: 79,
        imageUrl:
            'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA61B9A8D61',
    },
    {
        name: 'Пикантная пепперони',
        price: 79,
        imageUrl:
            'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA6258199C3',
    },
    {
        name: 'Острая чоризо',
        price: 79,
        imageUrl:
            'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA62D5D6027',
    },
    {
        name: 'Маринованные огурчики',
        price: 59,
        imageUrl:
            'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A21DA51A81211E9EA89958D782B',
    },
    {
        name: 'Свежие томаты',
        price: 59,
        imageUrl:
            'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA7AC1A1D67',
    },
    {
        name: 'Красный лук',
        price: 59,
        imageUrl:
            'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA60AE6464C',
    },
    {
        name: 'Сочные ананасы',
        price: 59,
        imageUrl:
            'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A21DA51A81211E9AFA6795BA2A0',
    },
    {
        name: 'Итальянские травы',
        price: 39,
        imageUrl:
            'https://cdn.dodostatic.net/static/Img/Ingredients/370dac9ed21e4bffaf9bc2618d258734.png',
    },
    {
        name: 'Сладкий перец',
        price: 59,
        imageUrl:
            'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA63F774C1B',
    },
    {
        name: 'Кубики брынзы',
        price: 79,
        imageUrl:
            'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA6B0FFC349',
    },
    {
        name: 'Митболы',
        price: 79,
        imageUrl:
            'https://cdn.dodostatic.net/static/Img/Ingredients/b2f3a5d5afe44516a93cfc0d2ee60088.png',
    },
].map((obj,index) => ({id: index + 1, ...obj}))

export const products = [
    // Завтрак (categoryId = 2 )
    { name: "Омлет с ветчиной и грибами в пите", imageUrl: "https://media.dodostatic.net/image/r:292x292/…/omlet-v-pite.avif", categoryId: 2 },
    { name: "Омлет с беконом в пите", imageUrl: "https://media.dodostatic.net/image/r:292x292/…/omlet-bacon.avif", categoryId: 2 },
    { name: "Омлет сырный в пите", imageUrl: "https://media.dodostatic.net/image/r:292x292/…/omlet-cheese.avif", categoryId: 2 },
    { name: "Омлет с томатами в пите", imageUrl: "https://media.dodostatic.net/image/r:292x292/…/omlet-tomato.avif", categoryId: 2 },
    { name: "Омлет с ветчиной и грибами", imageUrl: "https://media.dodostatic.net/image/r:292x292/…/omlet-flat.avif", categoryId: 2 },
    { name: "Омлет с томатами", imageUrl: "https://media.dodostatic.net/image/r:292x292/…/omlet-tomato-flat.avif", categoryId: 2 },

    // Напитки (categoryId = 5)
    { name: "Апельсиновый бамбл", imageUrl: "https://media.dodostatic.net/image/r:292x292/…/orange-bumble.avif", categoryId: 5 },
    { name: "Классический молочный коктейль", imageUrl: "https://media.dodostatic.net/image/r:292x292/…/klassicheskiy-cocktail.avif", categoryId: 5 },
    { name: "Кофе Американо", imageUrl: "https://media.dodostatic.net/image/r:292x292/…/americano.avif", categoryId: 5 },
    { name: "Кофе Капучино", imageUrl: "https://media.dodostatic.net/image/r:292x292/…/cappuccino.avif", categoryId: 5 },
    { name: "Кофе Латте", imageUrl: "https://media.dodostatic.net/image/r:292x292/…/latte.avif", categoryId: 5 },
    { name: "Молочный коктейль с Oreo", imageUrl: "https://media.dodostatic.net/image/r:292x292/…/oreo-cocktail.avif", categoryId: 5 },
    { name: "Молочный коктейль клубничный", imageUrl: "https://media.dodostatic.net/image/r:292x292/…/strawberry-cocktail.avif", categoryId: 5 },

    // Закуски / десерты / коктейли (под «без пицц»)
    { name: "Грибной Стартер", imageUrl: "https://media.dodostatic.net/image/r:292x292/…/mushroom-starter.avif", categoryId: 3 },
    { name: "Картофель из печи", imageUrl: "https://media.dodostatic.net/image/r:292x292/…/oven-potatoes.avif", categoryId: 3 },
    { name: "Круассан", imageUrl: "https://media.dodostatic.net/image/r:292x292/…/croissant.avif", categoryId: 3 },
    { name: "Тарт лимонный", imageUrl: "https://media.dodostatic.net/image/r:292x292/…/lemon-tart.avif", categoryId: 3 },
];