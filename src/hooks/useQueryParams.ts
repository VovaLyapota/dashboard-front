import { useSearchParams } from 'react-router-dom';

const useQueryParams = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const getQueryParams = () => {
    return Object.fromEntries(searchParams.entries());
  };

  const setQueryParams = (params: { [key: string]: any }) => {
    const notEmptyParams = Object.fromEntries(
      Object.entries(params).filter(([_, value]) => !!value),
    );
    setSearchParams(notEmptyParams);
  };

  const clearQueryParams = () => {
    setSearchParams({});
  };

  return { getQueryParams, setQueryParams, clearQueryParams };
};

export default useQueryParams;
