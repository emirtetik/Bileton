import useSWR from "swr"
import { EventService } from "../../../../services/EventService"

type PastProps = {
    id: string;
    name: string;
    date: string;
}

const fetcher = () => EventService.getAll();

const PastEvent = () => {
     const {data,error,isLoading} = useSWR('pastEvent', fetcher)


  if (isLoading) {
    return <div>...loading</div>
  }
 
  if (error) {
    return <div>...failed</div>
  }

    const EventPast = data.filter((event:PastProps )=> {
         const EventFuture = new Date(event.date)
         return EventFuture < new Date();
    })
    
  return (
    <div >
         <h6>Geçmiş Etkinlikler</h6>
      {EventPast.map((event:PastProps) => (
         <div key={event.id}>
             <h2>{event.name}</h2>
             {/* <p>{event.date}</p> */}

         </div>
      ))}
    </div>
  )
}

export default PastEvent