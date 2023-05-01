import { PersonInfo } from '@/components/Person/Person';
import { nameToLink } from '@/helpers/nameToLink';
import { persons } from '@/mock/persons';
import { IPerson } from '@/types/types';
import { useRouter } from 'next/router';
import NotFoundPage from '@/pages/404';

const Person = () => {
  const router = useRouter();
  const person = persons.find((p: IPerson) => {
    if (router.asPath === `/person/${nameToLink(p.enName)}`) return <PersonInfo person={p} />;
  });
  if (!person) return <NotFoundPage />;

  return (
    <>
      <PersonInfo person={person} />
    </>
  );
};

export default Person;
