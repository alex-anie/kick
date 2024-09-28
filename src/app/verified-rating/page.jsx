'use client'

import ArrowLeft from "@/components/svg-icons/ArrowLeft";
import CheckMark from "@/components/svg-icons/CheckMark";
import StarIcon from "@/components/svg-icons/StartIcon";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function VerifiedRating(){
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [limit] = useState(10);
  const [pageGroupStart, setPageGroupStart] = useState(1);
  const pageGroupSize = 4;

    const router = useRouter();
    function handleBack(){
        router.back();
    }

    useEffect(()=>{
      async function getComments(){
        setLoading(true)
        try{
          const response = await fetch(`/api/users-comments?page=${page}&limit=${limit}`);
          if(!response.ok){
            throw new Error(`failed to fetch ${response.status}`)
          }

          const data = await response.json();
          setComments(data.data);
          setTotalPages(data.meta.totalPages)

        }catch(error){
          console.error(`Error encountered: ${error}`)
          setError(error)
        }finally{
          setLoading(false)
        }
      }
      getComments();
    }, [page])

    function handlePageClick(pageNumber){
      setPage(pageNumber);
    }

    // Handle the "Next" button click for pagination
    function handleNextGroup(){
      if(pageGroupStart + pageGroupStart <= totalPages){
        setPageGroupStart(pageGroupSize + pageGroupSize)
      }
    }

    // Handle the "Previous" button click for pagination
    function handlePreviousGroup(){
      if(pageGroupStart > 1){
        setPageGroupStart(pageGroupStart - pageGroupSize);
      }
    }

    return (
      <main className="w-[90%] mx-auto py-40 lg:py-20">
             <div className="mt-4 bg-white p-4 rounded-md" id="verifiedCustomer">
                 <section>
                   <div className="flex gap-3 py-1">
                       <button type="button" onClick={handleBack} className="hover:text-orange-500">
                          <ArrowLeft />
                       </button>
                     <h1 className="text-xl font-semi-bold">Verified customer Feedback</h1>
                   </div>
                   <hr />
                 </section>
                 <section className="grid grid-cols-6 gap-4 my-4">
                   {/* verified rating */}
                   <aside className="col-span-2">
                     <h1 className="text-[0.875em] mb-4 uppercase font-bold text-neutral-900">Verified Ratings (2091)</h1>
                     <div className="bg-neutral-200 rounded-md flex flex-col items-center justify-center py-4 mb-4 ">
                       <h1 className="text-2xl text-orange-500"><strong>3.8</strong>/5</h1>
                         <div className="flex">
                            <StarIcon width={18} height={18} fill="#f97316" strokeWidth={0}/>
                            <StarIcon width={18} height={18} fill="#f97316" strokeWidth={0}/>
                            <StarIcon width={18} height={18} fill="#f97316" strokeWidth={0}/>
                            <StarIcon width={18} height={18} fill="#f97316" strokeWidth={0}/>
                            <StarIcon width={18} height={18} fill="#171717" strokeWidth={0}/>
                         </div>
                       <p className="text-[0.875em] font-semibold">2091 verified rating</p>
                     </div>
                     <div className="">
                       <span className="flex items-center gap-2 text-[0.75em] text-neutral-700">
                         <p className="">5</p>
                         <StarIcon  width={15} height={15} fill=" #f97316" strokeWidth={0}/>
                         (916)

                         <span className="ml-3 inline-block h-2 w-full rounded-full bg-neutral-300 relative"> 
                           <span className="inline-block h-full w-[70%] rounded-full bg-orange-500 absolute top-0 left-0"></span>
                         </span>
                       </span>

                       <span className="flex items-center gap-2 text-[0.75em] text-neutral-700">
                         <p className="">4</p>
                         <StarIcon  width={15} height={15} fill=" #f97316" strokeWidth={0}/>
                         (474)

                         <span className="ml-3 inline-block h-2 w-full rounded-full bg-neutral-300 relative"> 
                           <span className="inline-block h-full w-[50%] rounded-full bg-orange-500 absolute top-0 left-0"></span>
                         </span>
                       </span>

                       <span className="flex items-center gap-2 text-[0.75em] text-neutral-700">
                         <p className="">3</p>
                         <StarIcon  width={15} height={15} fill=" #f97316" strokeWidth={0}/>
                         (346)
   
                         <span className="ml-3 inline-block h-2 w-full rounded-full bg-neutral-300 relative"> 
                           <span className="inline-block h-full w-[30%] rounded-full bg-orange-500 absolute top-0 left-0"></span>
                         </span>
                       </span>

                       <span className="flex items-center gap-2 text-[0.75em] text-neutral-700">
                         <p className="">2</p>
                         <StarIcon  width={15} height={15} fill="#f97316" strokeWidth={0}/>
                         (171)

                         <span className="ml-3 inline-block h-2 w-full rounded-full bg-neutral-300 relative"> 
                           <span className="inline-block h-full w-[20%] rounded-full bg-orange-500 absolute top-0 left-0"></span>
                         </span>
                       </span>
   
                       <span className="flex items-center gap-2 text-[0.75em] text-neutral-700">
                         <p className="">1</p>
                         <StarIcon  width={15} height={15} fill=" #f97316" strokeWidth={0}/>
                         (184)
   
                         <span className="ml-3 inline-block h-2 w-full rounded-full bg-neutral-300 relative"> 
                           <span className="inline-block h-full w-[10%] rounded-full bg-orange-500 absolute top-0 left-0"></span>
                         </span>
                       </span>
                     </div>
                   </aside>

                   {/* Comments from verified customer */}
                   <aside className="col-span-4">
                     <h2 className="text-[0.875em] mb-4 uppercase font-bold text-neutral-900">Comments from verified purchases (791)</h2> 

                      {loading && <p>Loading comments...</p>}
                      {error && <p>Error: {error.message}</p>}

                      {!loading && !error && (
                        <div>
                          {comments && comments.map((comment)=>(
                            <>
                                <div className="flex flex-col gap-2 mb-4">
                                <div className="flex">
                                  <StarIcon width={18} height={18} fill="#f97316" strokeWidth={0}/>
                                  <StarIcon width={18} height={18} fill="#f97316" strokeWidth={0}/>
                                  <StarIcon width={18} height={18} fill="#f97316" strokeWidth={0}/>
                                  <StarIcon width={18} height={18} fill="#f97316" strokeWidth={0}/>
                                  <StarIcon width={18} height={18} fill="#f97316" strokeWidth={0}/>
                                </div>
                                <p className="font-bold">{comment.productsName}</p>
                                <p className="text-[0.75em]">{comment.comments}</p>
                                <div className="flex justify-between">
                                <p className="text-neutral-500 text-[0.75em]">{comment.date} by {comment.username}</p>
                                <div className="text-green-500 flex gap-1">
                                  <CheckMark width={15} height={15}/>
                                  <p className="text-[0.75em]">Verified Purchase</p>
                                </div>
                                </div>
                                <hr />
                            </div>
                            </>
                          ))}
                          
                          {/* Pagination Buttons */}
                          <div className="flex gap-2 mt-4 justify-center items-center">
                            {/* Previous button */}
                            <button 
                              onClick={handlePreviousGroup}
                              disabled={pageGroupStart === 1}
                              className={`px-3 py-1 border rounded-md ${pageGroupStart === 1 ? 'bg-gray-300' : 'bg-white text-black'}`}
                            >
                              Previous
                            </button>

                            {/* page numbers buttons (show only 4 at a time) */}

                            {Array.from({length: Math.min(pageGroupSize, totalPages - pageGroupStart + 1)}, (_, index)=>{
                                const pageNumber = pageGroupStart + index;
                                return (
                                  <button key={index + 1} onClick={()=> handlePageClick(index + 1)}
                                    className={`px-3 py-1 border rounded-md ${page === index + 1 ? 'bg-orange-500 text-white': 'bg-white text-black'}`}
                                  >{pageNumber}</button>
                                )
                              }
                            )}

                            {/* Next button */}
                            <button
                              onClick={handleNextGroup}
                              disabled={pageGroupStart + pageGroupSize > totalPages}
                              className={`px-3 py-1 border rounded-md ${pageGroupStart + pageGroupSize > totalPages ? 'bg-gray-300' : 'bg-white text-black'}`}
                            >
                              Next
                            </button>
                          </div>
                        </div>
                      )}
                   </aside>
                 </section>
             </div>
      </main>
     )
   }
