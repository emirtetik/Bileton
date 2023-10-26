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
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <div className="flex flex-col flex-1 max-w-6xl space-y-5 bg-white lg:space-y-0 lg:flex-row lg:space-x-10 sm:p-6 sm:my-2 sm:mx-4 sm:rounded-2xl">
        <div className="flex-1 px-2 sm:px-0">
          
          <div className="grid grid-cols-1 gap-4 mt-10 mb-10 sm:mb-0 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {data?.map((category: category, i: number) => (
              <Link key={i} to={`/category/${category.name}`}>
                <div className="relative flex flex-col items-center px-4 py-10 space-y-2 bg-blue-900 rounded-md cursor-pointer group sm:py-20 hover:bg-blue-600 hover:smooth-hover">
                  <img
                    className="object-cover object-center w-20 h-20 rounded-full"
                    src="https://images.unsplash.com/photo-1547592180-85f173990554?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
                    alt="cuisine"
                  />
                  <h4 className="text-2xl font-bold text-center text-white capitalize">
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
