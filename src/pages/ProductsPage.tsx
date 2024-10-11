import { useState } from 'react';
import { useQuery } from 'react-query';
import { useLocation } from 'react-router-dom';

import { getProducts } from '@/api/products';
import AddIcon from '@/assets/icons/add-icon.svg';
import ProductsFilterForm from '@/components/forms/ProductsFilterForm';
import AddProductModal from '@/components/modals/AddProductModal';
import Table from '@/components/Table';
import { Button } from '@/components/ui/button';
import useQueryParams from '@/hooks/useQueryParams';
import { Product } from '@/interfaces/Product';

const ProductsPage = () => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
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
      <div className="my-5 flex flex-wrap items-end gap-3">
        <ProductsFilterForm isSearching={isLoading} />
        <Button
          className="h-11 w-11 rounded-full p-0"
          onClick={() => setIsAddModalOpen(true)}
        >
          <AddIcon />
        </Button>
      </div>
      {products && (
        <Table
          caption="All products"
          heads={tableHeads}
          rows={formatProducts(products)}
        />
      )}
      <AddProductModal
        isVisible={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
      />
    </>
  );
};

export default ProductsPage;
