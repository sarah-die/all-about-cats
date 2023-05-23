import Layout from "@/components/Layout";
import Head from "next/head";
import { SquareSlider } from "@/components/SquareSlider/SquareSlider";

export default function Gallery() {
  return (
    <Layout>
      <Head>
        <title>Gallerie</title>
      </Head>
      <div className="text-container">
        <div className="title">This is some title</div>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
          amet, consectetur cum debitis dolor ducimus enim fugit id incidunt,
          maiores mollitia natus quas quia temporibus voluptate. At blanditiis
          numquam quae! Lorem ipsum dolor sit amet, consectetur adipisicing
          elit. A animi aspernatur beatae cum dolores enim exercitationem hic
          inventore ipsa iure laudantium magni maxime, nam officiis, perferendis
          quaerat quam quia repellendus repudiandae sapiente sint suscipit
          tempora temporibus ut velit veritatis voluptatibus. Alias architecto
          asperiores blanditiis corporis culpa debitis dignissimos distinctio
          doloribus error eveniet expedita fuga itaque laboriosam laborum,
          maiores nisi provident quas quidem quos, saepe sint sunt tempora
          temporibus voluptas voluptatem. Ab, aliquid blanditiis delectus enim
          expedita ipsum iusto labore necessitatibus nisi numquam ratione
          repellendus suscipit, unde. Adipisci asperiores blanditiis doloremque
          esse et, id praesentium quo repellat sint temporibus velit!
        </div>
      </div>
      <SquareSlider />
      <SquareSlider />
    </Layout>
  );
}
