import React, { useEffect, useState } from 'react'
import '../Profile/style.css'
import Account from '../../components/Account'
import { useSelector } from 'react-redux'
// import { useDispatch } from 'react-redux'
// import { getProfileInfo } from '../../App/services/callApi'
import { EditForm } from '../../components/EditForm'
import { useProfileMutation } from '../../App/services/api.services'

const Profile = () => {
  // const dispatch = useDispatch()

  const [show, setShow] = useState(false)

  const userToken = useSelector((state) => state.auth.token)
  const userInfos = useSelector((state) => state.user.infos)
  const { firstName, lastName, userName } = userInfos 

  // useEffect(() => {
  //   setTimeout(() => {
  //     dispatch(getProfileInfo(userToken))
  //   }, 2000)
  // }, [dispatch, userToken])

  const handleEditForm = () => {
    setShow(!show)
  }
  const [profile, {isLoading}] = useProfileMutation()

  useEffect(() => {
    try {
      profile(userToken)
    } catch (error) {
      console.error(error)
    }
  }, [profile, userToken])

  if(isLoading) {
    return <div>...en cours de chargement</div>
  }

  return (
    <main className='main bg-dark'>
      <div className='main-header'>
        <h1>Welcome back <br />{firstName} {lastName}</h1>
        <button className='edit-button' onClick={handleEditForm}>Edit Name</button>
        {show &&
          (
            <EditForm 
              userName={userName}
              firstName={firstName}
              lastName={lastName}
              setShow={handleEditForm}
            />
          ) 
        }
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