import useUser from "@/hooks/useUser";

function Home() {
  const user = useUser();

  return <div>{user && <p>Hi,{user.username}</p>}</div>;
}

export default Home;


