// change vimal to your Vdev.in username
const url = 'https://vdev-in.herokuapp.com/user/vimal';

const name = document.getElementById('name')
const bio = document.getElementById('bio')
const skills = document.getElementById('skill')
const projects = document.getElementById('project')
const achievements = document.getElementById('achievement')
const socials = document.getElementById('social')



fetch(url)
.then(Response => {return Response.json();})
.then(data => {
    console.log(data);
    name.innerHTML=`${data.displayName}`
    bio.innerHTML=`${data.userdata_id.bio}`

    // showing skills
    data.userdata_id.skills.map(skill =>{
        const skilldiv = document.createElement('div')
        skills.appendChild(skilldiv)
        skilldiv.innerHTML= `${skill}`
    })

    // showing projects
    data.userdata_id.Projects.map(Project =>{
        const Projectdiv = document.createElement('div')
        projects.appendChild(Projectdiv)
        const projecth4 = document.createElement('h4')
        Projectdiv.appendChild(projecth4)
        const projectp = document.createElement('p')
        Projectdiv.appendChild(projectp)
        const projecta = document.createElement('a')
        Projectdiv.appendChild(projecta)
        projecth4.innerHTML= `${Project.ProjectName}`
        projectp.innerHTML= `${Project.ProjectDetails}`
        projecta.href= Project.ProjectLink
        projecta.innerHTML = `<i class="fas fa-globe-asia"></i>`
    })

    // showing achievement
    data.userdata_id.Achievements.map(Achievement =>{
        const Achievementdiv = document.createElement('div')
        achievements.appendChild(Achievementdiv)
        const Achievementh4 = document.createElement('h4')
        Achievementdiv.appendChild(Achievementh4)
        const Achievementp = document.createElement('p')
        Achievementdiv.appendChild(Achievementp)
        const Achivementa = document.createElement('a')
        Achievementdiv.appendChild(Achivementa)
        Achievementh4.innerHTML= `${Achievement.AchievementName}`
        Achievementp.innerHTML= `${Achievement.AchievementDetails}`
        Achivementa.href= Achievement.AchievementLink
        Achivementa.innerHTML = `<i class="fas fa-globe-asia"></i>`
    })

    //showing social media links
    data.userdata_id.social.map(sm =>{
        const smdiv = document.createElement('div')
        socials.appendChild(smdiv)
        const sma = document.createElement('a')
        smdiv.appendChild(sma)
        sma.innerHTML= `${sm.smName} <i class="fas fa-globe-asia"></i>`
        sma.href= sm.smLink
    })
})
.catch(err => console.log(err));

