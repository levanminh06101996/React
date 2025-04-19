import useUser from "@/hooks/useUser";

function Home() {
  const user = useUser();

  return <div>{user && <p>Hi,{user.firstNam}</p>}</div>;
}

export default Home;
