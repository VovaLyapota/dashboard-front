import { useQuery } from 'react-query';
import { useLocation } from 'react-router-dom';

import { getProducts } from '@/api/products';
import ProductsFilterForm from '@/components/forms/ProductsFilterForm';
import Table from '@/components/Table';
import useQueryParams from '@/hooks/useQueryParams';
import { Product } from '@/interfaces/Product';

const ProductsPage = () => {
  const { getQueryParams } = useQueryParams();

  const { search } = useLocation();
  const { data: products, isLoading } = useQuery({
    queryKey: ['fetch-products', search],
    queryFn: () => getProducts(getQueryParams()),
    retry: false,
  });

  const tableHeads = {
    name: 'Product Info',
    category: 'Category',
    stock: 'Stock',
    suppliers: 'Suppliers',
    price: 'Price',
    id: 'Action',
  };

  const formatProducts = (products: Product[]) => {
    return products.map((product) => ({
      ...product,
      suppliers: product.suppliers.map(({ name }) => name).join(', '),
    }));
  };

  return (
    <>
      <ProductsFilterForm isSearching={isLoading} />
      {products && (
        <Table
          caption="All products"
          heads={tableHeads}
          rows={formatProducts(products)}
        />
      )}
    </>
  );
};

export default ProductsPage;
