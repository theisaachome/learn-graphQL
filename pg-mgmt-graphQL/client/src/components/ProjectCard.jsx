import React from 'react'
import { Link } from 'react-router-dom'

const ProjectCard = ({project}) => {
  return (
    <div className='col-md-4'>
        <div className="card mb-3">
            <div className="card-body">
                <div className="d-flex justify-content-between align-content-center">
                    <h5 className='card-title'>{project.name}</h5>
                    {/* <a 
                    className='' 
                    href={`/projects/${project.id}`}>View
                    </a> */}
                    <Link to={`/projects/${project.id}`}>View</Link>
                </div>
                <p className='small'>
                  Status:  <strong>{project.status}</strong>
                </p>
            </div>
        </div>
    </div>
  )
}

export default ProjectCard