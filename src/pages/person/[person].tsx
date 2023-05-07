import { PersonInfo } from '@/components/Person/Person';
import { nameToLink } from '@/helpers/nameToLink';
import { persons } from '@/mock/persons';
import { IPerson } from '@/types/types';
import { useRouter } from 'next/router';

const Person = () => {
  const router = useRouter();

  return (
    <>
      {persons.map((p: IPerson) => {
        if (router.asPath === `/person/${nameToLink(p.enName)}`) return <PersonInfo person={p} />;
      })}
    </>
  );
};

export default Person;
