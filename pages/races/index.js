import React from 'react';
import Head from 'next/head';
import axios from 'axios';

import { Title } from '../../components/styled/typography/title';

const getServerSideProps = async () => {
    const { data } = await axios.get('https://www.dnd5eapi.co/api/races');

    return { props: { data } };
  }

export default function Races({ data: { results } }) {
    return (
        <div>
            <Head>
                <title>Here Be Dragons</title>
                <meta name="description" content="A Dungeons and Dragons SRD Index" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <Title>Races</Title>
                {results.map(({ name }, index) => (
                    <h3 key={`races-${index}`}>{name}</h3>
                ))}
            </main>
        </div>
    )
}
export { getServerSideProps }
