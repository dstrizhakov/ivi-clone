import { usePathname, useRouter } from 'next/navigation';
import { useCallback, useState } from 'react';
import { useLatest } from '@/hooks/useLatest';

// can save state in url, example:
// const [query, setQuery] = useSearchParamsState({
//   name: 'query',
// });
// query: ?query=input_value

function getSearchParam(search, param) {
  const searchParams = new URLSearchParams(search);
  return searchParams.get(param);
}

function setSearchParam(search, param, value) {
  const searchParams = new URLSearchParams(search);
  searchParams.set(param, value);
  return searchParams.toString();
}

const defaultDeserialize = (v) => v;
const defaultSerialize = String;

export function useSearchParamsState({
  name,
  serialize = defaultSerialize,
  deserialize = defaultDeserialize,
}) {
  const router = useRouter();
  const path = usePathname();
  const [value, setValue] = useState(() => {
    return deserialize(getSearchParam(path, name));
  });

  const latestValue = useLatest(value);

  const updateValue = useCallback(
    (newValue) => {
      const search = path.search;
      const actualNewValue =
        typeof newValue === 'function' ? newValue(latestValue.current) : newValue;

      setValue(actualNewValue);

      const newSearch = setSearchParam(search, name, serialize(actualNewValue));

      router.replace({
        search: newSearch,
      });
    },
    [path.search, latestValue, name, serialize, router]
  );

  return [value, updateValue];
}
