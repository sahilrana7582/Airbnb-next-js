import { Button } from "@/components/ui/button";
import { initialProfile } from "@/lib/intialProfile";
import { redirect } from "next/navigation";

const Home = async () => {

  const profile = await initialProfile();
  console.log(profile);


  redirect('/home')
  return (
    <div className="flex items-center justify-center h-screen">
      <Button>Hello</Button>
    </div>
  )
}

export default Home;