import React, { useEffect, useState } from 'react'
import '../Profile/style.css'
import Account from '../../components/Account'
import { useSelector } from 'react-redux'
import { EditForm } from '../../components/EditForm'
import { useProfileMutation } from '../../App/services/api.services'
import { userInfos } from '../../App/selectors'


const Profile = () => {
  const [show, setShow] = useState(false)
  const user = useSelector(userInfos)
  const { firstName, lastName } = user 

  const [profile, {isLoading}] = useProfileMutation()

  useEffect(() => {
    try {
      profile()
    } catch (error) {
      console.error(error)
    }
  }, [profile])

  if(isLoading) {
    return <div>...en cours de chargement</div>
  }

  const handleEditForm = () => {
    setShow(!show)
  }

  return (
    <main className='main bg-dark'>
      <div className='main-header'>
        {show ?
          (
            <EditForm 
              fieldUserName={user.userName}
              firstName={firstName}
              lastName={lastName}
              setShow={handleEditForm}
              onClick = {setShow}
            />
          ) : (
            <>
              <h1>Welcome back <br />{firstName} {lastName}</h1>
              <button className='edit-button' onClick={handleEditForm}>Edit Name</button>    
            </>
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