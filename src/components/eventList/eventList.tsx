import EventRow from "./eventRow"
import { useState } from "react"
import useSWR from "swr"
import { EventService } from "../../services/EventService"
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
<div className="bg-white px-8 rounded-md w-full">
	
		<div>
			<div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
				<div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
					<table className="min-w-full leading-normal">
						<thead>
							<tr>
								<th
									className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
									Date
								</th>
								<th
									className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
									Event
								</th>
								<th
									className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
									Location
								</th>
								<th
									className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
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
						className="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between          ">
						<span className="text-xs xs:text-sm text-gray-900">
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
                                className="text-sm text-indigo-50 transition duration-150 hover:bg-indigo-500 bg-indigo-600 font-semibold py-2 px-4 rounded-l">
                                Prev
                            </button>
							&nbsp; &nbsp;
							<button
							onClick={()=>{
								if(page+5 < events.length){
									setPage(page+5)
								}
							}}
                                className="text-sm text-indigo-50 transition duration-150 hover:bg-indigo-500 bg-indigo-600 font-semibold py-2 px-4 rounded-r">
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