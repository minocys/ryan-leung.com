import type {
  NextPage,
  GetStaticProps,
  GetStaticPaths,
  InferGetStaticPropsType,
} from "next";
import { getNote, getNoteSlugs } from "lib/contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { TypeNote } from "types";

type StaticPaths = {
  slug: string;
};

export const getStaticPaths: GetStaticPaths<StaticPaths> = async (context) => {
  const notes = await getNoteSlugs({ limit: 10 });
  return {
    paths: notes.map((note) => ({
      params: { slug: note.fields.slug },
    })),
    fallback: true,
  };
};

type StaticProps = {
  data: TypeNote;
};

export const getStaticProps: GetStaticProps<StaticProps> = async (context) => {
  const { slug } = context.params;

  const data = await getNote(slug);

  return {
    props: {
      data,
    },
  };
};

const Note: NextPage = ({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const {
    fields: { title, body },
  } = data;

  return (
    <div className="max-w-screen-lg flex justify-center align-center m-auto">
      <main>
        <div className="grow">
          <div className="py-10">
            <h1 className="text-3xl font-bold font-sans">{title}</h1>
          </div>
          <div className="text-lg font-serif">
            {documentToReactComponents(body)}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Note;
