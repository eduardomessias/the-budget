import { Layout, Header, HeaderNav, HeaderNavLink, Error } from '../components/ux'


export async function getStaticProps() {
    const error = {
        image: "/images/undraw_fixing_bugs_w7gi.svg",
        title: "Generic error",
        message: "Everybody make mistakes... Although I am not actually a person =\\"
    }
    return {
        props: {
            error: null
        }
    }
}


export default function Home({ error, auth }) {
    if (error) {
        return <Error image={error.image} title={error.title} message={error.message} />
    }
    return (
        <Layout>
            <Header>
                <HeaderNav>
                    <HeaderNavLink caption="Budgets" link="/budget" />
                    <HeaderNavLink caption="Goals" link="/goal" />
                </HeaderNav>
            </Header>
        </Layout>
    )
}