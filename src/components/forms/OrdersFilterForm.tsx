import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2 } from 'lucide-react';
import { useForm } from 'react-hook-form';

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
        className="mt-10 flex flex-col gap-3 md:max-w-80 lg:mt-0 lg:w-80"
      >
        <FormField
          control={form.control}
          name="customer"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  type="text"
                  className="h-11 rounded-full bg-white"
                  placeholder="Customer name"
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
            <FormItem>
              <FormControl>
                <Input
                  type="number"
                  className="h-11 rounded-full bg-white"
                  placeholder="Quantity"
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="minAmount"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  type="number"
                  className="h-11 rounded-full bg-white"
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
            <FormItem>
              <FormControl>
                <Input
                  type="number"
                  className="h-11 rounded-full bg-white"
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="status"
          render={({ field }) => (
            <FormItem>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a verified email to display" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {Object.values(OrderStatusEnum).map((value) => (
                    <SelectItem key={value} value={value}>
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
          className="mt-10 h-11 w-full rounded-full flex gap-3"
          type="submit"
          disabled={isSearching}
        >
          Search
          <Loader2
            className={cn('w-5 h-5 animate-spin', {
              hidden: !isSearching,
            })}
          />
        </Button>
      </form>
    </Form>
  );
};

export default OrdersFilterForm;
