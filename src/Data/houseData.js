import pg1 from "../assets/pg-1.jpeg"
import pg2 from "../assets/pg-2.jpeg"
import pg3 from "../assets/pg-3.jpg"
import pg4 from "../assets/pg-4.jpg"
// import pg5 from "../assets/pg-5.jpg"
import pg6 from "../assets/pg-6.jpg"
import pg7 from "../assets/pg-7.jpeg"
import pg8 from "../assets/pg-8.jpg"
import hotel1 from "../assets/img-1.jpg"



const houses = [
    {
        id: 1,
        name: " J2",
        price: 8500,
        seater: 2,
        img:pg1,
        description: ["Ac ,","wifi ,","tv ,","kitchen ,","parking ,","security ,","food"],
        location: "J2, Lawgate,near apna chai walae",
        type:"PG",
    },
    {
        id: 2,
        name: " JS",
        price: 8500,
        seater: 2,
        img:pg2,
        description: ["Ac ,","wifi ,","tv ,","kitchen ,","parking ,","security ,","food"],
        location: "JS, Lawgate,near apna chai walae",
        type:"PG",
    },
    {
        id: 3,
        name: " J2",
        price: 7500,
        seater: 2,
        img:pg3,
        description: ["Ac ,","wifi ,","tv ,","kitchen ,","parking ,","security ,","food"],
        location: "J2, Lawgate,near apna chai walae",
        type:"PG",
    },
    {
        id: 4,
        name: " ASAP",
        price:7000,
        seater: 2,
        img:pg4,
        description: ["Ac ,","wifi ,","tv ,","kitchen"],
        location: "Asap, Lawgate auto stand,near Muglai Point",
        type:"PG",
    },
    {
        id: 5,
        name: " ASAP",
        price:5500,
        seater: 1,
        img:hotel1,
        description: ["Ac ,","wifi ,","tv ,","kitchen"],
        location: "Asap, Lawgate auto stand,near Muglai Point",
        type:"Hotels",

    },
    {
        id:6,
        name:"ASHIYANA",
        price: 7000,
        seater: 2,
        img:pg6,
        description: ["Ac ,","wifi ,","tv ,","kitchen ,","parking ,","security ,","food"],
        location: "Ashiyana, Lawgate,above oven express",
        type:"PG",
    },
    {
        id: 7,
        name: " KIRAN",
        price: 8000,
        seater: 2,
        img:pg7,
        description: ["Ac ,","wifi ,","tv ,","kitchen ,","parking"],
        location: "Kiran, Lawgate,near apna chai walae",
        type:"PG",
    },
    {
        id: 8,
        name: " KIRAN",
        price: 7500,
        seater: 1,
        img:pg8,
        description: ["Ac ,","wifi ,","tv ,","kitchen ,","parking"],
        location: "Kiran, Lawgate,near apna chai walae",
        type:"PG",
    }


];

export default houses;