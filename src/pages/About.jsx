function About() {
    return (
        <>
            <h1 className='text-6xl mb-4'>Github Finder</h1>
            <p className='mb-4 text-2xl font-light'>
                A React app to search GitHub profiles and see profile details. This
                project is part of the
                <a href='https://github.com/AdrianKolev/github-finder/tree/master/src'>
                    {' '}
                    my react training skills
                </a>{' '}
                Udemy course by
                <strong>
                    <a href='https://www.linkedin.com/in/adrkolev/'> Adrian Kolev</a>
                </strong>
                .
            </p>
            <p className='text-lg text-gray-400'>
                Version <span className='text-white'>1.0.0</span>
            </p>
            <p className='text-lg text-gray-400'>
                Layout By:
                <a className='text-white' href='https://www.linkedin.com/in/adrkolev/'>
                    Adrian Kolev
                </a>
            </p>
        </>
    )
}

export default About
