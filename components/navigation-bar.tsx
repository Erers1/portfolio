'use client';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
} from '@/components/ui/navigation-menu';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import { Frame, Languages, Toolbox } from "lucide-react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const NavigationBar = () => {
	const metadata = [
		[
			{name: "Javascript", level: 5, color: "#c0bd00", logo: "JS", desc: "Primary language, used daily"},
			{name: "TypeScript", level: 4, color: "#3178C6", logo: "TS", desc: "Strongly typed JS for scalable apps"},
			{name: "C++", level: 3, color: "#00599C", logo: "C++", desc: "Learned through university coursework"},
			{name: "Python", level: 3, color: "#3776AB", logo: "Py", desc: "Used for scripting & data tasks"},
			{name: "Java", level: 3, color: "#B07219", logo: "Java", desc: "OOP fundamentals & backend basics"},
		],
		[
			{name: "ExpressJS", level: 4, color: "#353535", logo: "Ex", desc: "Main framework for REST APIs"},
		    {name: "ReactJS", level: 3, color: "#20232a", logo: "Re", desc: "Building interactive web UIs"},
		    {name: "Spring Boot", level: 2, color: "#6DB33F", logo: "Sp", desc: "Java-based enterprise backend"},
		    {name: "FastAPI", level: 2, color: "#009688", logo: "FA", desc: "Fast Python API development"},
		],
		[
			{name: "HTML", level: 4, color: "#E34F26", logo: "HTML", desc: "Semantic markup & structure"},
		    {name: "CSS", level: 4, color: "#1572B6", logo: "CSS", desc: "Styling & responsive layouts"},
		    {name: "Git", level: 4, color: "#F05032", logo: "Git", desc: "Version control & collaboration"},
		    {name: "Docker", level: 3, color: "#2496ED", logo: "🐳", desc: "Containerizing apps & services"},
		    {name: "Postman", level: 4, color: "#FF6C37", logo: "PM", desc: "API testing & documentation"},
		    {name: "MySQL", level: 3, color: "#4479A1", logo: "SQL", desc: "Relational database management"},
		    {name: "MongoDB", level: 3, color: "#47A248", logo: "MDB", desc: "NoSQL document-based storage"},
		]
	]
	return (
		<div className='w-full min-h-20 flex justify-center items-center select-none relative'>
			<NavigationMenu className="min-w-max bg-white/11 rounded fixed p-2.5 select-none">
				<NavigationMenuList className="w-full gap-2.5">
					<NavigationMenuItem className="min-w-40 min-h-full flex justify-center items-center">
						<NavigationMenuLink href='/' className="w-full h-full text-2xl rounded text-white hover:text-black flex justify-center items-center">
							Home
						</NavigationMenuLink>
					</NavigationMenuItem>
					<NavigationMenuItem className="min-w-40 min-h-full flex justify-center items-center">
						<NavigationMenuLink href='/about' className=" w-full h-full text-2xl rounded text-white hover:text-black flex justify-center items-center">
							About
						</NavigationMenuLink>
					</NavigationMenuItem>
					<NavigationMenuItem className="min-w-40 min-h-full flex justify-center items-center">
						<DropdownMenu>
							<DropdownMenuTrigger className="w-full min-h-full p-2 rounded text-2xl text-white hover:text-black hover:bg-white cursor-pointer">
								Skills
							</DropdownMenuTrigger>
							<DropdownMenuContent className="min-w-40 mt-3">
								<DropdownMenuSub>
									<DropdownMenuSubTrigger className="flex gap-2.5 p-2.5">
										<Languages />
										<a href="/skills/languages">Languages</a>
									</DropdownMenuSubTrigger>
									<DropdownMenuPortal>
										<DropdownMenuSubContent className="ml-1.5">
											{metadata.at(0)?.map((elm, idx)=>{
												return (
													<DropdownMenuItem key={idx}>
														<HoverCard>
															<HoverCardTrigger>
																{elm.name}
															</HoverCardTrigger>
															<HoverCardContent className="flex flex-col gap-2.5">
																<h1 style={{color: elm.color}}>{elm.logo}</h1>
																<div className="w-full min-h-max flex gap-0.5">
																	<FontAwesomeIcon icon={faStar} className="w-5 h-5 text-sm" style={{color: elm.level >= 1? '#F5E559': '#000',}}/>
																	<FontAwesomeIcon icon={faStar} className="w-5 h-5 text-sm" style={{color: elm.level >= 2? '#F5E559': '#000',}}/>
																	<FontAwesomeIcon icon={faStar} className="w-5 h-5 text-sm" style={{color: elm.level >= 3? '#F5E559': '#000',}}/>
																	<FontAwesomeIcon icon={faStar} className="w-5 h-5 text-sm" style={{color: elm.level >= 4? '#F5E559': '#000',}}/>
																	<FontAwesomeIcon icon={faStar} className="w-5 h-5 text-sm" style={{color: elm.level >= 5? '#F5E559': '#000',}}/>
																</div>
																<p>{elm.desc}</p>
															</HoverCardContent>
														</HoverCard>
													</DropdownMenuItem>
												)
											})}
										</DropdownMenuSubContent>
									</DropdownMenuPortal>
								</DropdownMenuSub>
									<DropdownMenuSub>
									<DropdownMenuSubTrigger className="flex gap-2.5 p-2.5">
										<Frame />
										<a href="/skills/frameworks">Frameworks</a>
									</DropdownMenuSubTrigger>
									<DropdownMenuPortal>
										<DropdownMenuSubContent className="ml-1.5">
											{metadata.at(1)?.map((elm, idx)=>{
												return (
													<DropdownMenuItem key={idx}>
														<HoverCard>
															<HoverCardTrigger>
																{elm.name}
															</HoverCardTrigger>
															<HoverCardContent className="flex flex-col gap-2.5">
																<h1 style={{color: elm.color}}>{elm.logo}</h1>
																<div className="w-full min-h-max flex gap-0.5">
																	<FontAwesomeIcon icon={faStar} className="w-5 h-5 text-sm" style={{color: elm.level >= 1? '#F5E559': '#000',}}/>
																	<FontAwesomeIcon icon={faStar} className="w-5 h-5 text-sm" style={{color: elm.level >= 2? '#F5E559': '#000',}}/>
																	<FontAwesomeIcon icon={faStar} className="w-5 h-5 text-sm" style={{color: elm.level >= 3? '#F5E559': '#000',}}/>
																	<FontAwesomeIcon icon={faStar} className="w-5 h-5 text-sm" style={{color: elm.level >= 4? '#F5E559': '#000',}}/>
																	<FontAwesomeIcon icon={faStar} className="w-5 h-5 text-sm" style={{color: elm.level >= 5? '#F5E559': '#000',}}/>
																</div>
																<p>{elm.desc}</p>
															</HoverCardContent>
														</HoverCard>
													</DropdownMenuItem>
												)
											})}
										</DropdownMenuSubContent>
									</DropdownMenuPortal>
								</DropdownMenuSub>
								<DropdownMenuSub>
									<DropdownMenuSubTrigger className="flex gap-2.5 p-2.5">
										<Toolbox />
										<a href="/skills/tools">Tools</a>
									</DropdownMenuSubTrigger>
									<DropdownMenuPortal>
										<DropdownMenuSubContent className="ml-1.5">
											{metadata.at(2)?.map((elm, idx)=>{
												return (
													<DropdownMenuItem key={idx}>
														<HoverCard>
															<HoverCardTrigger>
																{elm.name}
															</HoverCardTrigger>
															<HoverCardContent className="flex flex-col gap-2.5">
																<h1 style={{color: elm.color}}>{elm.logo}</h1>
																<div className="w-full min-h-max flex gap-0.5">
																	<FontAwesomeIcon icon={faStar} className="w-5 h-5 text-sm" style={{color: elm.level >= 1? '#F5E559': '#000',}}/>
																	<FontAwesomeIcon icon={faStar} className="w-5 h-5 text-sm" style={{color: elm.level >= 2? '#F5E559': '#000',}}/>
																	<FontAwesomeIcon icon={faStar} className="w-5 h-5 text-sm" style={{color: elm.level >= 3? '#F5E559': '#000',}}/>
																	<FontAwesomeIcon icon={faStar} className="w-5 h-5 text-sm" style={{color: elm.level >= 4? '#F5E559': '#000',}}/>
																	<FontAwesomeIcon icon={faStar} className="w-5 h-5 text-sm" style={{color: elm.level >= 5? '#F5E559': '#000',}}/>
																</div>
																<p>{elm.desc}</p>
															</HoverCardContent>
														</HoverCard>
													</DropdownMenuItem>
												)
											})}
										</DropdownMenuSubContent>
									</DropdownMenuPortal>
								</DropdownMenuSub>
							</DropdownMenuContent>
						</DropdownMenu>
					</NavigationMenuItem>
					<NavigationMenuItem className="max-w-40 min-h-full flex justify-center items-center">
						<NavigationMenuLink href='/projects' className="w-full h-full text-2xl rounded text-white hover:text-black flex justify-center items-center">
							Projects
						</NavigationMenuLink>
					</NavigationMenuItem>
				</NavigationMenuList>
			</NavigationMenu>
		</div>
	);
};

export default NavigationBar;
