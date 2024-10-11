import { Control } from 'react-hook-form';

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from './ui/form';
import { Input } from './ui/input';

type LimitsInputProps = {
  control: Control<any, unknown>;
  leftName: string;
  rightName: string;
  label: string;
};

const LimitsInput = ({
  control,
  leftName,
  rightName,
  label,
}: LimitsInputProps) => {
  return (
    <div className="flex items-end">
      <FormField
        control={control}
        name={leftName}
        render={({ field }) => (
          <FormItem className="space-y-1">
            {label && <FormLabel>{label}</FormLabel>}
            <FormControl>
              <Input
                type="number"
                placeholder="From"
                className="h-11 w-20 rounded-full rounded-r-none bg-white"
                {...field}
              />
            </FormControl>

            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={control}
        name={rightName}
        render={({ field }) => (
          <FormItem className="space-y-1">
            <FormControl>
              <Input
                type="number"
                placeholder="To"
                className="h-11 w-20 rounded-full rounded-l-none bg-white"
                {...field}
              />
            </FormControl>

            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};

export default LimitsInput;
