import { zodResolver } from '@hookform/resolvers/zod';
import { AxiosError } from 'axios';
import { Loader2 } from 'lucide-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';

import { loginUser, registerUser } from '@/api';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { ROUTES } from '@/constants';
import { useToast } from '@/hooks/use-toast';
import { ErrorResponse } from '@/interfaces/ErrorResponse';
import { cn } from '@/lib/utils';
import { LoginPropsType, loginSchema } from '@/schemas/loginSchema';
import useUserStore from '@/stores/userStore';

const changeButtonText = {
  signup: 'Already have an account? Log in.',
  signin: "Don't have an account? Sign up.",
};

const AuthForm = () => {
  const [auth, setAuth] = useState<'signup' | 'signin'>('signup');
  const isSignup = auth === 'signup';
  const { toast } = useToast();
  const { setUser } = useUserStore();
  const navigate = useNavigate();

  const form = useForm<LoginPropsType>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });
  const { mutate: authUser, isLoading } = useMutation({
    mutationKey: ['auth-user'],
    mutationFn: isSignup ? registerUser : loginUser,
    onSuccess: (data) => {
      setUser(data);
      navigate(ROUTES.DASHBOARD);
    },
    onError: ({ response }: AxiosError<ErrorResponse>) => {
      toast({
        variant: 'destructive',
        title: 'Uh oh! Something went wrong.',
        description: response?.data?.message || 'Try again or later.',
      });
    },
  });

  const onSubmit = async (values: LoginPropsType) => {
    authUser(values);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="mt-10 flex flex-col gap-3 md:max-w-80 lg:mt-0 lg:w-80"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  type="email"
                  className="h-11 rounded-full bg-white"
                  placeholder="example@gmail.com"
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  className="h-11 rounded-full bg-white"
                  placeholder="Enter password here"
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          className="mt-10 flex h-11 w-full gap-3 rounded-full"
          type="submit"
          disabled={isLoading}
        >
          {!isLoading && (isSignup ? 'Sign up' : 'Log in')}
          {isLoading && (isSignup ? 'Signing up' : 'Logging in')}
          <Loader2
            className={cn('h-5 w-5 animate-spin', {
              hidden: !isLoading,
            })}
          />
        </Button>
        <Button
          type="button"
          className="mx-auto block"
          variant={'link'}
          onClick={() =>
            setAuth((prev) => (prev === 'signup' ? 'signin' : 'signup'))
          }
        >
          {changeButtonText[auth]}
        </Button>
      </form>
    </Form>
  );
};

export default AuthForm;
