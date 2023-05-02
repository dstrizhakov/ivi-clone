import { PersonInfo } from '@/components/Person/Person';
import { nameToLink } from '@/helpers/nameToLink';
import { persons } from '@/mock/persons';
import { IPerson } from '@/types/types';
import NotFoundPage from '@/pages/404';

const Person = ({ person_data }) => {
  if (!person_data) return <NotFoundPage />;

  return (
    <>
      <PersonInfo person={person_data} />
    </>
  );
};

export default Person;

export async function getServerSideProps(context) {
  const person_data = persons.find((p: IPerson) => context.params.person === nameToLink(p.enName));
  return {
    props: {
      person_data: person_data,
    },
  };
}
