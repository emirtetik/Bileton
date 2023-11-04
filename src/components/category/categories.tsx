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
    <div className="flex flex-wrap justify-start mt-8 gap-4  ">
      {data?.map((category: category, i: number) => (
        <Link key={i} to={`/category/${category.name}`}>
          <div className="flex flex-col gap-4 items-center justify-start w-48 p-4 bg-first border border-gray-300 rounded-md cursor-pointer group  hover:bg-blue-400 hover:smooth-hover">
            <img
              className="object-cover object-center w-20 h-20 rounded-full"
              src="https://images.unsplash.com/photo-1547592180-85f173990554?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
              alt="cuisine"
            />
            <h4 className="text-2xl font-bold text-center  capitalize">
              {category.name}
            </h4>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Categories;
