import { CategoryService } from "../../services/CategoryService";
import useSWR from "swr";
import { category } from "../../types";
import { Link } from "react-router-dom";

const fetcher = () => CategoryService.getAll();

const Categories = () => {
  const { data, error, isLoading } = useSWR("categories", fetcher);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error</div>;
  }

  return (
    <div className="bg-white min-h-screen flex items-center justify-center">
      <div className="bg-white flex-1 flex flex-col space-y-5 lg:space-y-0 lg:flex-row lg:space-x-10 max-w-6xl sm:p-6 sm:my-2 sm:mx-4 sm:rounded-2xl">
        <div className="flex-1 px-2 sm:px-0">
          <div className="flex justify-center items-center">
            <h3 className="text-3xl font-extralight text-black ">Categories</h3>
          </div>
          <div className="mb-10 sm:mb-0 mt-10 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {data?.map((category: category) => (
              <Link to={`/category/${category.name}`}>
                <div className="relative group bg-blue-900 py-10 sm:py-20 px-4 flex flex-col space-y-2 items-center cursor-pointer rounded-md hover:bg-blue-600 hover:smooth-hover">
                  <img
                    className="w-20 h-20 object-cover object-center rounded-full"
                    src="https://images.unsplash.com/photo-1547592180-85f173990554?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
                    alt="cuisine"
                  />
                  <h4 className="text-white text-2xl font-bold capitalize text-center">
                    {category.name}
                  </h4>
                  <p className="text-white/50">12</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
