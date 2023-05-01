    const products = [
        {
            id: "1",
            nombre: "El Coloso Justicialista",
            category: "Novelas",
            stock: 25,
            autor: "Juan Ruocco",
            precio: 3400
            
        },
        {id: "2", nombre: "Nueva novela", category: "Novelas", stock: 25, autor: "Gonzalo Pardo", precio: 4500},
        {id: "3", nombre: "Nuevo cuento", category: "Cuentos", stock: 2, autor: "Nicolas Toranzo", precio: 3200 },
        {id: "4", nombre: "Otro cuento", category: "Cuentos", stock: 2, autor: "Otro Autor", precio: 3900},

    ]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() =>{
            resolve(products)
        },500)

    })
}

export const getProductsByCategory = (productCategory) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === productCategory))
            
        }, 500);

    })

}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}
