import { zodResolver } from '@hookform/resolvers/zod';
import { AxiosError } from 'axios';
import { Loader2 } from 'lucide-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';

import { createProduct } from '@/api/products';
import { useToast } from '@/hooks/use-toast';
import { ErrorResponse } from '@/interfaces/ErrorResponse';
import { ProductCategoryEnum } from '@/interfaces/Product';
import {
  CreateProductPropsType,
  createProductSchema,
} from '@/schemas/createProductSchema';

import { MultipleSelect } from '../MultipleSelect';
import { Button } from '../ui/button';
import { Form, FormControl, FormField, FormItem } from '../ui/form';
import { Input } from '../ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';

const options = [
  { label: 'name1', value: 1 },
  { label: 'name2', value: 2 },
  { label: 'name3', value: 3 },
  { label: 'name4', value: 4 },
  { label: 'name5', value: 5 },
  { label: 'name6', value: 6 },
  { label: 'name7', value: 7 },
];

const AddProductForm = ({ onClose }: { onClose: () => void }) => {
  const { toast } = useToast();
  const [suppliersIds, setSuppliersIds] = useState<number[]>([]);

  const form = useForm<CreateProductPropsType>({
    resolver: zodResolver(createProductSchema),
    defaultValues: {
      name: '',
      stock: '',
      price: '',
      category: ProductCategoryEnum.MEDICINE,
      suppliers: [],
    },
  });

  const { mutate: setProduct, isLoading } = useMutation({
    mutationKey: ['create-product'],
    mutationFn: createProduct,
    onSuccess: () => {
      //   console.log('success!!!');
      onClose();
    },
    onError: ({ response }: AxiosError<ErrorResponse>) => {
      toast({
        variant: 'destructive',
        title: 'Uh oh! Something went wrong.',
        description: response?.data?.message || 'Try again or later.',
      });
    },
  });

  const onSubmit = async ({
    price,
    stock,
    ...rest
  }: CreateProductPropsType) => {
    form.setValue('suppliers', suppliersIds);
    setProduct({ ...rest, price: +price, stock: +stock });
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-3"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  type="text"
                  className="h-11 w-full rounded-full bg-white"
                  placeholder="Product name"
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="stock"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  type="number"
                  min={0}
                  className="h-11 w-full rounded-full bg-white"
                  placeholder="Stock"
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="price"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  type="number"
                  min={0}
                  className="h-11 w-full rounded-full bg-white"
                  placeholder="Price"
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="category"
          render={({ field }) => (
            <FormItem className="w-full">
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
        <MultipleSelect
          options={options}
          values={suppliersIds}
          setValue={setSuppliersIds}
        />
        <div className="flex gap-3">
          <Button
            className="flex h-11 w-28 gap-3 rounded-full"
            type="submit"
            disabled={isLoading}
          >
            {isLoading && <Loader2 className="h-5 w-5 animate-spin" />}
            {isLoading ? 'Creating' : 'Create'}
          </Button>
          <Button
            className="flex h-11 w-28 gap-3 rounded-full"
            type="button"
            onClick={() => {
              form.reset();
              onClose();
            }}
          >
            Cancel
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default AddProductForm;
