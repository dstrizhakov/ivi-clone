import React, { useState } from 'react';
import { useEvent } from '@/hooks/useEvent';
import { useRouter } from 'next/router';

// can save state in url, example:
// const [query, setQuery] = useSearchParamsState({
//   name: 'query',
// });
// query: ?query=input_value

function getSearchParam(search: string, param: string) {
  const searchParams = new URLSearchParams(search);
  return searchParams.get(param);
}

function setSearchParam(search: string, param: string, value: string) {
  const searchParams = new URLSearchParams(search);
  searchParams.set(param, value);
  return searchParams.toString();
}

const defaultDeserialize = <Value>(v: string | null) => v as Value;
const defaultSerialize = String;

interface UseSearchParamsStateOptions<Value> {
  name: string;
  serialize?: (value: Value) => string;
  deserialize?: (value: string | null) => Value;
}

function isFunction(value: any): value is (...args: any) => any {
  return typeof value === 'function';
}

export function useSearchParamsState<Value>({
  name,
  serialize = defaultSerialize,
  deserialize = defaultDeserialize,
}: UseSearchParamsStateOptions<Value>) {
  const router = useRouter();
  const searchParam = getSearchParam(router.asPath.split('?')[1], name);
  const [value, setValue] = useState(() => {
    return deserialize ? deserialize(searchParam) : defaultDeserialize(searchParam);
  });

  const updateValue = useEvent((newValue: React.SetStateAction<Value>) => {
    if (typeof window == undefined) {
      return;
    }
    const search: string = window?.location?.search;

    const actualNewValue: Value = isFunction(newValue) ? newValue(value) : newValue;

    setValue(actualNewValue);

    const newSearch: string = setSearchParam(
      search,
      name,
      serialize ? serialize(actualNewValue) : defaultSerialize(actualNewValue)
    );

    history.pushState(null, '', `?${newSearch}`);
  });

  return [value, updateValue];
}
