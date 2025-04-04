import Profile from "./components/Profile";

export default function App() {
  return (
    <div className="app">
      <Profile
        avatar = "https://randomuser.me/api/portraits/men/75.jpg"
        name="Renan Sousa"
        bio="Full-stack javascript developer at Acme Inc."
        email="renan@gmail.com"
        phone="+5511987654321"
        githubUrl="https://github.com"
        linkedinUrl="https://linkedin.com"
        twitterUrl="https://twitter.com"
      />
    </div>
  )
}