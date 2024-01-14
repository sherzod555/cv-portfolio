import EduListDots from "../../assets/eduhat.svg"

export const Education = () => {

    const mockDataEdu = [
        {
          UniverName: "The state secondary school specialised in foreign languages under the Ministry of Public education",
          date: "2010-2015",
        },
        {
          UniverName: "Academic Lyceum under Islamic University",
          FacultyName: "Exact Sciences",
          date: "2015-2018",
        },
        {
          UniverName: "Course in Pre-Foundation Studies at WIUT",
          FacultyName: "Basics of English for Academic Purposes",
          date: "2016-2018",
        },
        {
          UniverName: "Course in Pre-Foundation Studies at WIUT",
          FacultyName: "Basics of Quantitative Skills",
          date: "2017-2018",
        },
        {
          UniverName: "Westminster International University in Tashkent",
          FacultyName: "Certificate in International Foundation Studies (CIFS)",
          date: "2018-2019",
        },
        {
          UniverName: "Westminster International University in Tashkent",
          FacultyName: "Business Information Systems",
          date: "2019-2024",
        },
        {
          UniverName: "Najot Ta'lim",
          FacultyName: "Frontend ReactJS (Standard)",
          date: "2022-2023",
        },
        {
          UniverName: "Bobir Akilkhanov tech academy",
          FacultyName: "CGI - Motion Design",
          date: "2024-Present",
        },
      ];
    return (
        <>
            <main className="bg-blue-100">

                <div className="container mx-auto w-[1300px]">

                    <div className="py-8">
                        <h2 className="text-3xl font-bold">Education</h2>



                        <div className="flex flex-col">

                            {mockDataEdu.map((data, index) => (
                                <div key={index} className="flex items-start justify-between text-xl py-7 border-gray-400 border-b-2">
                                    <div className="flex items-start gap-x-4">
                                        <img className="h-7" src={EduListDots} alt="list-dots" />
                                        <div className="max-w-[1000px]">
                                            <p>{data.UniverName}</p>
                                            <p className="text-base text-gray-500 pt-1">{data.FacultyName}</p>
                                        </div>
                                    </div>
                                    <p>{data.date}</p>
                                </div>
                            ))}
                        </div>

                    </div>

                </div>

            </main>
        </>
    );
};

export default Education