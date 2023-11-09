import { event, searchProps } from "../../../../types";
import Moment from "react-moment";

import { DataGrid, GridColDef } from "@mui/x-data-grid";

import { Link } from "react-router-dom";

const columns: GridColDef[] = [
  {
    field: "date",
    headerName: "Date",
    width: 150,

    renderCell: (params) => (
      <h3 className="text-fourth   whitespace-no-wrap">
        <Moment format="MMM  Do  ">{params.row.eventDate}</Moment>
      </h3>
    ),
  },
  {
    field: "name",
    headerName: "Event",
    width: 400,
    renderCell: (params) => (
      <Link to={`/event/${params.row.name}-${params.row._id}`}>
        <div className="flex items-center justify-center">
          <div className="flex-shrink-0 w-10 h-10">
            <img
              className="w-full h-full object-cover rounded-md"
              src={params.row.image}
              alt=""
            />
          </div>

          <h3 className="text-fourth pl-3 whitespace-no-wrap">
            {params.row.name}
          </h3>
        </div>
      </Link>
    ),
  },
  {
    field: "location",
    headerName: "Location",
    width: 200,
    renderCell: (params) => (
      <h3 className="text-fourth  whitespace-no-wrap">{params.row.location}</h3>
    ),
  },
  {
    field: "category",
    headerName: "Category",
    width: 200,
    renderCell: (params) => (
      <h3 className="text-fourth  whitespace-no-wrap">{params.row.category}</h3>
    ),
  },
];

const EventList = (props: {
  search: searchProps;
  events: event[];
  isLoading: boolean;
  error: unknown;
}) => {
  const rows = props.events;

  if (props.error) return <div>failed to load</div>;
  if (props.isLoading) return <div>loading...</div>;
  if (props.events.length === 0)
    return <div className="text-center">No events found</div>;

  return (
    <div className="w-full">
      <DataGrid
        rows={rows}
        getRowId={(row) => row._id.toString()}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        pageSizeOptions={[5, 10]}
      />
    </div>
  );
};

export default EventList;
