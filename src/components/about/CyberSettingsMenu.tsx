export default function CyberSettingsMenu() {
    return (
        <div className="mx-auto max-w-5xl space-y-8 px-4 pb-20 md:space-y-12 md:pb-24">
            <section className="border-b border-[var(--border-dim)] py-8 text-center md:py-12">
                <h2 className="mb-4 text-3xl font-black tracking-tighter text-white uppercase sm:text-4xl">
                    Our <span className="text-[var(--cyber-yellow)]">Mission</span>
                </h2>
                <p className="mx-auto max-w-3xl text-base leading-relaxed text-[var(--text-muted)] sm:text-lg">
                    We are a student-run video game development club that gives students a hands-on way to make games and learn
                    more about the industry. Through workshops, guest speakers, regular meetings, and collaborative projects, we
                    help members build practical skills, meet collaborators across disciplines, and grow as developers. Students
                    and creators from programming, art, design, writing, music, and other disciplines are welcome.
                </p>
            </section>

            <section className="border-b border-[var(--border-dim)] py-8 text-center md:py-12">
                <h2 className="mb-4 text-3xl font-black tracking-tighter text-white uppercase sm:text-4xl">
                    How It <span className="text-[var(--brand)]">Works</span>
                </h2>
                <p className="mx-auto max-w-3xl text-base leading-relaxed text-[var(--text-muted)] sm:text-lg">
                    Members can take part in Project Teams and the Learning Community depending on their interests and experience
                    level. Project Teams are led by experienced members and bring multiple disciplines together to design and
                    develop original games, while the Learning Community offers workshops, skill building, and a supportive place
                    to experiment before joining a team.
                </p>
            </section>

            <section className="py-8 text-center md:py-12">
                <h2 className="mb-4 text-3xl font-black tracking-tighter text-white uppercase sm:text-4xl">
                    Join <span className="text-[var(--cyber-blue)]">Us</span>
                </h2>
                <p className="mx-auto max-w-3xl text-base leading-relaxed text-[var(--text-muted)] sm:text-lg">
                    Interested in joining or partnering with UBC Game Dev? We welcome students from different disciplines and
                    experience levels. Follow our social media and join our Discord.
                </p>
            </section>
        </div>
    );
}