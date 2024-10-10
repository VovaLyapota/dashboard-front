import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2 } from 'lucide-react';
import { useForm } from 'react-hook-form';

import FilterIcon from '@/assets/icons/filter-icon.svg';
import useQueryParams from '@/hooks/useQueryParams';
import { OrderStatusEnum } from '@/interfaces/Order';
import { cn } from '@/lib/utils';
import { OrderStatusStyles } from '@/pages/OrdersPage';
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
  const { getQueryParams, setQueryParams, clearQueryParams } = useQueryParams();
  const form = useForm<GetOrdersPropsType>({
    resolver: zodResolver(getOrdersSchema),
    defaultValues: {
      customer: '',
      quantity: '',
      minAmount: '',
      maxAmount: '',
      status: undefined,
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
        className="mb-4 mt-5 flex flex-wrap items-end gap-3"
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
                  className="h-11 max-w-56 rounded-full bg-white"
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
                  className="h-11 max-w-24 rounded-full bg-white"
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
                    className="h-11 max-w-20 rounded-full rounded-r-none bg-white"
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
                    className="h-11 max-w-20 rounded-full rounded-l-none bg-white"
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
            <FormItem className="w-full max-w-40 space-y-1">
              <FormLabel>Status</FormLabel>
              <Select onValueChange={field.onChange} value={field.value || ''}>
                <FormControl>
                  <SelectTrigger className="h-11 rounded-xl bg-white">
                    <SelectValue placeholder="Choose status" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {Object.values(OrderStatusEnum).map((status) => (
                    <SelectItem
                      key={status}
                      value={status}
                      className="cursor-pointer"
                    >
                      <span
                        className={cn(
                          'rounded-full bg-gray-200 px-2 py-1 text-sm font-medium text-gray-600',
                          OrderStatusStyles[status],
                        )}
                      >
                        {status}
                      </span>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          className="flex h-11 w-full max-w-28 gap-3 rounded-full"
          type="submit"
          disabled={isSearching}
        >
          {isSearching ? (
            <Loader2
              className={cn('h-5 w-5 animate-spin', {
                hidden: !isSearching,
              })}
            />
          ) : (
            <FilterIcon />
          )}

          {isSearching ? 'Filtering' : 'Filter'}
        </Button>
        <Button
          className="flex h-11 w-full max-w-28 gap-3 rounded-full"
          type="button"
          onClick={() => {
            form.reset();
            clearQueryParams();
          }}
        >
          Clear
        </Button>
      </form>
    </Form>
  );
};

export default OrdersFilterForm;
