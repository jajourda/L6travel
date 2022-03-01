import Head from 'next/head'
import { getDataFromSheets } from "./api/sheets";
import ListCard from '../components/ListCard';
import Hero from '../components/Hero';
import HomeBanner from '../components/HomeBanner';

export default function Home(props: any) {

  return (
    <div className="flex w-full min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center text-center bg-teal">

        <Hero />
        <HomeBanner trailerTotal={props.data.length} priceCap='$36000' />

        <div>
          <ul>
            {props.data && props.data.length ? (
              props.data.map((trailer: any) => {
                var array = trailer.photos.split(',');
                return (

                  <ListCard
                    key={trailer.modelNumber}
                    modelName={trailer.modelName}
                    modelNumber={trailer.modelNumber}
                    make={trailer.make}
                    modelYear={trailer.modelYear}
                    link={trailer.link}
                    photo={'https://raw.githubusercontent.com/jajourda/L6travellivingfiles/main/' + array[0]}
                    modelType={trailer.modelType} />

                )
              })
            ) : (
              <li>Error: do not forget to setup your env variables 👇</li>
            )}
          </ul>
        </div>
        <div>



        </div>
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t">
        <a
          className="flex items-center justify-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className="ml-2 h-4" />
        </a>
      </footer>
    </div>
  )
}

export async function getStaticProps(context: any) {
  let c = context;
  console.log(c)
  const sheet = await getDataFromSheets();
  return {
    props: {
      data: sheet.slice(1, sheet.length), // remove sheet header
    },
    revalidate: 1, // In seconds
  };
}