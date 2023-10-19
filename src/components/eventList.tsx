import EventRow from "./eventList/eventRow"
import { useState } from "react"
import useSWR from "swr"
import { EventService } from "../services/EventService"
interface event{
    image:string,
    name:string,
    description:string,
    date:string,
    location:string,
    status:string
}

const fetcher = () => EventService.getAll()

const EventList = () => {
	const [page, setPage] = useState(1)
    const { data: events,isLoading, error } = useSWR("events", fetcher)
    

    if (error) return <div>failed to load</div>
  if (isLoading) return <div>loading...</div>
  return (
<div className="w-full p-8 bg-white">
	<div className="flex items-center gap-4 pb-6 ">
		<div>
			<h2 className="font-semibold text-gray-600">Event List</h2>
			<span className="text-xs">All Events</span>
		</div>
		<div className="flex items-center justify-between flex-1">
        <div className="ml-10 space-x-8 lg:ml-40">
					<button className="px-4 py-2 font-semibold tracking-wide text-white bg-indigo-600 rounded-md cursor-pointer">Criteria </button>
					<button className="px-4 py-2 font-semibold tracking-wide text-white bg-indigo-600 rounded-md cursor-pointer">Criteria</button>
				</div>
			<div className="flex items-center p-2 rounded-md bg-gray-50">
				<svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-400" viewBox="0 0 20 20"
					fill="currentColor">
					<path fill-rule="evenodd"
						d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
						clip-rule="evenodd" />
				</svg>
				<input className="block ml-1 outline-none bg-gray-50 " type="text" name="" id="" placeholder="search..."/>
          </div>
				
			</div>
		</div>
		<div>
			<div className="px-4 py-4 -mx-4 overflow-x-auto sm:-mx-8 sm:px-8">
				<div className="inline-block min-w-full overflow-hidden rounded-lg shadow">
					<table className="min-w-full leading-normal">
						<thead>
							<tr>
								<th
									className="px-5 py-3 text-xs font-semibold tracking-wider text-left text-gray-600 uppercase bg-gray-100 border-b-2 border-gray-200">
									Date
								</th>
								<th
									className="px-5 py-3 text-xs font-semibold tracking-wider text-left text-gray-600 uppercase bg-gray-100 border-b-2 border-gray-200">
									Event
								</th>
								<th
									className="px-5 py-3 text-xs font-semibold tracking-wider text-left text-gray-600 uppercase bg-gray-100 border-b-2 border-gray-200">
									Location
								</th>
								<th
									className="px-5 py-3 text-xs font-semibold tracking-wider text-left text-gray-600 uppercase bg-gray-100 border-b-2 border-gray-200">
									Status
								</th>

							</tr>
						</thead>
						<tbody>
							{events.slice(page-1,page+5).map((event:event ) => (
                                <EventRow {...event} />  
                            ))}
							
						</tbody>
					</table>
					<div
						className="flex flex-col items-center px-5 py-5 bg-white border-t xs:flex-row xs:justify-between ">
						<span className="text-xs text-gray-900 xs:text-sm">
                            Showing {page} to {page+5 > events.length ? events.length : page+5} of {events.length}
                        </span>
						<div className="inline-flex mt-2 xs:mt-0">
							<button
							onClick={()=>{
								if(page - 5  > 0){
									setPage(page-5)
								}
							}
							}
                                className="px-4 py-2 text-sm font-semibold transition duration-150 bg-indigo-600 rounded-l text-indigo-50 hover:bg-indigo-500">
                                Prev
                            </button>
							&nbsp; &nbsp;
							<button
							onClick={()=>{
								if(page+5 < events.length){
									setPage(page+5)
								}
							}}
                                className="px-4 py-2 text-sm font-semibold transition duration-150 bg-indigo-600 rounded-r text-indigo-50 hover:bg-indigo-500">
                                Next
                            </button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
  )
}

export default EventList