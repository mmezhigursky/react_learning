const movies = [

    {
        _id:"sdfe213e1fe23edahj9219023",
        title:"Wedding crashes",
        genre:{_id:"341232213432", name:"Comedy"},
        numberInStock:7,
        dailyRentalRate:2.5
    },
    {
        _id:"sdfe213e1fe23dsfaehj9219023",
        title:"Crashes",
        genre:{_id:"341232213435", name:"Thriller"},
        numberInStock:7,
        dailyRentalRate:3.5
    },

    {
        _id:"sdfe213e1fe23exhj9219023",
        title:"Pillows",
        genre:{_id:"341232213436", name:"Action"},
        numberInStock:7,
        dailyRentalRate:4.5
    },

    {
        _id:"sdfe213e1fe23ecahj9219023",
        title:"Raw",
        genre:{_id:"341232213434", name:"Dramma"},
        numberInStock:7,
        dailyRentalRate:3.0
    },

    {
        _id:"sdfe213e1fe23ehjfdf219023",
        title:"Wedding",
        genre:{_id:"341232213433", name:"Not Dramma"},
        numberInStock:7,
        dailyRentalRate:5.0
    },


]

export function getMovies () {

 return movies
} 