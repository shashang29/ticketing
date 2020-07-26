import Link from "next/link"
import SearchBox from "../components/SearchBox/SearchBox"

const LandingPage = ({ currentUser }) => {
  return <SearchBox />
}

LandingPage.getInitialProps = async (context, client, currentUser) => {
  // const { data } = await client.get("/api/tickets")
}

export default LandingPage
