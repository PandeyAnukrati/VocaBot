import React from 'react'
import AuthForm from "@/components/AuthForm";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { dummyInterviews } from "@/constants";
import InterviewCard from "@/components/InterviewCard";

const Page = () => {
    return (
        <>
            <section className="card-cta">
                <div className='flex flex-col gap-6 max-w-lg'>
                    <h2>AI-powered mock interviews with instant insights</h2>
                    <p className='text-lg'>
                        Engage in realistic interview scenarios with instant AI reviews
                    </p>
                    <Button asChild className='btn-primary max-sm:w-full'>
                        <Link href='/interview'>Kick Off Your Interview</Link>
                    </Button>
                </div>

                <Image src='/robot.png' alt="robo-dude" width={400} height={400} className='max-sm:hidden' />
            </section>

            {/* ✅ Updated section to fix layout */}
            <section className='flex flex-col gap-6 mt-8'>
                <h2>Your Interviews</h2>

                <div className='flex flex-wrap gap-4'>
                    {dummyInterviews.map((interview) => (
                        <InterviewCard {...interview} key={interview.id} />
                    ))}
                </div>
            </section>

            <section className='flex flex-col gap-6 mt-8'>
                <h2>Take an Interview</h2>

                <div className='flex flex-wrap gap-4'>
                    {dummyInterviews.map((interview) => (
                        <InterviewCard {...interview} key={interview.id} />
                    ))}
                </div>
            </section>
        </>
    );
};

export default Page;
