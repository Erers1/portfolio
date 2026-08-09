'use client'

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowRight, BookA, FolderKanban, Frame, House, Info, Ruler, Phone, GitBranch } from "lucide-react"
import { Avatar, AvatarImage, AvatarFallback, AvatarBadge } from "@/components/ui/avatar"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faGithub, faFacebook, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const AppSideBar = () => {
    const { toggleSidebar, open } = useSidebar()

  return (
    <Sidebar collapsible="icon" variant="sidebar">
        <SidebarHeader className="w-full min-h-max flex justify-center items-end">
            <Button className="w-7 h-7 bg-white text-black cursor-pointer" onClick={toggleSidebar}>
                {open === true ? <ArrowLeft /> : <ArrowRight />}
            </Button>
        </SidebarHeader>
        <SidebarContent className="flex justify-center">
            <SidebarGroup className="flex gap-2.5"> 
                <SidebarGroupLabel className="p-5 text-[1rem]">Controls</SidebarGroupLabel>
                <SidebarMenu>
                    <SidebarMenuButton className="text-xl">
                        <a href="/" className="h-full w-full flex justify-start gap-2.5 items-center">
                            <House/>
                            Home
                        </a>
                    </SidebarMenuButton>
                </SidebarMenu>
                <SidebarMenu>
                    <SidebarMenuButton className="text-xl">
                        <a href="/about" className="h-full w-full flex justify-start gap-2.5 items-center">
                            <Info />
                            About
                        </a>
                    </SidebarMenuButton>
                </SidebarMenu>
                <hr />
                <SidebarGroupLabel className="p-5 text-[1rem]">Skills</SidebarGroupLabel>
                <SidebarMenu className="flex justify-center">
                    <SidebarMenuItem>
                        <SidebarMenuButton className="text-xl">
                            <a href="/skills/languages" className="h-full w-full flex justify-start gap-2.5 items-center">
                                <BookA />
                                Languages
                            </a>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                        <SidebarMenuButton className="text-xl">
                            <a href="/skills/frameworks" className="h-full w-full flex justify-start gap-2.5 items-center">
                                <Frame />
                                Frameworks
                            </a>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                        <SidebarMenuButton className="text-xl">
                            <a href="/skills/tools" className="h-full w-full flex justify-start gap-2.5 items-center">
                                <Ruler />
                                Tools
                            </a>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
                <hr />
                <SidebarMenu>
                    <SidebarMenuButton className="text-xl">
                        <a href="/projects" className="h-full w-full flex justify-start gap-2.5 items-center">
                            <FolderKanban />
                            Projects
                        </a>
                    </SidebarMenuButton>
                </SidebarMenu>
                <hr />
                <SidebarGroupLabel className="p-5 text-[1rem]">
                    Contacts
                </SidebarGroupLabel>
                <SidebarMenu>
                    <SidebarMenuButton className="text-xl">
                        <Phone />
                        Phone
                    </SidebarMenuButton>
                    <SidebarMenuButton className="text-xl">
                        <FontAwesomeIcon icon={faEnvelope} className="text-[0.96rem] p-0"/>
                        Gmail
                    </SidebarMenuButton>
                    <SidebarMenuButton className="text-xl">
                        <FontAwesomeIcon icon={faGithub} className="text-[0.96rem] p-0"/>
                        Github
                    </SidebarMenuButton>
                    <SidebarMenuButton className="text-xl">
                        <FontAwesomeIcon icon={faFacebook} className="text-[0.96rem] p-0"/>
                        Facebook
                    </SidebarMenuButton>
                    <SidebarMenuButton className="text-xl">
                        <FontAwesomeIcon icon={faLinkedin} className="text-[0.96rem] p-0"/>
                        Linkedin
                    </SidebarMenuButton>
                </SidebarMenu>
            </SidebarGroup>
        </SidebarContent>
        <SidebarFooter className="w-full h-20 flex flex-row gap-2.5 items-center">
            <Avatar>
                <AvatarImage />
                <AvatarFallback>KĐ</AvatarFallback>
                <AvatarBadge className="bg-green-400" />
            </Avatar>
            {open && <h1>Khanh Dang</h1>}
        </SidebarFooter>
    </Sidebar>
  )
}

export default AppSideBar