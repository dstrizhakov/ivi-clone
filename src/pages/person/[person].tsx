import { PersonInfo } from '@/components/Person/Person';
import { nameToLink } from '@/helpers/nameToLink';
import { persons } from '@/mock/persons';
import { IPerson } from '@/types/types';
import NotFoundPage from '@/pages/404';
import Head from 'next/head';

const Person = ({ person }) => {
  if (!person) return <NotFoundPage />;

  return (
    <>
      <Head>
        <title>{person.name}</title>
      </Head>
      <PersonInfo person={person} />
    </>
  );
};

export default Person;

export async function getServerSideProps(context) {
  const person =
    persons.find((p: IPerson) => context.params.person === nameToLink(p.enName)) || null;
  return {
    props: {
      person: person,
    },
  };
}
