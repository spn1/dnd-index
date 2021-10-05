import Head from 'next/head'
import axios from 'axios';

import { Heading } from '../components/heading/heading';

export default function Home({ data }) {
  return (
    <div>
      <Head>
        <title>Here Be Dragons</title>
        <meta name="description" content="A Dungeons and Dragons SRD Index" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Heading>Here Be Dragons</Heading>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mi ipsum faucibus vitae aliquet nec ullamcorper. Massa eget egestas purus viverra accumsan in nisl. Viverra adipiscing at in tellus integer. Consequat ac felis donec et odio pellentesque diam volutpat. Viverra justo nec ultrices dui sapien eget mi proin. Sagittis aliquam malesuada bibendum arcu vitae. Egestas pretium aenean pharetra magna. Sed egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium. Ut porttitor leo a diam sollicitudin tempor id eu nisl. Pharetra et ultrices neque ornare aenean euismod elementum. Sagittis eu volutpat odio facilisis mauris sit amet massa. Netus et malesuada fames ac.
        </p>
        <p>
          Massa eget egestas purus viverra accumsan. Consectetur adipiscing elit ut aliquam purus sit. Aliquet bibendum enim facilisis gravida neque convallis a cras. Eget lorem dolor sed viverra ipsum nunc aliquet bibendum. Non sodales neque sodales ut etiam sit. Ac odio tempor orci dapibus ultrices in. Aliquet enim tortor at auctor urna nunc id. Arcu non sodales neque sodales ut etiam. Dui sapien eget mi proin sed libero enim sed faucibus. Hendrerit gravida rutrum quisque non tellus orci ac auctor augue. Mauris ultrices eros in cursus. Lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt.
        </p>
        <h2>Subtitle</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mi ipsum faucibus vitae aliquet nec ullamcorper. Massa eget egestas purus viverra accumsan in nisl. Viverra adipiscing at in tellus integer. Consequat ac felis donec et odio pellentesque diam volutpat. Viverra justo nec ultrices dui sapien eget mi proin. Sagittis aliquam malesuada bibendum arcu vitae. Egestas pretium aenean pharetra magna. Sed egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium. Ut porttitor leo a diam sollicitudin tempor id eu nisl. Pharetra et ultrices neque ornare aenean euismod elementum. Sagittis eu volutpat odio facilisis mauris sit amet massa. Netus et malesuada fames ac.
        </p>
        <p>
          Massa eget egestas purus viverra accumsan. Consectetur adipiscing elit ut aliquam purus sit. Aliquet bibendum enim facilisis gravida neque convallis a cras. Eget lorem dolor sed viverra ipsum nunc aliquet bibendum. Non sodales neque sodales ut etiam sit. Ac odio tempor orci dapibus ultrices in. Aliquet enim tortor at auctor urna nunc id. Arcu non sodales neque sodales ut etiam. Dui sapien eget mi proin sed libero enim sed faucibus. Hendrerit gravida rutrum quisque non tellus orci ac auctor augue. Mauris ultrices eros in cursus. Lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mi ipsum faucibus vitae aliquet nec ullamcorper. Massa eget egestas purus viverra accumsan in nisl. Viverra adipiscing at in tellus integer. Consequat ac felis donec et odio pellentesque diam volutpat. Viverra justo nec ultrices dui sapien eget mi proin. Sagittis aliquam malesuada bibendum arcu vitae. Egestas pretium aenean pharetra magna. Sed egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium. Ut porttitor leo a diam sollicitudin tempor id eu nisl. Pharetra et ultrices neque ornare aenean euismod elementum. Sagittis eu volutpat odio facilisis mauris sit amet massa. Netus et malesuada fames ac.
        </p>
        <p>
          Massa eget egestas purus viverra accumsan. Consectetur adipiscing elit ut aliquam purus sit. Aliquet bibendum enim facilisis gravida neque convallis a cras. Eget lorem dolor sed viverra ipsum nunc aliquet bibendum. Non sodales neque sodales ut etiam sit. Ac odio tempor orci dapibus ultrices in. Aliquet enim tortor at auctor urna nunc id. Arcu non sodales neque sodales ut etiam. Dui sapien eget mi proin sed libero enim sed faucibus. Hendrerit gravida rutrum quisque non tellus orci ac auctor augue. Mauris ultrices eros in cursus. Lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt.
        </p>
      </main>
    </div>
  )
}
