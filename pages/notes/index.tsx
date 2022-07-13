import { NextPage, GetStaticProps, InferGetStaticPropsType } from "next";
import { TypeNote } from "types";
import { getNotes } from "lib/contentful";
import Link from "next/link";

type StaticProps = {
  data: TypeNote;
};

export const getStaticProps: GetStaticProps = async (context) => {
  const data = await getNotes({ limit: 20, skip: 0 });

  return {
    props: {
      data,
    },
  };
};

const Notes: NextPage = ({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  console.log(data);
  return (
    <div>
      <main>
        <div className="max-w-screen-lg grid grid-rows-1 gap-4 m-auto">
          {data.map((note: TypeNote) => (
            <div
              key={note.sys.id}
              className="border-b-2 mb-4 p-4 cursor-pointer"
            >
              <Link href={`/notes/${note.fields.slug}`}>
                <h2 className="text-2xl font-serif">{note.fields.title}</h2>
              </Link>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Notes;
