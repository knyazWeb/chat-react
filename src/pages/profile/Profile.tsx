import ProfileMainCard from "@/components/profile/profileMainCard/ProfileMainCard"
import TopBar from "@/components/topBar/TopBar"





const Profile = () => {
  return (
    <div className="pt-[70px] flex flex-col items-center justify-start">
      <TopBar>Profile and Settings</TopBar>
      <ProfileMainCard />
      </div>
  )
}

export default Profile