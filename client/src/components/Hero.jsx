import RetroGrid from '../design/RetroGrid';
import Section from './Section';
import Button from './Button';

const Hero = () => {
    return (
        <>

        <Section
        className="pt-[2rem] -mt-[5.25rem] md:pt-[7rem]"
        crosses
        crossesOffset="lg:translate-y-[5.25rem]"
        customPaddings
        id="hero"
        >

            <div className="relative flex flex-col h-full w-full max-w-[83rem] md:ml-16 items-center justify-center overflow-hidden rounded-lg bg-background p-20 md:shadow-xl">
                <h1 className="pointer-events-none z-10 whitespace-pre-wrap bg-gradient-to-b from-primary via-secondary to-tertiary bg-clip-text text-center text-7xl font-bold leading-none tracking-tighter text-transparent">
                    Collect Feedback 
                </h1>

                <p className="text-center text-lg mt-8 w-92">
                    Our intuitive feedback collection system helps you gather valuable insights from your customers, clients, and team members.
                </p>

                <Button white className="mt-6 hover:text-text" href="">
                    Submit Feedback
                </Button>

                <RetroGrid/>
            </div>


        </Section>
        </>
    )
}

export default Hero;