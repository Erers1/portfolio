import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar } from "@fortawesome/free-solid-svg-icons"

const LanguagesPage = () => {
  const languages = [
    {name: "Javascript", level: 5, color: "#c0bd00", logo: "JS", desc: "Primary language, used daily"},
    {name: "TypeScript", level: 4, color: "#3178C6", logo: "TS", desc: "Strongly typed JS for scalable apps"},
    {name: "C++", level: 3, color: "#00599C", logo: "C++", desc: "Learned through university coursework"},
    {name: "Python", level: 3, color: "#3776AB", logo: "Py", desc: "Used for scripting & data tasks"},
    {name: "Java", level: 3, color: "#B07219", logo: "Java", desc: "OOP fundamentals & backend basics"},
  ]
	return (
		<section className="w-full min-h-[calc(100vh-80px)] text-white flex justify-center items-center">
      <div className="w-250 h-[75%] flex justify-center items-center gap-10 flex-col overflow-auto scrollbar-none relative">
        <h1 className="w-full text-5xl text-center uppercase">Languages</h1>
        <Carousel opts={{align: "start"}} className="w-full h-full flex justify-between items-center p2.5">
          <CarouselContent>
            {languages.map((element, idx)=>{
              return (
                <CarouselItem key={idx} className="h-full basis-1/1 flex justify-center items-center">
                  <Card className="w-120 h-60 rounded relative shrink-0 select-none">
                    <CardHeader>
                      <CardTitle>{element.name}</CardTitle>
                      <CardDescription>{element.desc}</CardDescription>
                    </CardHeader>
                    <CardFooter>
                      <div className="w-full min-h-max flex gap-0.5">
                        <FontAwesomeIcon icon={faStar} className="w-5 h-5 text-sm" style={{color: element.level>=1 ? "#F5E559" : "#000"}}/>
                        <FontAwesomeIcon icon={faStar} className="w-5 h-5 text-sm" style={{color: element.level>=2 ? "#F5E559" : "#000"}}/>
                        <FontAwesomeIcon icon={faStar} className="w-5 h-5 text-sm" style={{color: element.level>=3 ? "#F5E559" : "#000"}}/>
                        <FontAwesomeIcon icon={faStar} className="w-5 h-5 text-sm" style={{color: element.level>=4 ? "#F5E559" : "#000"}}/>
                        <FontAwesomeIcon icon={faStar} className="w-5 h-5 text-sm" style={{color: element.level>=5 ? "#F5E559" : "#000"}}/>
                      </div>
                      <h1 className="text-9xl absolute -bottom-4 right-0 font-bold" style={{color: element.color}}>{element.logo}</h1>
                    </CardFooter>
                  </Card>
                </CarouselItem>
              )
            })}
          </CarouselContent>
          <CarouselPrevious variant="outline" className="absolute left-0 cursor-pointer rounded-[50%]"/>
          <CarouselNext variant="outline" className="absolute right-0 cursor-pointer rounded-[50%]"/>
        </Carousel>
      </div>
		</section>
	);
};

export default LanguagesPage;
