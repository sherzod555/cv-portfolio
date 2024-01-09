import EduListDots from "../../assets/eduhat.svg"

export const Education = () => {
    return (
        <>
            <main className="bg-blue-100">

                <div className="container mx-auto w-[1300px]">

                    <div className="py-8">
                        <h2 className="text-3xl font-bold">Education</h2>



                        <div className="flex flex-col">

                            {/* should be mapped from here */}
                            <div className="flex items-start justify-between text-xl py-10 border-gray-400 border-b-2">

                                <div className="flex items-start gap-x-4">
                                    <img className="h-7" src={EduListDots} alt="list-dots" />
                                    <div className="max-w-[1000px]">
                                        <p className="">
                                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque magni voluptatem consequuntur laborum voluptate necessitatibus placeat consequatur dignissimos repellat qui!
                                        </p>
                                        <p className="text-base text-gray-500">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto obcaecati laborum fugit veniam quos saepe.
                                        </p>
                                    </div>
                                </div>
                                <p>
                                    2010-2015
                                </p>
                            </div>

                            <div className="flex items-start justify-between text-xl py-10 border-gray-400 border-b-2">

                                <div className="flex items-start gap-x-4">
                                    <img className="h-7" src={EduListDots} alt="list-dots" />
                                    <div className="max-w-[1000px]">
                                        <p className="">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, atque.                                        </p>
                                        <p className="text-base text-gray-500">
                                            Lorem ipsum dolor sit amet.
                                        </p>
                                    </div>
                                </div>
                                <p>
                                    2010-2015
                                </p>
                            </div>

                            <div className="flex items-start justify-between text-xl py-10 border-gray-400 border-b-2">

                                <div className="flex items-start gap-x-4">
                                    <img className="h-7" src={EduListDots} alt="list-dots" />
                                    <div className="max-w-[1000px]">
                                        <p className="">
                                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque magni voluptatem consequuntur laborum voluptate necessitatibus placeat consequatur dignissimos repellat qui!
                                        </p>
                                        <p className="text-base text-gray-500">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto obcaecati laborum fugit veniam quos saepe.
                                        </p>
                                    </div>
                                </div>
                                <p>
                                    2010-2015
                                </p>
                            </div>

                            <div className="flex items-start justify-between text-xl py-10 border-gray-400 border-b-2">

                                <div className="flex items-start gap-x-4">
                                    <img className="h-7" src={EduListDots} alt="list-dots" />
                                    <div className="max-w-[1000px]">
                                        <p className="">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis odit blanditiis ipsum saepe voluptatibus at eius quis iste quas numquam! Voluptatum dolorem perspiciatis magnam deserunt ea exercitationem, suscipit nemo et!
                                        </p>
                                        <p className="text-base text-gray-500">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto obcaecati laborum fugit veniam quos saepe.
                                        </p>
                                    </div>
                                </div>
                                <p>
                                    2010-present
                                </p>
                            </div>

                            <div className="flex items-start justify-between text-xl py-10 border-gray-400 border-b-2">

                                <div className="flex items-start gap-x-4">
                                    <img className="h-7" src={EduListDots} alt="list-dots" />
                                    <div className="max-w-[1000px]">
                                        <p className="">
                                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque magni voluptatem consequuntur laborum voluptate necessitatibus placeat consequatur dignissimos repellat qui!
                                        </p>
                                        <p className="text-base text-gray-500">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto obcaecati laborum fugit veniam quos saepe.
                                        </p>
                                    </div>
                                </div>
                                <p>
                                    2010-2015
                                </p>
                            </div>

                            <div className="flex items-start justify-between text-xl py-10 border-gray-400 border-b-2">

                                <div className="flex items-start gap-x-4">
                                    <img className="h-7" src={EduListDots} alt="list-dots" />
                                    <div className="max-w-[1000px]">
                                        <p className="">
                                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus doloribus saepe tempore quo sapiente ratione.
                                        </p>
                                        <p className="text-base text-gray-500">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, quibusdam, culpa quasi eaque excepturi nemo pariatur reiciendis, molestias aliquid voluptatibus mollitia illo minima expedita temporibus?                                        </p>
                                    </div>
                                </div>
                                <p>
                                    2010-2015
                                </p>
                            </div>
                            {/* should be mapped till here */}
                        </div>

                    </div>

                </div>

            </main>
        </>
    );
};

export default Education