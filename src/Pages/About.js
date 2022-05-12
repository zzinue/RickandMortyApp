import React from 'react'

function About() {
    return (
        <div class="card" style="width: 18rem;">
            <img src="https://aui.atlassian.com/aui/8.8/docs/images/avatar-person.svg" class="card-img-top" alt="..." />
            <div class="card-body">
                <h5 class="card-title">Victor Guerrrero</h5>
                <p class="card-text"> Desarrollador Full-stack</p>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Nodejs</li>
                <li class="list-group-item">Javascript Vanilla</li>
                <li class="list-group-item">HTML y CSS</li>
            </ul>
            <div class="card-body">
                <a href="#" class="card-link">Card link</a>
                <a href="#" class="card-link">Another link</a>
            </div>
        </div>
    )
}

export default About