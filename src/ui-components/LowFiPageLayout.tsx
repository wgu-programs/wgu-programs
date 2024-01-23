import Xblock from './Xblock.tsx';

// Define the prop types using an interface
interface LowFiPageLayoutProps {
	title: string;
	description: string;
	XBlocks: string[];
}

export const LowFiPageLayout: React.FC<LowFiPageLayoutProps> = ({
	title,
	description,
	XBlocks,
}) => {
	return (
		<>
			<div className='not-content w-60 flex flex-col items-start gap-4'>
				<div className='flex flex-col w-60 items-start relative bg-[#f4f9fb] rounded overflow-hidden shadow-drop-shadow-100'>
					<div className='relative self-stretch w-full h-4 bg-[#003057]' />
					<div className='flex w-full h-80 items-start p-2 gap-2 relative self-stretch '>
						<div className='relative w-16 h-full bg-[#ebf2f6] rounded' />
						<div className='flex relative flex-1 flex-col h-full self-stretch grow bg-primary-0 gap-4 p-4 rounded'>
							{XBlocks.map((type, index) => (
								<Xblock key={index} type={type} />
							))}
						</div>
					</div>
				</div>

				<h3 className='text-base font-semibold leading-6 text-gray-900'>
					{title}
				</h3>
				<p className='max-w-4xl text-sm text-gray-500'>{description}</p>
			</div>
		</>
	);
};
