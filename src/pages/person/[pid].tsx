import { PersonInfo } from '@/components/Person/Person';
import NotFoundPage from '@/pages/404';
import Head from 'next/head';
import i18next from 'i18next';
import { useFetchOnePersonQuery } from '@/services/person.api';
import { useRouter } from 'next/router';
import Loader from '@/components/Loader/Loader';
import React from 'react';
import { persons } from '@/mock/persons';

const Person = () => {
  const router = useRouter();
  const pid = router.query.pid;
  const { data: person, isLoading } = useFetchOnePersonQuery(pid);
  const caughtPerson = person?.id ? person : persons[0];
  if (!caughtPerson) return <NotFoundPage />;

  return (
    <>
      <Head>
        <title>
          {person ? (i18next.language == 'en' ? person.fullNameEn : person.fullName) : ''}
        </title>
      </Head>
      {isLoading && <Loader />}
      {!isLoading && caughtPerson && <PersonInfo person={caughtPerson} />}
    </>
  );
};

export default Person;
