import { Avatar, Box } from "@mui/material";


const About = () => {
    return (
        <div>
            <h1><code style={{color: 'var(--accent-color)'}}>{`<about_me />`}</code></h1>
            <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexWrap: 'wrap-reverse',
                // paddingLeft: '6rem',
                paddingTop: '1rem',
                paddingBottom: '1rem',
            }}>
                <Box sx={{ flex: '1 1 300px' }}>
                    <p>
                        Hello! I'm <span style={{color: "var(--accent-color)", fontWeight: 'bolder'}}>Gaurav Poona</span>, a recent <span style={{color: "var(--accent-color)", fontWeight: 'bolder'}}>Computer Science and Mathematics</span> graduate
                        from the <span style={{color: "var(--accent-color)", fontWeight: 'bolder'}}>University of Toronto</span>.
                        I've always been passionate about technology and solving complex problems, which led me to dive into <span style={{color: "var(--accent-color)", fontWeight: 'bolder'}}>full-stack development</span> and <span style={{color: "var(--accent-color)", fontWeight: 'bolder'}}>machine learning</span>.
                    </p>
                    <p>
                        Outside of coding, I enjoy playing football and video games. I'm a huge FC Barcelona fan, and I love watching or playing football in my free time.
                    </p>
                    <br />
                    <h2><code style={{color: 'var(--accent-color)'}}>{`<skills />`}</code></h2>
                    <p>
                        <span style={{color: "var(--accent-color)"}}>Languages:</span> Python, JavaScript, TypeScript, Java, C, SQL, HTML/CSS
                    </p>
                    <p>
                        <span style={{color: "var(--accent-color)"}}>Frameworks:</span> React, Node.js, Flask, Django, TensorFlow, Keras, PyTorch, OpenCV
                    </p>
                    <p>
                        <span style={{color: "var(--accent-color)"}}>Databases:</span> PostgreSQL, SQLite, Redis
                    </p>
                    <p>
                        <span style={{color: "var(--accent-color)"}}>Tools:</span> Git, Docker, AWS, Jira
                    </p>
                </Box>
                <Box sx={{ flex: '1 1 500px', minWidth: '50%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'start', marginBottom: '2rem' }}>
                    <Avatar src='me.webp' sx={{ height: '50%', width: '50%', objectFit: 'contain' }} alt="Gaurav Poona" />
                </Box>
            </Box>

        </div>
    );
}

export default About;