import React from 'react';
import { Row, Col } from 'react-bootstrap';

const Blogs = () => {
    return (
        <Row>
            <Col md={12} className="mt-5 mb-5 pm-5">
                <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            What is Context Api
                        </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <p>Context Api is a React Api that can solve a lot of problems that modern applications face.
                            Context Api is the way to create global variable.It can be used to share data with multiple components, without pass data through props manually.                            It is the alternative to "prop drilling".Using React. createContext, we can create Context Api.
                            </p>
                        </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            What is semantic tag ?
                        </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                        Semantic tag in HTML are those that clearly describe their meaning in a human- and machine-readable way.The are many advantages of using semantics tags in HTML: <br />
                        1.The pages made with semantic elements are much easier to read. <br />
                        2. It offers a better user experience. <br />
                        3. The semantic HTML tags help the search engines and other user devices to determine the importance and context of web pages. <br />
                         </div>
                        </div>
                    </div>
                </div>
            </Col>
        </Row>
    );
};

export default Blogs;