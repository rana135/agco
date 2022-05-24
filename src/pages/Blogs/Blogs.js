import React from 'react';

const Blogs = () => {
    return (
        <div class="accordion accordion-flush" id="accordionFlushExample">
            <div class="accordion-item border-t-0 border-l-0 border-r-0 rounded-none bg-white border border-gray-200">
                <h2 class="accordion-header mb-0" id="flush-headingOne">
                    <button class="accordion-button
    relative
    flex
    items-center
    w-full
    py-4
    px-5
    text-base text-gray-800 text-left
    bg-white
    border-0
    rounded-none
    transition
    focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne"
                        aria-expanded="false" aria-controls="flush-collapseOne">
                        How will you improve the performance of a React Application?
                    </button>
                </h2>
                <div id="flush-collapseOne" class="accordion-collapse border-0 collapse show"
                    aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body py-4 px-5">
                        <li>Keeping component state local where necessary.</li>
                        <li>Memoizing React components to prevent unnecessary re-renders.</li>
                        <li>Code-splitting in React using dynamic import()</li>
                        <li>Windowing or list virtualization in React.</li>
                        <li>Lazy loading images in React.</li>

                    </div>
                </div>
            </div>
            <div class="accordion-item border-l-0 border-r-0 rounded-none bg-white border border-gray-200">
                <h2 class="accordion-header mb-0" id="flush-headingTwo">
                    <button class="accordion-button
    collapsed
    relative
    flex
    items-center
    w-full
    py-4
    px-5
    text-base text-gray-800 text-left
    bg-white
    border-0
    rounded-none
    transition
    focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo"
                        aria-expanded="false" aria-controls="flush-collapseTwo">
                        What are the different ways to manage a state in a React application?
                    </button>
                </h2>
                <div id="flush-collapseTwo" class="accordion-collapse border-0 collapse" aria-labelledby="flush-headingTwo"
                    data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body py-4 px-5">
                        <li>Local state.</li>
                        <li>Global state.</li>
                        <li>Server state.</li>
                        <li>URL state.</li>
                    </div>
                </div>
            </div>
            <div class="accordion-item border-l-0 border-r-0 border-b-0 rounded-none bg-white border border-gray-200">
                <h2 class="accordion-header mb-0" id="flush-headingThree">
                    <button class="accordion-button
    collapsed
    relative
    flex
    items-center
    w-full
    py-4
    px-5
    text-base text-gray-800 text-left
    bg-white
    border-0
    rounded-none
    transition
    focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree"
                        aria-expanded="false" aria-controls="flush-collapseThree">
                        How does prototypical inheritance work?
                    </button>
                </h2>
                <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree"
                    data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body py-4 px-5">
                    Prototype-based programming is a style of object-oriented programming in which behaviour reuse (known as inheritance) is performed via a process of reusing existing objects that serve as prototypes. This model can also be known as prototypal, prototype-oriented, classless, or instance-based programming.
                    </div>
                </div>
            </div>
            <div class="accordion-item border-l-0 border-r-0 border-b-0 rounded-none bg-white border border-gray-200">
                <h2 class="accordion-header mb-0" id="flush-headingThree">
                    <button class="accordion-button
    collapsed
    relative
    flex
    items-center
    w-full
    py-4
    px-5
    text-base text-gray-800 text-left
    bg-white
    border-0
    rounded-none
    transition
    focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree"
                        aria-expanded="false" aria-controls="flush-collapseThree">
                        What is a unit test? Why should write unit tests?
                    </button>
                </h2>
                <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree"
                    data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body py-4 px-5">
                    Unit tests are typically automated tests written and run by software developers to ensure that a section of an application (known as the "unit") meets its design and behaves as intended. In procedural programming, a unit could be an entire module, but it is more commonly an individual function or procedure.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;