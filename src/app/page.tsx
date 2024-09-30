import Image from "next/image";
import profile from "@/app/profile.jpeg"

export default function Home(){
  return(
    <div className="protfolio">
      <div className="about">
      <p>  Hello! This is <b>Asifa.</b> <br/>
  I am a student learning Next.js, excited to build fast and dynamic web applications.
 I'm focused on mastering server-side rendering and routing to create great user experiences.</p><br/>
 <p className="thank">Thank you!</p>

      </div>
      <div className="image">
    <Image className="image"  src={profile} height={1100} width={1100} alt="Profile" />
      </div>
    </div>
  )
}