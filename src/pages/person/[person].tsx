import { PersonInfo } from '@/components/Person/Person';
import { persons } from '@/mock/persons';
import { IPerson } from '@/types/types';
import { useRouter } from 'next/router';
import Head from 'next/head';
import React from 'react';
import NotFoundPage from '@/pages/404';

const Person = () => {
  const router = useRouter();
  const person = persons.find(
    (p: IPerson) => router.query.person == p.enName.toLowerCase().split(' ').join('-')
  );
  if (!person) return <NotFoundPage />;
  return (
    <>
      <Head>
        <title>{`Фильм ${person.name}`}</title>
      </Head>
      <PersonInfo person={person} />
    </>
  );
};

export default Person;
