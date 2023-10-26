import Categories from "../../components/category/categories";

const Category = () => {
  return (
    <div className="w-full mt-10 font-bold text-cyan-200 font-raleway">
       <div className="bg-bottom bg-cover  bg-background-image-7 h-[24rem] relative">
        <div className="absolute top-0 bottom-0 left-0 right-0 flex flex-col items-center justify-center">
            <h3 className="text-8xl ">Categories</h3>
        </div>
       </div>
      <Categories />
    </div>
  );
};

export default Category;
