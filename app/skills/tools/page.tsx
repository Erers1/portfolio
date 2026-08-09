import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/components/ui/carousel';
import {
	Card,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const ToolsPage = () => {
	const tools = [
		{
			name: 'HTML',
			level: 4,
			color: '#E34F26',
			logo: 'HTML',
			desc: 'Semantic markup & structure',
		},
		{
			name: 'CSS',
			level: 4,
			color: '#1572B6',
			logo: 'CSS',
			desc: 'Styling & responsive layouts',
		},
		{
			name: 'Git',
			level: 4,
			color: '#F05032',
			logo: 'Git',
			desc: 'Version control & collaboration',
		},
		{
			name: 'Docker',
			level: 3,
			color: '#2496ED',
			logo: '🐳',
			desc: 'Containerizing apps & services',
		},
		{
			name: 'Postman',
			level: 4,
			color: '#FF6C37',
			logo: 'PM',
			desc: 'API testing & documentation',
		},
		{
			name: 'MySQL',
			level: 3,
			color: '#4479A1',
			logo: 'SQL',
			desc: 'Relational database management',
		},
		{
			name: 'MongoDB',
			level: 3,
			color: '#47A248',
			logo: 'MDB',
			desc: 'NoSQL document-based storage',
		},
	];
	return (
		<section className="w-full min-h-[calc(100vh-80px)] text-white flex justify-center items-center">
			<div className="w-250 h-[75%] flex justify-center items-center gap-10 flex-col overflow-auto scrollbar-none relative">
				<h1 className="w-full text-5xl text-center uppercase">Tools</h1>
				<Carousel
					opts={{ align: 'start' }}
					className="w-full h-full flex justify-between items-center p2.5">
					<CarouselContent>
						{tools.map((element, idx) => {
							return (
								<CarouselItem
									key={idx}
									className="h-full basis-1/1 flex justify-center items-center">
									<Card className="w-120 h-60 rounded relative shrink-0 select-none">
										<CardHeader>
											<CardTitle>
												{element.name}
											</CardTitle>
											<CardDescription>
												{element.desc}
											</CardDescription>
										</CardHeader>
										<CardFooter>
											<div className="w-full min-h-max flex gap-0.5">
												<FontAwesomeIcon
													icon={faStar}
													className="w-5 h-5 text-sm"
													style={{
														color:
															element.level >= 1
																? '#F5E559'
																: '#000',
													}}
												/>
												<FontAwesomeIcon
													icon={faStar}
													className="w-5 h-5 text-sm"
													style={{
														color:
															element.level >= 2
																? '#F5E559'
																: '#000',
													}}
												/>
												<FontAwesomeIcon
													icon={faStar}
													className="w-5 h-5 text-sm"
													style={{
														color:
															element.level >= 3
																? '#F5E559'
																: '#000',
													}}
												/>
												<FontAwesomeIcon
													icon={faStar}
													className="w-5 h-5 text-sm"
													style={{
														color:
															element.level >= 4
																? '#F5E559'
																: '#000',
													}}
												/>
												<FontAwesomeIcon
													icon={faStar}
													className="w-5 h-5 text-sm"
													style={{
														color:
															element.level >= 5
																? '#F5E559'
																: '#000',
													}}
												/>
											</div>
											<h1
												className="text-9xl absolute -bottom-4 right-0 font-bold"
												style={{
													color: element.color,
												}}>
												{element.logo}
											</h1>
										</CardFooter>
									</Card>
								</CarouselItem>
							);
						})}
					</CarouselContent>
					<CarouselPrevious
						variant="outline"
						className="absolute left-0 cursor-pointer rounded-[50%]"
					/>
					<CarouselNext
						variant="outline"
						className="absolute right-0 cursor-pointer rounded-[50%]"
					/>
				</Carousel>
			</div>
		</section>
	);
};

export default ToolsPage;
