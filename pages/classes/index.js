import React from 'react';
import Head from 'next/head';
import axios from 'axios';

const getServerSideProps = async () => {
    const { data } = await axios.get('https://www.dnd5eapi.co/api/classes');

    return { props: { data } };
  }

export default function Classes({ data: { results } }) {
    return (
        <div>
            <Head>
                <title>Here Be Dragons</title>
                <meta name="description" content="A Dungeons and Dragons SRD Index" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <h1>Classes</h1>
                {results.map(({ name }) => (
                    <h3 key={`class-${name}`}>{name}</h3>
                ))}
            </main>
        </div>
    )
}
export { getServerSideProps }
