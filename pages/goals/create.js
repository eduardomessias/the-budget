import Layout from '../../components/layout'
import Header from '../../components/header'
import HeaderNav from '../../components/headerNav'
import HeaderButton from '../../components/headerButton'
import ActionPane from '../../components/actionPane'
import FormCreateGoal from '../../components/formCreateGoal'


export default function CreateGoal() {
  function cancelCreation() {
    window.location = '/goals'
  }
  return (
    <Layout>
      <Header>
        <HeaderNav>
          {/* <HeaderNavLink caption="First link" /> */}
        </HeaderNav>
        <HeaderButton onClickHandler={cancelCreation} text="Cancel"/>
      </Header>
      <ActionPane>
        <FormCreateGoal />
      </ActionPane>
    </Layout>
  )
}