import React from 'react'

function Card({ username, role, location = 'Bengaluru', skills }) {
    // console.log(props);
    return (
        <>
            <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">

                <img className="w-24 h-24 rounded-full mx-auto" src="https://images.unsplash.com/profile-1446404465118-3a53b909cc82?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128&s=27a346c2362207494baa7b76f5d606e5" alt="" width="384" height="512" />

                <div className="pt-6 text-center space-y-4">

                    <blockquote>
                        <p className="text-lg font-medium">
                            “Tailwind CSS is the only framework that I've seen scale
                            on large teams. It’s easy to customize, adapts to any design,
                            and the build size is tiny.”
                        </p>
                    </blockquote>

                    <figcaption className="font-medium">
                        <div className="text-sky-500 dark:text-sky-400">
                            {username}
                        </div>
                        <div className="text-slate-700 dark:text-slate-500">
                            {role}, {location}
                        </div>
                    </figcaption>

                </div>

                <div>
                    <h2>Skills</h2>
                    <ul>
                        <li>{skills[0]}</li>
                        <li>{skills[1]}</li>
                        <li>{skills[2]}</li>
                        <li>{skills[3]}</li>
                    </ul>
                </div>

            </figure>
        </>
    )
}

export default Card
{/* < div >
            <img src="https://images.unsplash.com/profile-1446404465118-3a53b909cc82?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128&s=27a346c2362207494baa7b76f5d606e5" alt="" />

            <h1 className='text-2xl bg-green-500 p-3 rounded'>A card for photos</h1>

        </div > */}