import { Layout, Hero, Error, GrayButton, BlueButton } from '../components/ux'


export async function getStaticProps() {
  const auth = true
  const error = {
    image: "/images/undraw_fixing_bugs_w7gi.svg",
    title: "Generic error",
    message: "Everybody make mistakes... Although I am not actually a person =\\"
  }
  return {
    props: {
      error: null,
      auth: auth
    }
  }
}


export default function Index({ error, auth }) {
  if (error) {
    return <Error image={error.image} title={error.title} message={error.message} />
  }
  return (
    <Layout>
      <Hero image="/images/undraw_investment_data_re_sh9x.svg" title="THE BUDGET" text="Define your goals and keep track of incomes and expenses through budgeting periods.">
        <BlueButton text="Sign up" href="#"/>        
        <GrayButton text="Sign in" href="/home" />
      </Hero>
    </Layout>
  )
}