import { Htag } from "@/components/Htag/Htag";
import { P } from "@/components/P/P";

const Person = () => {
  return (
    <div>
      <Htag tag={'h1'}>Это страница актера</Htag>
      <P size={'L'}>http://localhost:3000/person/123</P>
    </div>
  );
};

export default Person;
