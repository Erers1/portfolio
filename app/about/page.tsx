import { Button } from "@/components/ui/button"; 
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { GitBranchIcon } from 'lucide-react'

const AboutPage = () => {
	return (
		<section className="w-full min-h-[calc(100vh-80px)] text-white flex justify-center items-center flex-col p-5">
            <div className="w-full h-full flex justify-start items-center gap-20 pl-25">
                <img src="/cv2-removebg-preview.png" alt="pic1" width={400} height={500} className="rounded p-2.5"/>
                <div className="w-120 h-full flex flex-col gap-2.5">
                    <div className="w-full h-[70%] text-2xl flex flex-col justify-center items-start">
                        <h1 className="w-120 flex g-5 justify-between">Name: <p className="w-70">Đặng Võ Thiên Khanh</p></h1><br />
                        <h1 className="w-120 flex g-5 justify-between">University: <p className="w-70">Open University</p></h1><br />
                        <h1 className="w-120 flex g-5 justify-between">Job Title: <p className="w-70">Backend Developer</p></h1><br />
                        <h1 className="w-120 flex g-5 justify-between">Career Goal: <p className="w-70">Đặng Võ Thiên Khanh</p></h1>
                    </div>
                    <div className="w-full h-[10%] flex justify-evenly items-center gap-5">
                        <DropdownMenu>
                            <DropdownMenuTrigger className='w-30 h-13.75 text-black rounded select-none bg-white text-2xl hover:bg-black hover:text-white'>
                                Contact
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <DropdownMenuGroup>
                                    <DropdownMenuItem className="flex gap-2.5">
                                        <GitBranchIcon />Github
                                    </DropdownMenuItem>
                                    <DropdownMenuItem className="flex gap-2.5">
                                        <FontAwesomeIcon icon={faFacebook} className="text-[0.96rem] p-0"/>
                                        Facebook
                                    </DropdownMenuItem>
                                    <DropdownMenuItem className="flex gap-2.5">
                                        <FontAwesomeIcon icon={faEnvelope} className="text-[0.96rem] p-0"/>
                                        Gmail
                                    </DropdownMenuItem>
                                </DropdownMenuGroup>
                            </DropdownMenuContent>
                        </DropdownMenu>
                        <Button size="lg" className="w-30 h-13.75 text-black rounded select-none bg-white flex justify-center items-center hover:text-white cursor-pointer"><a className="w-full h-full text-2xl flex justify-center items-center" href="/">Home</a></Button>
                    </div>
                </div>
            </div>
		</section>
	);
};

export default AboutPage;
