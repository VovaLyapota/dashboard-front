import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2 } from 'lucide-react';
import { useForm } from 'react-hook-form';

import FilterIcon from '@/assets/icons/filter-icon.svg';
import useQueryParams from '@/hooks/useQueryParams';
import { ProductCategoryEnum } from '@/interfaces/Product';
import { cn } from '@/lib/utils';
import { GetProductsPropsType, getProductsSchema } from '@/schemas';

import LimitsInput from '../LimitsInput';
import { Button } from '../ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel } from '../ui/form';
import { Input } from '../ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';

const ProductsFilterForm = ({ isSearching }: { isSearching: boolean }) => {
  const { getQueryParams, setQueryParams, clearQueryParams } = useQueryParams();
  const form = useForm<GetProductsPropsType>({
    resolver: zodResolver(getProductsSchema),
    defaultValues: {
      stock: '',
      minPrice: '',
      maxPrice: '',
      category: undefined,
      ...getQueryParams(),
    },
  });

  const onSubmit = async (values: GetProductsPropsType) => {
    setQueryParams(values);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="mr-auto flex flex-wrap items-end gap-3 md:flex-nowrap"
      >
        <FormField
          control={form.control}
          name="stock"
          render={({ field }) => (
            <FormItem className="space-y-1">
              <FormLabel>Stock</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  min={0}
                  className="h-11 w-24 rounded-full bg-white"
                  placeholder="Stock"
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <LimitsInput
          control={form.control}
          label="Price"
          leftName="minPrice"
          rightName="maxPrice"
        />
        <FormField
          control={form.control}
          name="category"
          render={({ field }) => (
            <FormItem className="w-40 space-y-1">
              <FormLabel>Category</FormLabel>
              <Select onValueChange={field.onChange} value={field.value || ''}>
                <FormControl>
                  <SelectTrigger className="h-11 rounded-xl bg-white">
                    <SelectValue placeholder="Choose category" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {Object.values(ProductCategoryEnum).map((category) => (
                    <SelectItem
                      key={category}
                      value={category}
                      className="cursor-pointer"
                    >
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </FormItem>
          )}
        />
        <div className="flex gap-3">
          <Button
            className="flex h-11 w-28 gap-3 rounded-full"
            type="submit"
            disabled={isSearching}
          >
            {isSearching ? (
              <Loader2 className="h-5 w-5 animate-spin" />
            ) : (
              <FilterIcon />
            )}

            {isSearching ? 'Filtering' : 'Filter'}
          </Button>
          <Button
            className="flex h-11 w-28 gap-3 rounded-full"
            type="button"
            onClick={() => {
              form.reset();
              clearQueryParams();
            }}
          >
            Clear
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default ProductsFilterForm;
