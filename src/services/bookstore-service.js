export default class BookstoreService {
   
    data = [
        {
            id: 1,
            title: 'Python',
            author: 'Mark Lutz',
            price: '99',
            image: 'https://cdn1.ozone.ru/multimedia/1004655726.jpg'
        },
        {
            id: 2,
            title: 'Gogol',
            author: 'Mertvie dushy',
            price: '11',
            image: 'https://cdn1.ozone.ru/multimedia/1004655726.jpg'
        }
    ];

    getBooks() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(this.data)
            }, 700);
        });
    }

}