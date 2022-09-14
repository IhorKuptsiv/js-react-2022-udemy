// url i data - дані які будуть поститись в функц.
//1. postData налаштовує запит
//2.  фетчить, тобто відправляє запит на серв, получає відповідь
//3. перетворює відповідь в json

// весь код асинхронний, коли запускається функц.postData
// ми робимо запит який іде на серв(асинхронний)
// але з фетча з серв нам ще нічого не повернулось, буде помилка
//async - в середині функції буде асинхр оператор
//await - ставимо перед тим де потрібно дочекатись відповіді
// async await завжди в ПАРІ
const postData = async (url, data) => {
    // в середині поміщаємо проміс від фетча
    let res = await fetch(url, {
        method: "POST", // яким образом
        headers: { // і що саме відправляємо
            'Content-type': 'application/json'
        },
        body: data
    });
    return await res.json(); //проміс 

};

async function getResource(url) {
    let res = await fetch(url);

    if (!res.ok) {
        // обєкт помилки
        throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    }

    return await res.json();

}



export {
    postData
};
export {
    getResource
};