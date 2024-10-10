import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2 } from 'lucide-react';
import { useForm } from 'react-hook-form';

import FilterIcon from '@/assets/icons/filter-icon.svg';
import useQueryParams from '@/hooks/useQueryParams';
import { OrderStatusEnum } from '@/interfaces/Order';
import { cn } from '@/lib/utils';
import { GetOrdersPropsType, getOrdersSchema } from '@/schemas/getOrderSchema';

import { Button } from '../ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import { Input } from '../ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';

const OrdersFilterForm = ({ isSearching }: { isSearching: boolean }) => {
  const { getQueryParams, setQueryParams } = useQueryParams();
  const form = useForm<GetOrdersPropsType>({
    resolver: zodResolver(getOrdersSchema),
    defaultValues: {
      customer: '',
      quantity: '',
      minAmount: '',
      maxAmount: '',
      ...getQueryParams(),
    },
  });

  const onSubmit = async (values: GetOrdersPropsType) => {
    setQueryParams(values);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="mt-5 mb-4 flex flex-wrap gap-3 items-end"
      >
        <FormField
          control={form.control}
          name="customer"
          render={({ field }) => (
            <FormItem className="space-y-1">
              <FormLabel>Customer name</FormLabel>
              <FormControl>
                <Input
                  type="text"
                  className="max-w-56 h-11 rounded-full bg-white"
                  placeholder="Customer"
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="quantity"
          render={({ field }) => (
            <FormItem className="space-y-1">
              <FormLabel>Products</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  min={0}
                  className="max-w-24 h-11 rounded-full bg-white"
                  placeholder="Quantity"
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex items-end">
          <FormField
            control={form.control}
            name="minAmount"
            render={({ field }) => (
              <FormItem className="space-y-1">
                <FormLabel>Price</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    placeholder="From"
                    className="max-w-20 h-11 rounded-full rounded-r-none bg-white"
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="maxAmount"
            render={({ field }) => (
              <FormItem className="space-y-1">
                <FormControl>
                  <Input
                    type="number"
                    placeholder="To"
                    className="max-w-20 h-11 rounded-full rounded-l-none bg-white"
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="status"
          render={({ field }) => (
            <FormItem className="space-y-1 w-full max-w-40">
              <FormLabel>Status</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="h-11 bg-white">
                    <SelectValue placeholder="Choose status" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {Object.values(OrderStatusEnum).map((value) => (
                    <SelectItem
                      key={value}
                      value={value}
                      className="cursor-pointer"
                    >
                      {value}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          className="max-w-28 h-11 w-full rounded-full flex gap-3"
          type="submit"
          disabled={isSearching}
        >
          {isSearching ? (
            <Loader2
              className={cn('w-5 h-5 animate-spin', {
                hidden: !isSearching,
              })}
            />
          ) : (
            <FilterIcon />
          )}

          {isSearching ? 'Filtering' : 'Filter'}
        </Button>
      </form>
    </Form>
  );
};

export default OrdersFilterForm;
