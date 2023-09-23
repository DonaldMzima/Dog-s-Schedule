import { useSignOut } from '@nhost/nextjs'

const Layout = ({ children = null }) => {
  const { signOut } = useSignOut()

  const menuItems = [
    //..
    {
      label: 'Logout',
      onClick: signOut,
      //   icon: LogoutIcon,
    },
  ]

  //...
}
