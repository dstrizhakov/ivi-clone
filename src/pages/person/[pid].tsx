import { PersonInfo } from '@/components/Person/Person';
import NotFoundPage from '@/pages/404';
import Head from 'next/head';
import i18next from 'i18next';
import { useFetchOnePersonQuery } from '@/services/person.api';
import { useRouter } from 'next/router';

const Person = () => {
  const router = useRouter();
  const pid = router.query.pid;
  const { data: person, isLoading, error } = useFetchOnePersonQuery(pid);
  if (error) return <NotFoundPage />;
  if (isLoading) return <div>Loading..</div>;

  return (
    <>
      <Head>
        <title>{person ? (i18next.language == 'en' ? person.enName : person.name) : ''}</title>
      </Head>
      <PersonInfo person={person} />
    </>
  );
};

export default Person;
