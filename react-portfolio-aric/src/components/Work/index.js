import React from 'react';

function Work(props) {
    const {name, projectImg, liveLink, repoLink} = props;

    return (
        <div href={liveLink} target="_blank">
            <img src={projectImg} alt={name}></img>
            <div>
                <div>
                    <a
                        href={liveLink}
                        target='_blank'
                        rel='noreferrer'>{name}</a>
                    <a href={repoLink}
                        target='_blank'
                        rel='noreferrer'>
                            GitHub Repo
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Work;