import { Check, ChevronsUpDown } from 'lucide-react';
import { Dispatch, SetStateAction, useState } from 'react';

import { Button } from '@/components/ui/button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { cn } from '@/lib/utils';

type StringOrNumber = string | number;

interface MultipleSelectProps<T extends StringOrNumber> {
  options: { value: T; label: string }[];
  values: T[];
  setValue: Dispatch<SetStateAction<T[]>>;
}

export const MultipleSelect = <T extends StringOrNumber>({
  options,
  values,
  setValue,
}: MultipleSelectProps<T>) => {
  const [open, setOpen] = useState(false);

  const handleSetValue = (val: T) => {
    if (values.includes(val)) {
      setValue(values.filter((item) => item !== val));
    } else {
      setValue((prevValue) => [val, ...prevValue]);
    }
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="h-11 w-full justify-between rounded-xl bg-white px-3 py-2"
        >
          <div className="flex justify-start gap-2 overflow-x-scroll">
            {values?.length
              ? values.map((val, i) => (
                  <div
                    key={i}
                    className="rounded-xl border bg-slate-200 px-2 py-1 text-xs font-medium"
                  >
                    {options.find((option) => option.value === val)?.label}
                  </div>
                ))
              : 'Select option...'}
          </div>
          <ChevronsUpDown className="ml-1 h-4 w-4 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0">
        <Command>
          <CommandInput placeholder="Search option..." />
          <CommandGroup>
            <CommandList>
              <CommandEmpty>No option found.</CommandEmpty>
              {options.map((option) => (
                <CommandItem
                  key={option.value}
                  value={String(option.value)}
                  onSelect={() => {
                    handleSetValue(option.value);
                  }}
                >
                  <Check
                    className={cn(
                      'mr-2 h-4 w-4',
                      values.includes(option.value)
                        ? 'opacity-100'
                        : 'opacity-0',
                    )}
                  />
                  {option.label}
                </CommandItem>
              ))}
            </CommandList>
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
};
