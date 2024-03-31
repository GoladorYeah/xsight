import HeadingColor from "@/components/ui/HeadingColor";
import Heading2 from "@/components/ui/Heading2";
import {useTranslations} from "next-intl";
import {Link} from "@/navigation";
import Image from "next/image";

export default function Team() {

    const t = useTranslations('Pages.OurTeam.team');

    interface Person {
        image: string;
        name: string;
        profession: string;
        description: string;
        link: string;
    }

    const personData: Person[] = [
        {
            image: '/team/team-1.jpg',
            name: t('card-1.name'),
            profession: t('card-1.prof'),
            description: t('card-1.text'),
            link: 'https://www.linkedin.com/in/yaroslav-p-a7197421/'
        },
        {
            image: '/team/team-2.jpg',
            name: t('card-2.name'),
            profession: t('card-2.prof'),
            description: t('card-2.text'),
            link: 'https://www.linkedin.com/in/svitlana-skrypka-0b24171ba/'
        },
        {
            image: '/team/team-3.jpg',
            name: t('card-3.name'),
            profession: t('card-3.prof'),
            description: t('card-3.text'),
            link: 'https://www.linkedin.com/in/bilyialex/'
        },
        {
            image: '/team/team-4.jpg',
            name: t('card-4.name'),
            profession: t('card-4.prof'),
            description: t('card-4.text'),
            link: 'https://www.linkedin.com/in/albert-hilber-b8a105/'
        },
        {
            image: '/team/team-5.jpg',
            name: t('card-5.name'),
            profession: t('card-5.prof'),
            description: t('card-5.text'),
            link: 'https://www.linkedin.com/in/christophe-walch-9b94383/'
        },
        {
            image: '/team/team-6.jpg',
            name: t('card-6.name'),
            profession: t('card-6.prof'),
            description: t('card-6.text'),
            link: 'https://www.linkedin.com/in/danischmutz/'
        },
        {
            image: '/team/team-7.jpg',
            name: t('card-7.name'),
            profession: t('card-7.prof'),
            description: t('card-7.text'),
            link: 'https://www.linkedin.com/in/matthias-von-arx-5a4a5985/'
        },
        {
            image: '/team/team-8.jpg',
            name: t('card-8.name'),
            profession: t('card-8.prof'),
            description: t('card-8.text'),
            link: 'https://www.linkedin.com/in/christianulmer/'
        },

    ];

    return (
        <section className="max-w-screen-xl px-3 py-16 md:py-24 mx-auto relative text-center">
            <div className="mb-32 flex flex-col items-center">
                <HeadingColor>
                    {t('color-title')}
                </HeadingColor>

                <Heading2>
                    {t('title')}
                </Heading2>
                <div className="border border-orange-500/50 mb-4 w-1/3"></div>
                <p className="text-balance text-sm  lg:text-lg">
                    {t('text')}
                </p>
            </div>


            <div className="grid gap-x-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-12">
                {personData.map((person: Person) => (
                    <div key={person.name} className="mb-24">
                        <div
                            className="block h-full rounded-lg bg-gray-200/75 shadow-lg">
                            <div className="flex justify-center">
                                <div className="flex justify-center -mt-[75px]">
                                    <Image src={person.image}
                                           className="mx-auto rounded-full shadow-lg w-[150px]"
                                           alt="Avatar" width={150} height={150}/>
                                </div>
                            </div>
                            <div className="flex flex-col justify-between items-center p-6">
                                <h5 className="mb-1  text-lg font-bold">{person.name}</h5>
                                <p className="mb-4 text-gray-700">{person.profession}</p>
                                <div className="border border-orange-500/50 mb-4 w-1/3"></div>
                                <p className="mb-4 text-balance text-gray-500">
                                    {person.description}
                                </p>

                                <Link href={person.link} target="_blank"
                                      className="px-2 flex justify-center ">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                         className="h-3.5 w-3.5 text-primary dark:text-primary-400">
                                        <path fill="currentColor"
                                              d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}

            </div>
        </section>
    )
}