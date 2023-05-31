import { FC } from "react";
import { CategoryResource } from "../../../../server/types/resource/category-resource";
import { ArrowRightSmallIcon } from "../../../ui/icons/arrow-right-small-icon";
import { Link } from "react-router-dom";

interface ICategoryProps {
  category: CategoryResource;
}
export const Category: FC<ICategoryProps> = ({ category }) => {
  return (
    <div
      style={{
        borderTop: " 1px solid #D3D6D5",
        borderBottom: "1px solid #D3D6D5",
        height: 50,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      {category.title}
      <Link to={`/category/${category.id}`}>
        <ArrowRightSmallIcon />
      </Link>
    </div>
  );
};
