import { useEffect, useState, Fragment } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { selectCategoriesMap } from "../../store/categories/category.selector";

import ProductCard from "../../component/product-card/product-card.component";

import { CategoryContainer, Title } from './category.styles.scss';

import "./category.styles.scss";

const Category = () => {
  const { category } = useParams();
  console.log('render/re-rendering category component');
  const categoriesMap = useSelector(selectCategoriesMap);
  const [products, setProducts] = useState([category]);

  useEffect(() => {
    console.log('effect fired calling setProducts');
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);
  return (
    <Fragment>
      <h2 className="category-title">{category.toUpperCase()}</h2>
      <div className="category-container">
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </Fragment>
  );
};

export default Category;
