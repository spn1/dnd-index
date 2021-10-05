import React from 'react';
import Head from 'next/head';
import axios from 'axios';

import { Heading } from '../../components/styled/typography/heading';

const getServerSideProps = async () => {
    const { data } = await axios.get('https://www.dnd5eapi.co/api/monsters');

    return { props: { data } };
  }

export default function Monsters({ data }) {
    const { results } = data;
    return (
        <div>
            <Head>
                <title>Here Be Dragons</title>
                <meta name="description" content="A Dungeons and Dragons SRD Index" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <Heading>Monsters</Heading>
                {results.map(({ name }, index) => (
                    <h3 key={`monster-${index}`}>{name}</h3>
                ))}
            </main>
        </div>
    )
}
export { getServerSideProps }
