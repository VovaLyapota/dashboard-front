import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2 } from 'lucide-react';
import { useForm } from 'react-hook-form';

import FilterIcon from '@/assets/icons/filter-icon.svg';
import useQueryParams from '@/hooks/useQueryParams';
import { OrderStatusEnum } from '@/interfaces/Order';
import { cn } from '@/lib/utils';
import { OrderStatusStyles } from '@/pages/OrdersPage';
import { GetOrdersPropsType, getOrdersSchema } from '@/schemas';

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
        className="mb-4 flex flex-wrap items-end gap-3"
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
                  className="h-11 w-56 rounded-full bg-white"
                  placeholder="Customer"
                  {...field}
                />
              </FormControl>
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
                  className="h-11 w-24 rounded-full bg-white"
                  placeholder="Quantity"
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <LimitsInput
          control={form.control}
          label="Price"
          leftName="minAmount"
          rightName="maxAmount"
        />
        <FormField
          control={form.control}
          name="status"
          render={({ field }) => (
            <FormItem className="w-40 space-y-1">
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

export default OrdersFilterForm;
