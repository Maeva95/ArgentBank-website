import React from 'react'
import '../Profile/style.css'
import Account from '../../components/Account'
import { useSelector,  useDispatch } from 'react-redux'
import { getProfileInfo } from '../../App/services/callApi'

const Profile = () => {
  const dispatch = useDispatch()
  const userInfos = useSelector((state) => state.user)
  const tokenStorage = localStorage.getItem('token')
  if (tokenStorage) {
    try {
      dispatch(getProfileInfo(tokenStorage))
    } catch (error) {
      console.log(`une erreur s'est produit${error}`)
    }
    
  }
  // useEffect(() => {
  //   const tokenStorage = JSON.parse(localStorage.getItem('token'))
  //   console.log(tokenStorage)
  //   dispatch(getProfileInfo(tokenStorage))
  // }, [dispatch])
  
  return (
    <main className='main bg-dark'>
      <div className='main-header'>
        <h1>Welcome back <br />{userInfos?.firstName} {userInfos?.lastName}</h1>
        <button className='edit-button'>Edit Name</button>
      </div>
      <h2 className='sr-only'>Accounts</h2>
      <Account
        title={`Argent Bank Checking (x8349)`}
        account={`$2,082.79`}
        description={`Available Balance`}
      />
      <Account
        title={`Argent Bank Savings (x6712)`}
        account={`$10,928.42`}
        description={`Available Balance`}
      />
      <Account
        title={`Argent Bank Credit Card (x8349)`}
        account={`$184.30`}
        description={`Current Balance`}
      />
    </main>
  )
}

export default Profile