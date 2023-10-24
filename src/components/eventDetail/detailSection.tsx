import MuiButton from "../_coreComponent/mui/button";

const DetailSection = () => {
  return (
    <div className="flex flex-row mx-24 bg-gray-500 mt-8 pt-8">
      <div className="w-4/6 flex flex-col gap-8">
        <div className="flex flex-col gap-6">
          <h2 className="darkText">Description</h2>
          <h3 className="text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
            nobis, accusantium facere architecto minima unde iure dolorem
            repellendus natus modi molestiae hic eaque! Expedita quae incidunt
            hic error eaque nesciunt. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Laborum nobis, accusantium facere architecto
            minima unde iure dolorem repellendus natus modi molestiae hic eaque!
            Expedita quae incidunt
          </h3>
        </div>
        <div className="flex flex-col gap-6">
          <h2>Hours</h2>
          <div>
            <h3>Monday: 9:00 AM – 5:00 PM</h3>
            <h3>Tuesday: 9:00 AM – 5:00 PM</h3>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <h2>Participants</h2>
          <div>
            <h3>Nedim Ramicevic</h3>
            <h3>John Doe</h3>
            <h3>John Doe</h3>
          </div>
        </div>
      </div>
      <div className=" w-2/6 bg-red-800 flex flex-col gap-4">
        <div className="flex flex-col gap-6">
          <h2>Location</h2>
          <div>Map</div>
          <div>
            <h2>Jakarta</h2>
            <h3>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium alias possimus mollitia
            </h3>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <h2>Tags</h2>
          <div className="flex gap-2">
            <MuiButton variant="contained" size="small" children="Jazz" />
            <MuiButton variant="contained" size="small" children="Rock" />
            <MuiButton variant="contained" size="small" children="Pop" />
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <h2>Share with friends</h2>
          <div className="flex gap-2">
            <h3>Facebook</h3>
            <h3>Twitter</h3>
            <h3>Instagram</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailSection;
