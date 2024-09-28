
import { NextResponse } from "next/server";

const comments = [
    {
        id: 1,
        productsName: "Electric Kettle",
        comments: "Works perfectly! Thanks for the update",
        username: "Chisom",
        data: "19-09-2024"
    },
    {
        id: 2,
        productsName: "Blender",
        comments: "This is exactly what I was expecting ✨",
        username: "Adaobi",
        data: "19-09-2024"
    },
    // ... some code here 
    {
        id: 99,
        productsName: "Smart TV",
        comments: "Great picture quality.",
        username: "Anita",
        data: "18-06-2024"
    },
    {
        id: 100,
        productsName: "Bluetooth Speaker",
        comments: "Sound quality is amazing.",
        username: "Emeka",
        data: "17-06-2024"
    }
];

export async function GET(request){
    console.log('request: ',request);
    try {
        const { searchParams } = new URL(request.url);
        const page = parseInt(searchParams.get('page')) || 1;
        const limit = parseInt(searchParams.get('limit')) || 10;
    
        const startIndex = (page - 1) * limit;
        const endIndex = page * limit;

        console.log('page: ', page);
        console.log('limit: ', limit);
        console.log('fullURL: ', request.url);
        console.log('searchParams:', searchParams)
        console.log('startIndex: ', startIndex);
        console.log('endIndex: ', endIndex);
    
        // Ensure `comments` array exists and slice it for pagination
        const paginatedComments = comments.slice(startIndex, endIndex);
        const totalComments = comments.length;
        const totalPages = Math.ceil(totalComments / limit);

        console.log('paginatedComments', paginatedComments)
        console.log('totalComments', totalComments)
        console.log('totalPages', totalPages)
    
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


