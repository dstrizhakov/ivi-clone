import { PersonInfo } from '@/components/Person/Person';
import { persons } from '@/mock/persons';
import { IPerson } from '@/types/types';
import { useRouter } from 'next/router';

const Person = () => {
  const router = useRouter();

  return (
    <>
      {persons.map((p: IPerson) => {
        const name = p.enName.toLowerCase().split(' ').join('-');
        if (router.asPath === `/person/${name}`) return <PersonInfo person={p} />;
      })}
    </>
  );
};

export default Person;
