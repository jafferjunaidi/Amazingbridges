import React from 'react'
import Footer from '../components/Footer'

const Queries = () => {
  return (
    <>
    
    <div className="container  ">
        <h1 className="text-center mt-5 " data-aos="fade-up" data-aos-duration="1000">Queries</h1>
        <p className="text-center" data-aos="fade-up" data-aos-duration="1000">Curious about bridges? You're in the right place. Below are answers to some common
            questions about bridges, spanning from their history to engineering marvels.</p>
    </div>
    <div className="container">
        <div className="accordion" id="accordionExample" data-aos="fade-up" data-aos-duration="1000">
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                        What is a bridge?
                    </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        A bridge is a structure built to span physical obstacles without closing the way underneath,
                        such as a body of water, valley, or road, though the transition does limit overflow.
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        What are the different types of bridges?
                    </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        Bridges come in various forms, including beam bridges, arch bridges, suspension bridges,
                        cable-stayed bridges, and truss bridges, each with its unique design and engineering principles.
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        What are some famous bridges around the world?
                    </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        There are numerous iconic bridges worldwide, such as the Golden Gate Bridge in San Francisco,
                        Tower Bridge in London, Brooklyn Bridge in New York City, and the Akashi Kaikyō Bridge in Japan,
                        to name a few.
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapsefour" aria-expanded="false" aria-controls="collapseThree">
                        How are bridges constructed?
                    </button>
                </h2>
                <div id="collapsefour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        Bridge construction involves meticulous planning, design, and engineering. It typically includes
                        site preparation, foundation construction, erection of support structures, assembly of bridge
                        components, and final finishing.
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapsefive" aria-expanded="false" aria-controls="collapseThree">
                        What factors determine the lifespan of a bridge?
                    </button>
                </h2>
                <div id="collapsefive" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        Several factors influence a bridge's lifespan, including materials used, design quality,
                        environmental conditions, maintenance efforts, and traffic loads.
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapsesix" aria-expanded="false" aria-controls="collapseThree">
                        Can I visit or tour famous bridges?
                    </button>
                </h2>
                <div id="collapsesix" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        Many famous bridges offer guided tours or have visitor centers where you can learn about their
                        history, construction, and significance. Check with local authorities or bridge operators for
                        tour availability.
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapseseven" aria-expanded="false" aria-controls="collapseThree">
                        What are the main components of a bridge?
                    </button>
                </h2>
                <div id="collapseseven" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        Bridges typically consist of several key components, including the superstructure (deck,
                        girders, trusses), substructure (piers, abutments), foundation, and various structural elements.
                        Each component plays a vital role in the bridge's stability and functionality.
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapseeight" aria-expanded="false" aria-controls="collapseThree">
                        How are bridge designs chosen?
                    </button>
                </h2>
                <div id="collapseeight" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        Bridge designs are chosen based on factors such as the location, span length, traffic volume,
                        environmental conditions, budget constraints, and aesthetic preferences. Engineers assess these
                        factors to determine the most suitable design for a particular bridge project.
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapsenine" aria-expanded="false" aria-controls="collapseThree">
                        What are the environmental impacts of bridge construction?
                    </button>
                </h2>
                <div id="collapsenine" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        Bridge construction can have environmental impacts, including habitat disruption, water
                        pollution, and carbon emissions. However, many modern bridge projects incorporate sustainable
                        design practices and environmental mitigation measures to minimize their ecological footprint.
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapseten" aria-expanded="false" aria-controls="collapseThree">
                        Are there any famous bridge disasters in history?
                    </button>
                </h2>
                <div id="collapseten" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        Unfortunately, there have been notable bridge disasters throughout history, resulting from
                        various factors such as design flaws, natural disasters, and structural failures. Studying these
                        incidents helps engineers learn from past mistakes and improve bridge safety standards.
                    </div>
                </div>
            </div>

        </div>
    </div>
    
    <Footer/>
    </>
  )
}

export default Queries