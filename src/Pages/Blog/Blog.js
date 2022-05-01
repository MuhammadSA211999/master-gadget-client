import React, { useState } from 'react';
import { Accordion } from 'react-bootstrap';
import toast, { Toaster } from 'react-hot-toast';

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

                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default Blog;