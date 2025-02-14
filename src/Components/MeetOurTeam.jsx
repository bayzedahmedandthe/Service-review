
const MeetOurTeam = () => {
    return (
        <div className="my-12 w-11/12 mx-auto">
            <h1 className="text-2xl font-semibold py-10">Meet Our Team</h1>
            <div
                className="hero "
                style={{
                    backgroundImage: "url(https://img.freepik.com/free-photo/close-up-two-young-colleagues-shaking-hands_171337-7433.jpg?ga=GA1.1.2013737696.1733366875&semt=ais_hybrid)",
                }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-[700px] my-24">
                        <h1 className="my-5 text-5xl font-bold">Our Dedicated Team</h1>
                        <p className="mb-5">
                        Behind every great review is a team of passionate individuals. Here’s a closer look at the amazing people who make it all happen.
                        Every great service has a story, and ours starts with our people. Discover the team that’s here to serve you with dedication and care.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MeetOurTeam;