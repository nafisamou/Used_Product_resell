import React from 'react';
import { Link } from 'react-router-dom';

const Article = () => {
    return (
        <div className="p-5 mx-auto sm:p-10 md:p-16 b text-gray-100 ">
	<div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
		<img src="https://images.unsplash.com/photo-1594848398416-e7940ec7cff8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDA1fHxwaG9uZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" className="object-cover object-fit  lg:h-auto lg:w-auto " />
		<div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md bg-gray-900">
			<div className="space-y-2">
				<Link rel="noopener noreferrer" href="#" className="inline-block text-2xl font-semibold sm:text-3xl">The Best Activewear from the Nordstrom Anniversary Sale</Link>
				<p className="text-xs text-gray-400">By
					<Link rel="noopener noreferrer" href="/" className="text-xs hover:underline">Leroy Jenkins</Link>
				</p>
			</div>
			<div className="text-gray-100">
				<p>Insert the actual text content here...</p>
			</div>
		</div>
	</div>
</div>
    );
};

export default Article;