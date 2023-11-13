import { CategoryService } from "../../services/CategoryService";
import useSWR from "swr";
import { category } from "../../types";
import Card from "../_coreComponent/card";

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
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-10">
      {data?.map((category: category, i: number) => (
        <Card 
         key={i}
         title={category.name}
         size="medium"
         image="https://cazkolik.com/storage/gorseller/20120608_021301.jpg"
         route={`/category/${category.name}`}
        />
      ))}
    </div>
  );
};

export default Categories;
