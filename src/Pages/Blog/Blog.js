import React, { useState } from 'react';
import { Accordion } from 'react-bootstrap';
import toast, { Toaster } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import sa from '../../Images/saleh.png'

const Blog = () => {


    return (
        <div>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>How works JWT?</Accordion.Header>
                    <Accordion.Body>
                        JSON Web Token, is an open standard used to share security information between two parties — a client and a server.A JWT is a string made up of three parts, separated by dots (.), and serialized using base64. In the most common serialization format, compact serialization.PAYLOAD information is typically used by the server to verify that the user has permission to perform the action they are requesting.
                        The signature ensures that the token hasn’t been altered. The party that creates the JWT signs the header and payload with a secret that is known to both the issuer and receiver.
                        JWTs are used as a secure way to authenticate users and share information.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>
                        When should use Mongodb and When should use NodeJS?

                    </Accordion.Header>
                    <Accordion.Body>
                        <p className='text-xl font-medium'>USES OF MONGODB</p>
                        <p>MongoDB represents the data as a collection of documents rather than tables related by foreign keys. This makes it possible for the varied types of data dealt over the internet to be stored decently and accessed in the web applications using Node. js.NoSQL databases like MongoDB are a good choice when your data is document-centric and doesn't fit well into the schema of a relational database, when you need to accommodate massive scale, when you are rapidly prototyping, and a few other use cases.MongoDB has become a popular choice of a highly scalable database and it is currently being used as the backend data store</p>
                        <p className='text-xl font-medium'>USES OF NODEJS</p>
                        <p>NODE JS is an asynchronous event-driven JavaScript runtime, Node.js is designed to build scalable network applications.Node. js is primarily used for non-blocking, event-driven servers, due to its single-threaded nature. It's used for traditional web sites and back-end API services, but was designed with real-time, push-based architectures in mind.
                            <p>Backend for social media networking. </p>
                            <p>Single-page application.</p>
                            <p>Chat application.</p>

                            <p>Data streaming.</p>
                            <p>IoT application.</p>

                        </p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>
                        Diffrence between SQL and NoSQL
                    </Accordion.Header>
                    <Accordion.Body>
                        <p className='text-xl font-medium'>SQL DATABASE</p>
                        <p>RELATIONAL DATABASE MANAGEMENT SYSTEM RDBMS</p>
                        <p>These databases are best suited for complex queries</p>
                        <p>Vertically Scalable</p>
                        <p>SQL databases are better for multi-row transactions</p>
                        <p>SQL databases use structured query language and have a predefined schema.</p>
                        <p className='text-xl font-medium'>USES OF NODEJS</p>
                        <p>Non-relational or distributed database system</p>
                        <p> These databases are best suited for hierarchical data storage.</p>

                        <p>Horizontally scalable</p>

                        <p>NoSQL is better for unstructured data like documents or JSON.
                        </p>
                        <p>NoSQL databases have dynamic schemas for unstructured data.</p>


                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>
                        Diffrence between JS and NODEJS
                    </Accordion.Header>
                    <Accordion.Body>
                        <p className='text-xl font-medium'>JS</p>
                        <p>Javascript is a programming language that is used for writing scripts on the website. </p>
                        <p>These databases are best suited for complex queries</p>
                        <p>Javascript can only be run in the browsers.It is basically used on the client-side.</p>
                        <p>Javascript is used in frontend development.</p>
                        <p>It is the upgraded version of ECMA script that uses Chrome’s V8 engine written in C++.
                        </p>
                        <p className='text-xl font-medium'>NODEJS</p>
                        <p>We can run Javascript outside the browser with the help of NodeJS.</p>
                        <p> It is mostly used on the server-side.</p>

                        <p>We can run Javascript outside the browser with the help of NodeJS.</p>

                        <p>Nodejs is used in server-side development.
                        </p>
                        <p>Nodejs is written in C, C++ and Javascript.</p>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default Blog;