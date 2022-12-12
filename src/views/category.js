import {useParams} from "react-router-dom"
import Item from "../components/Item";
import { Layout } from "../components/Layout";
import {item} from "../mocks/item.mock"


export const CategoryView = () => {
    const {category} = useParams ();
    const categories = item.filter(product => product.category === category)

    return (
        <Layout>
            {categories.map((product) => (
             <Item product={product}/>
             ))}

        </Layout>
    );
};

export default CategoryView;