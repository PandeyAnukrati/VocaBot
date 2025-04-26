import Link from "next/link"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { dummyInterviews } from "@/constants"
import InterviewCard from "@/components/InterviewCard" // assuming this is where it's defined

const Page = () => {
    return (
        <>
            <section className="card-cta">
                <div className="flex flex-col gap-6 max-w-lg">
                    <h2>Elevate your preparation with AI-guided mock sessions and insightful critique.</h2>
                    <p className="text-lg">
                        Simulate real interviews and refine your answers with instant AI insights.
                    </p>

                    <Button asChild className="btn-primary max-sm:w-full">
                        <Link href="/interview">Kick Off Your Interview</Link>
                    </Button>
                </div>

                <Image
                    src="/robot.png"
                    alt="robo-dude"
                    width={400}
                    height={400}
                    className="max-sm:hidden"
                />
            </section>

            <section className="flex flex-col gap-6 mt-8">
                <h2>Your Interviews</h2>
                <div className="interviews-section">
                    {dummyInterviews.map((interview) => (
                        <InterviewCard {...interview} key={interview.id} />
                    ))}
                </div>
            </section>

            <section className="flex flex-col gap-6 mt-8">
                <h2>Take Interviews</h2>
                <div className="interviews-section">
                    {dummyInterviews.map((interview) => (
                        <InterviewCard {...interview} key={interview.id} />
                    ))}
                </div>
            </section>
        </>
    )
}

export default Page
