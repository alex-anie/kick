
import { NextResponse } from "next/server";

const comments = [
    {
        id: 1,
        productsName: "Electric Kettle",
        comments: "Works perfectly! Thanks for the update",
        username: "Chisom",
        date: "19-09-2024"
    },
    {
        id: 2,
        productsName: "Blender",
        comments: "This is exactly what I was expecting ✨",
        username: "Adaobi",
        date: "19-09-2024"
    },
    {
        id: 3,
        productsName: "Macbook Pro",
        comments: "Am happy! My macbook works perfectly fine and its affordable. 😂",
        username: "Brad",
        date: "19-09-2024"
    },
    {
        id: 4,
        productsName: "Smart TV",
        comments: "Great picture quality and sound.",
        username: "Uche",
        date: "19-09-2024"
    },
    {
        id: 5,
        productsName: "Air Conditioner",
        comments: "Cools my room in no time.",
        username: "Michael",
        date: "18-09-2024"
    },
    {
        id: 6,
        productsName: "Washing Machine",
        comments: "Efficient and silent. Totally worth it.",
        username: "Ifunanya",
        date: "18-09-2024"
    },
    {
        id: 7,
        productsName: "Refrigerator",
        comments: "Spacious and energy-saving.",
        username: "Tomiwa",
        date: "17-09-2024"
    },
    {
        id: 8,
        productsName: "Microwave Oven",
        comments: "Very easy to use. Heats up fast.",
        username: "Ijeoma",
        date: "16-09-2024"
    },
    {
        id: 9,
        productsName: "Smart Watch",
        comments: "Tracks my fitness goals perfectly.",
        username: "Emeka",
        date: "15-09-2024"
    },
    {
        id: 10,
        productsName: "Gaming Laptop",
        comments: "Handles my games smoothly.",
        username: "David",
        date: "15-09-2024"
    },
    {
        id: 11,
        productsName: "Headphones",
        comments: "Crystal clear sound!",
        username: "Samson",
        date: "14-09-2024"
    },
    {
        id: 12,
        productsName: "Tablet",
        comments: "The perfect size for reading and drawing.",
        username: "Maryam",
        date: "13-09-2024"
    },
    {
        id: 13,
        productsName: "Coffee Maker",
        comments: "My mornings are better with this.",
        username: "Nonso",
        date: "12-09-2024"
    },
    {
        id: 14,
        productsName: "Camera",
        comments: "Takes stunning photos in low light.",
        username: "Chinyere",
        date: "11-09-2024"
    },
    {
        id: 15,
        productsName: "Smartphone",
        comments: "Super fast, great battery life.",
        username: "Mohammed",
        date: "10-09-2024"
    },
    {
        id: 16,
        productsName: "Bluetooth Speaker",
        comments: "Loud and clear.",
        username: "Halima",
        date: "09-09-2024"
    },
    {
        id: 17,
        productsName: "Desk Lamp",
        comments: "Perfect for my study table.",
        username: "Joseph",
        date: "08-09-2024"
    },
    {
        id: 18,
        productsName: "External Hard Drive",
        comments: "Reliable and fast.",
        username: "Faith",
        date: "07-09-2024"
    },
    {
        id: 19,
        productsName: "Vacuum Cleaner",
        comments: "Picks up dirt easily.",
        username: "Ezekiel",
        date: "06-09-2024"
    },
    {
        id: 20,
        productsName: "Electric Scooter",
        comments: "Great for quick trips around the neighborhood.",
        username: "Nneka",
        date: "05-09-2024"
    },
    {
        id: 21,
        productsName: "Portable Charger",
        comments: "Charges my devices on the go.",
        username: "Amara",
        date: "04-09-2024"
    },
    {
        id: 22,
        productsName: "Printer",
        comments: "Prints documents clearly.",
        username: "Victor",
        date: "03-09-2024"
    },
    {
        id: 23,
        productsName: "Electric Shaver",
        comments: "Smooth shave, no irritation.",
        username: "Gabriel",
        date: "02-09-2024"
    },
    {
        id: 24,
        productsName: "Drone",
        comments: "Amazing aerial shots!",
        username: "Mercy",
        date: "01-09-2024"
    },
    {
        id: 25,
        productsName: "Home Security Camera",
        comments: "Helps me monitor my home remotely.",
        username: "Samuel",
        date: "31-08-2024"
    },
    {
        id: 26,
        productsName: "Smart Lock",
        comments: "Easy to install and use.",
        username: "Ayo",
        date: "30-08-2024"
    },
    {
        id: 27,
        productsName: "Dishwasher",
        comments: "Cleans dishes thoroughly.",
        username: "Bukola",
        date: "29-08-2024"
    },
    {
        id: 28,
        productsName: "Electric Toothbrush",
        comments: "Keeps my teeth clean.",
        username: "Femi",
        date: "28-08-2024"
    },
    {
        id: 29,
        productsName: "Air Fryer",
        comments: "Perfect for cooking healthy meals.",
        username: "Ini",
        date: "27-08-2024"
    },
    {
        id: 30,
        productsName: "Gaming Console",
        comments: "Fantastic gaming experience.",
        username: "Chris",
        date: "26-08-2024"
    },
    {
        id: 31,
        productsName: "Electric Fan",
        comments: "Quiet and powerful.",
        username: "Ngozi",
        date: "25-08-2024"
    },
    {
        id: 32,
        productsName: "Fitness Tracker",
        comments: "Helps me stay on top of my workouts.",
        username: "Chika",
        date: "24-08-2024"
    },
    {
        id: 33,
        productsName: "Rice Cooker",
        comments: "Makes perfect rice every time.",
        username: "Joy",
        date: "23-08-2024"
    },
    {
        id: 34,
        productsName: "Smart Bulb",
        comments: "I can control it from my phone.",
        username: "Umar",
        date: "22-08-2024"
    },
    {
        id: 35,
        productsName: "Laptop Stand",
        comments: "Keeps my desk organized.",
        username: "Gloria",
        date: "21-08-2024"
    },
    {
        id: 36,
        productsName: "Electric Grill",
        comments: "Grills my food to perfection.",
        username: "Daniel",
        date: "20-08-2024"
    },
    {
        id: 37,
        productsName: "Streaming Device",
        comments: "Great for watching my favorite shows.",
        username: "Lilian",
        date: "19-08-2024"
    },
    {
        id: 38,
        productsName: "Hair Dryer",
        comments: "Dries my hair fast and without damage.",
        username: "Helen",
        date: "18-08-2024"
    },
    {
        id: 39,
        productsName: "Treadmill",
        comments: "I get my daily workout done with ease.",
        username: "Kola",
        date: "17-08-2024"
    },
    {
        id: 40,
        productsName: "Electric Blanket",
        comments: "Keeps me warm during the night.",
        username: "Chizoba",
        date: "16-08-2024"
    },
    {
        id: 41,
        productsName: "Dehumidifier",
        comments: "Perfect for reducing humidity at home.",
        username: "Patrick",
        date: "15-08-2024"
    },
    {
        id: 42,
        productsName: "Smart Thermostat",
        comments: "I can control my home temperature from my phone.",
        username: "Betty",
        date: "14-08-2024"
    },
    {
        id: 43,
        productsName: "Portable Air Purifier",
        comments: "Keeps the air fresh in my room.",
        username: "Felix",
        date: "13-08-2024"
    },
    {
        id: 44,
        productsName: "Home Theater System",
        comments: "Amazing sound quality.",
        username: "Ebuka",
        date: "12-08-2024"
    },
    {
        id: 45,
        productsName: "Slow Cooker",
        comments: "Makes cooking meals easier.",
        username: "Esther",
        date: "11-08-2024"
    },
    {
        id: 46,
        productsName: "Electric Guitar",
        comments: "Sound quality is excellent.",
        username: "Fred",
        date: "10-08-2024"
    },
    {
        id: 47,
        productsName: "Electric Mixer",
        comments: "Makes baking fun and easy.",
        username: "Grace",
        date: "09-08-2024"
    },
    {
        id: 48,
        productsName: "Portable Projector",
        comments: "Transforms my room into a mini theater.",
        username: "Tobi",
        date: "08-08-2024"
    },
    {
        id: 49,
        productsName: "Smart Doorbell",
        comments: "Can see who’s at the door through my phone.",
        username: "Olu",
        date: "07-08-2024"
    },
    {
        id: 50,
        productsName: "Smart Scale",
        comments: "Tracks my weight and BMI.",
        username: "Sarah",
        date: "06-08-2024"
    },
    {
        id: 51,
        productsName: "Robot Vacuum",
        comments: "Cleans my floor with no effort.",
        username: "Andrew",
        date: "05-08-2024"
    },
    {
        id: 52,
        productsName: "Electric Fireplace",
        comments: "Adds a cozy vibe to my living room.",
        username: "Sophia",
        date: "04-08-2024"
    },
    {
        id: 53,
        productsName: "Electric Skateboard",
        comments: "Fun way to commute.",
        username: "Ismail",
        date: "03-08-2024"
    },
    {
        id: 54,
        productsName: "Standing Desk",
        comments: "Helps me stay productive while standing.",
        username: "Farida",
        date: "02-08-2024"
    },
    {
        id: 55,
        productsName: "Smart Glasses",
        comments: "I can take pictures and videos on the go.",
        username: "Bayo",
        date: "01-08-2024"
    },
    {
        id: 56,
        productsName: "Solar Power Bank",
        comments: "Charges my devices using solar energy.",
        username: "Tunde",
        date: "31-07-2024"
    },
    {
        id: 57,
        productsName: "Digital Alarm Clock",
        comments: "Wakes me up right on time.",
        username: "Ada",
        date: "30-07-2024"
    },
    {
        id: 58,
        productsName: "Smart Mirror",
        comments: "Shows me the weather and my schedule.",
        username: "Nike",
        date: "29-07-2024"
    },
    {
        id: 59,
        productsName: "Neck Massager",
        comments: "Relieves tension after a long day.",
        username: "Mark",
        date: "28-07-2024"
    },
    {
        id: 60,
        productsName: "Video Doorbell",
        comments: "Easy to install and gives me peace of mind.",
        username: "Paul",
        date: "27-07-2024"
    },
    {
        id: 61,
        productsName: "Portable Air Conditioner",
        comments: "Cools my room quickly.",
        username: "Yemi",
        date: "26-07-2024"
    },
    {
        id: 62,
        productsName: "Foot Massager",
        comments: "Helps relieve my tired feet.",
        username: "Ruth",
        date: "25-07-2024"
    },
    {
        id: 63,
        productsName: "Cordless Vacuum",
        comments: "Lightweight and easy to use.",
        username: "Vincent",
        date: "24-07-2024"
    },
    {
        id: 64,
        productsName: "Smart Water Bottle",
        comments: "Reminds me to stay hydrated.",
        username: "Lola",
        date: "23-07-2024"
    },
    {
        id: 65,
        productsName: "Smart Weighing Scale",
        comments: "Tracks my body composition.",
        username: "Sola",
        date: "22-07-2024"
    },
    {
        id: 66,
        productsName: "Portable Power Station",
        comments: "Useful for camping trips.",
        username: "Jide",
        date: "21-07-2024"
    },
    {
        id: 67,
        productsName: "Smart Plug",
        comments: "I can control my appliances from my phone.",
        username: "Seun",
        date: "20-07-2024"
    },
    {
        id: 68,
        productsName: "Smart Refrigerator",
        comments: "Keeps track of my groceries.",
        username: "Remi",
        date: "19-07-2024"
    },
    {
        id: 69,
        productsName: "Sound Bar",
        comments: "Amazing sound quality for my TV.",
        username: "Gbenga",
        date: "18-07-2024"
    },
    {
        id: 70,
        productsName: "3D Printer",
        comments: "Great for my design projects.",
        username: "Kemi",
        date: "17-07-2024"
    },
    {
        id: 71,
        productsName: "Electric Mower",
        comments: "Mows my lawn effortlessly.",
        username: "Hassan",
        date: "16-07-2024"
    },
    {
        id: 72,
        productsName: "Portable Blender",
        comments: "Perfect for smoothies on the go.",
        username: "Zainab",
        date: "15-07-2024"
    },
    {
        id: 73,
        productsName: "Ice Cream Maker",
        comments: "Makes delicious homemade ice cream.",
        username: "Angela",
        date: "14-07-2024"
    },
    {
        id: 74,
        productsName: "Smart Camera",
        comments: "Keeps an eye on my home while I’m away.",
        username: "Aisha",
        date: "13-07-2024"
    },
    {
        id: 75,
        productsName: "Bluetooth Tracker",
        comments: "Helps me find my lost items.",
        username: "Henry",
        date: "12-07-2024"
    },
    {
        id: 76,
        productsName: "Smart Window Blinds",
        comments: "Can control them remotely.",
        username: "Fola",
        date: "11-07-2024"
    },
    {
        id: 77,
        productsName: "Wi-Fi Extender",
        comments: "Boosts my internet signal.",
        username: "Seyi",
        date: "10-07-2024"
    },
    {
        id: 78,
        productsName: "Smart Fan",
        comments: "Automatically adjusts to the temperature.",
        username: "Adebayo",
        date: "09-07-2024"
    },
    {
        id: 79,
        productsName: "Wireless Charger",
        comments: "Charges my phone fast without cables.",
        username: "Chisom",
        date: "08-07-2024"
    },
    {
        id: 80,
        productsName: "Smart Mug",
        comments: "Keeps my coffee warm.",
        username: "Bose",
        date: "07-07-2024"
    },
    {
        id: 81,
        productsName: "Smart Light Switch",
        comments: "I can control my lights remotely.",
        username: "Tope",
        date: "06-07-2024"
    },
    {
        id: 82,
        productsName: "Wireless Earbuds",
        comments: "Great sound quality and battery life.",
        username: "Ugo",
        date: "05-07-2024"
    },
    {
        id: 83,
        productsName: "Smart Sprinkler",
        comments: "Keeps my garden watered on schedule.",
        username: "Gbemi",
        date: "04-07-2024"
    },
    {
        id: 84,
        productsName: "Portable Heater",
        comments: "Keeps my room warm during winter.",
        username: "Lanre",
        date: "03-07-2024"
    },
    {
        id: 85,
        productsName: "Electric Toothbrush",
        comments: "Keeps my teeth clean and fresh.",
        username: "Amara",
        date: "02-07-2024"
    },
    {
        id: 86,
        productsName: "Noise Cancelling Headphones",
        comments: "Blocks out all background noise.",
        username: "Gina",
        date: "01-07-2024"
    },
    {
        id: 87,
        productsName: "UV Sanitizer",
        comments: "Sanitizes my phone and small gadgets.",
        username: "Kelvin",
        date: "30-06-2024"
    },
    {
        id: 88,
        productsName: "Portable Coffee Maker",
        comments: "Makes coffee on the go.",
        username: "Ife",
        date: "29-06-2024"
    },
    {
        id: 89,
        productsName: "Smart Vacuum Cleaner",
        comments: "Effortlessly keeps my home clean.",
        username: "Bayo",
        date: "28-06-2024"
    },
    {
        id: 90,
        productsName: "Smart Lock",
        comments: "Keeps my home secure.",
        username: "Ronke",
        date: "27-06-2024"
    },
    {
        id: 91,
        productsName: "Electric Grill",
        comments: "Makes grilling indoors easy.",
        username: "Dare",
        date: "26-06-2024"
    },
    {
        id: 92,
        productsName: "Home Security Camera",
        comments: "Keeps my home secure.",
        username: "Faith",
        date: "25-06-2024"
    },
    {
        id: 93,
        productsName: "Smart Humidifier",
        comments: "Helps keep the air in my home clean.",
        username: "Kola",
        date: "24-06-2024"
    },
    {
        id: 94,
        productsName: "LED Strip Lights",
        comments: "Makes my room look cool at night.",
        username: "Precious",
        date: "23-06-2024"
    },
    {
        id: 95,
        productsName: "Smartwatch",
        comments: "Helps me stay on top of my health goals.",
        username: "Ademola",
        date: "22-06-2024"
    },
    {
        id: 96,
        productsName: "Air Purifier",
        comments: "Keeps the air in my home fresh.",
        username: "Chika",
        date: "21-06-2024"
    },
    {
        id: 97,
        productsName: "Electric Kettle",
        comments: "Boils water quickly.",
        username: "Francis",
        date: "20-06-2024"
    },
    {
        id: 98,
        productsName: "Portable Charger",
        comments: "Charges my phone multiple times.",
        username: "Ikenna",
        date: "19-06-2024"
    },
    {
        id: 99,
        productsName: "Smart TV",
        comments: "Great picture quality.",
        username: "Anita",
        date: "18-06-2024"
    },
    {
        id: 100,
        productsName: "Bluetooth Speaker",
        comments: "Sound quality is amazing.",
        username: "Emeka",
        date: "17-06-2024"
    }
];


// export async function GET(request){
//     return NextResponse.json(comments)
// }

// console.log("YESSSS")
export async function GET(request){
    console.log('request: ', request);
    try {
        const { searchParams } = new URL(request.url);
        const page = parseInt(searchParams.get('page')) || 1;
        const limit = parseInt(searchParams.get('limit')) || 10;
    
        const startIndex = (page - 1) * limit;
        const endIndex = page * limit;
    
        // Ensure `comments` array exists and slice it for pagination
        const paginatedComments = comments.slice(startIndex, endIndex);
        const totalComments = comments.length;
        const totalPages = Math.ceil(totalComments / limit);

    
        const response = {
          data: paginatedComments,
          meta: {
            currentPage: page,
            totalPages: totalPages,
            totalComments: totalComments,
          },
        };
    
        // Return the response as JSON
        return NextResponse.json(response);
      } catch (error) {
        // Log the error in the terminal and return a 500 response
        console.error('Error in API route:', error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
      }
}


